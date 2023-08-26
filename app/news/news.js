"use client";
import { useState, useEffect } from "react";
import {
  useSession,
  useUser,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = async (supabaseAccessToken) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    }
  );
  // set Supabase JWT on the client object,
  // so it is sent up with all Supabase requests
  return supabase;
};

export default function Home() {
  const { isSignedIn, isLoading, user } = useUser();
  const [todos, setTodos] = useState(null);
  return (
    <>
      <Header />
      {isLoading ? (
        <></>
      ) : (
        <main className="">
          <div className="">
            {isSignedIn ? (
              <>
                <div className="">Welcome {user.firstName}!</div>
                <AddTodoForm todos={todos} setTodos={setTodos} />
                <TodoList todos={todos} setTodos={setTodos} />
              </>
            ) : (
              <div className="">Sign in to create your todo list!</div>
            )}
          </div>
        </main>
      )}
    </>
  );
}

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="">
      <div>My Todo App</div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div>
          <div>
            <SignInButton mode="modal">
              <button className="btn btn-secondary mask  mask-squircle">
                Sign In
              </button>
            </SignInButton>
          </div>
          <div>
            <SignUpButton mode="modal">
              <button className="btn btn-secondary mask mask-triangle">
                Sign In
              </button>
            </SignUpButton>
          </div>
        </div>
      )}
    </header>
  );
};

const TodoList = ({ todos, setTodos }) => {
  const { session } = useSession();
  const [loadingTodos, setLoadingTodos] = useState(true);

  // on first load, fetch and set todos
  useEffect(() => {
    const loadTodos = async () => {
      try {
        setLoadingTodos(true);
        const supabaseAccessToken = await session.getToken({
          template: "Supabase",
        });
        const supabase = await supabaseClient(supabaseAccessToken);
        const { data: todos } = await supabase.from("demoNews").select("*");
        setTodos(todos);
      } catch (e) {
        alert(e);
      } finally {
        setLoadingTodos(false);
      }
    };
    loadTodos();
  }, []);

  // if loading, just show basic message
  if (loadingTodos) {
    return <div className="">Loading...</div>;
  }

  // display all the todos
  return (
    <>
      {todos?.length > 0 ? (
        <div className="">
          <ol>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="">You don&apos;t have any todos!</div>
      )}
    </>
  );
};

function AddTodoForm({ todos, setTodos }) {
  const { session } = useSession();
  const [newTodo, setNewTodo] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newTodo === "") {
      return;
    }

    const supabaseAccessToken = await session.getToken({
      template: "Supabase",
    });
    const supabase = await supabaseClient(supabaseAccessToken);
    const { data } = await supabase
      .from("demoNews")
      .insert({ title: newTodo, user_id: session.user.id })
      .select();

    setTodos([...todos, data[0]]);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setNewTodo(e.target.value)} value={newTodo} />
      &nbsp;<button>Add Todo</button>
    </form>
  );
}
