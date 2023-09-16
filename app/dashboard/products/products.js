"use client";

import { useState, useEffect } from "react";
import { useSession, useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

const supabaseClient = async (supabaseAccessToken) => {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    },
  );
  // set Supabase JWT on the client object,
  // so it is sent up with all Supabase requests
  return supabase;
};

export default function Products() {
  const { isSignedIn, isLoading, user } = useUser();
  const [products, setproducts] = useState(null);

  return (
    <>
      <div className="mx-auto">
        <h1 className="my-4 text-5xl font-bold uppercase text-center">
          Lexington Tech Consulting & Management Services
        </h1>
        <h2 className="text-2xl uppercase font-semibold p-4 text-center">
          ClerkDev & Supabase (PostgreSQL) Integration
        </h2>
        <h3 className="text-xl text-center py-4">
          This is a realtime showcase of JWT (JSON Web Token) authentication &
          session management.
        </h3>
      </div>
      {isLoading ? (
        <></>
      ) : (
        <section className="container mx-auto pb-8 mb-8">
          {isSignedIn ? (
            <>
              {/*<AddProductForm products={products} setproducts={setproducts} />*/}
              <div className="container mx-auto m-8">
                <ProductList products={products} setproducts={setproducts} />
              </div>
            </>
          ) : (
            <div className="uppercase text-2xl text-center">
              Loading Products...
            </div>
          )}
        </section>
      )}
    </>
  );
}

const ProductList = ({ products, setproducts }) => {
  const { session } = useSession();
  const [loadingproducts, setLoadingproducts] = useState(true);

  // on first load, fetch and set products
  useEffect(() => {
    const loadproducts = async () => {
      try {
        setLoadingproducts(true);
        const supabaseAccessToken = await session.getToken({
          template: "lexington-demo",
        });
        const supabase = await supabaseClient(supabaseAccessToken);
        const { data: products } = await supabase
          .from("products")
          .select("name,description,price,metadata")
          .order("orderby", { ascending: true })
          .eq("active", true);
        setproducts(products);
      } catch (e) {
        alert(e);
      } finally {
        setLoadingproducts(false);
      }
    };
    loadproducts();
  }, []);

  // if loading, just show basic message
  if (loadingproducts) {
    return (
      <div className="uppercase text-2xl text-center">Loading Products ...</div>
    );
  }

  // display all the products
  return (
    <>
      {products?.length > 0 ? (
        <div className="flex flex-wrap flex-grow gap-4 content-center justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="grow card w-64 bg-base-300 shadow-xl"
            >
              <figure>
                <img
                  src="/logo_lxt.svg"
                  alt="Lexington Demo"
                  className="p-4 h-32"
                />
              </figure>
              <div className="card-body">
                <div className="card-title text-2xl font-bold text-accent">
                  {product.name}
                </div>
                <div className="text-sm">{product.description}</div>
                <ul className="text-xs list-disc list-outside">
                  <li>
                    <span className="text-secondary">
                      Consulting Management
                    </span>{" "}
                    - {product.metadata.consultingmanagement}
                  </li>
                  <li>
                    <span className="text-secondary">Project Management</span> -{" "}
                    {product.metadata.projectmanagement}
                  </li>
                  <li>
                    <span className="text-secondary">Product Management</span> -{" "}
                    {product.metadata.product}
                  </li>
                  <li>
                    <span className="text-secondary">Technology</span> -{" "}
                    {product.metadata.technology}
                  </li>
                  <li>
                    <span className="text-secondary">AI</span> -{" "}
                    {product.metadata.ai}
                  </li>
                  <li>
                    <span className="text-secondary">Web3</span> -{" "}
                    {product.metadata.web3}
                  </li>
                  <li>
                    <span className="text-secondary">Support</span> -{" "}
                    {product.metadata.support}
                  </li>
                </ul>
                <h2 className="text-xl font-semi-bold">
                  ${product.price} per Project
                </h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-sm btn-primary">Subscribe</button>
                </div>
              </div>
            </div>
          ))}
          <p className="my-4 text-sm font-bold text-center">
            *All engagements are project time-based per the agreed Agile Sprint
            timeframe.
          </p>
        </div>
      ) : (
        <div className="text-accent">No products or services available</div>
      )}
    </>
  );
};

function AddProductForm({ products, setproducts }) {
  const { session } = useSession();
  const [newProduct, setNewProduct] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newProduct === "") {
      return;
    }

    const supabaseAccessToken = await session.getToken({
      template: "lexington-demo",
    });
    const supabase = await supabaseClient(supabaseAccessToken);
    const { data } = await supabase
      .from("products")
      .insert({ title: newProduct, user_id: session.user.id })
      .select();

    setproducts([...products, data[0]]);
    setNewProduct("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setNewProduct(e.target.value)}
        value={newProduct}
      />
      &nbsp;<button>Add Product</button>
    </form>
  );
}
