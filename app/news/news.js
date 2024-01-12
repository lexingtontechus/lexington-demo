"use client";
import Link from "next/link";
import parse from "html-react-parser";

export default async function Github() {
  const data = await fetch(
    "https://techcrunch.com/wp-json/wp/v2/posts?per_page=30&context=embed",
    //"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d582775c5d244c70ad27998eafba5694",
    { cache: "no-cache" },
  );
  const json = await data.json();
  //const { articles } = await data.json();
  //let json = JSON.stringify(articles).replace(/(\\n)*(\\t)*/g, "");

  return (
    <section className="flex flex-wrap gap-4 content-center justify-center p-8">
      {json.map((news) => (
        <div key={news.id} className="grow card w-64 bg-base-200 shadow-xl">
          <div className="card-body">
            <figure className="image-full h-32">
              <img
                src={news.jetpack_featured_media_url}
                alt={news.title.rendered}
              />
            </figure>
            <div class="card-title font-bold text-primary text-pretty">
              {parse(news.title.rendered)}
            </div>
            <p className="text-sm text-pretty">
              {parse(news.excerpt.rendered)}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary font-semibold">
                <Link
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
