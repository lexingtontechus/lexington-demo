import Link from "next/link";

//import GithubPage from "./github";

export default async function Github() {
  const data = await fetch(
    "https://api.github.com/users/lexingtontechus/repos",
    { cache: "no-cache" },
  );
  const json = await data.json();

  //  return json;

  return (
    <section className="flex flex-wrap gap-4 content-center justify-center p-8">
      {json.map((github) => (
        <div key={github.id} className="grow card w-64 bg-base-200 shadow-xl">
          <div className="card-body">
            <div class="card-title font-bold text-primary text-wrap">
              Project:
              <Link href={github.html_url} target="_blank">
                {github.name}
              </Link>
            </div>
            <p className="text-sm">{github.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
