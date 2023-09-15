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
    <div className="container mx-auto m-8 max-w-2xl">
      <h1 className="text-5xl uppercase font-bold p-4 text-center">Products</h1>
      <h3 className="text-xl text-center py-4">
        This is a showcase of an eCommerce pricing model.
      </h3>

      <div className="container mx-auto m-8">
        <ProductList products={products} setproducts={setproducts} />
      </div>
    </div>
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
          .select("name, description,price")
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
    return <div className="">Loading...</div>;
  }

  // display all the products
  return (
    <>
      {products?.length > 0 ? (
        <div className="flex flex-wrap gap-4 content-center justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="grow card w-48 bg-base-200 shadow-xl"
            >
              <figure>
                <img
                  src="/img/logo_lxt.svg"
                  alt="Lexington Tech"
                  className="p-4 h-32"
                />
              </figure>
              <div className="card-body">
                <div className="card-title text-2xl font-bold text-accent">
                  {product.name}
                </div>
                <div className="text-sm">{product.description}</div>
                {/*<ul className="text-xs list-disc list-inside">
                  <li>Risk factor - {product.metadata.risk}</li>
                  <li>Drawdown factor - {product.metadata.drawdown}</li>
                  <li>Leverage factor - {product.metadata.leverage}</li>
          </ul>*/}
                <div className="text-sm">{product.price}</div>
                <div className="card-actions justify-end">
                  <button className="btn btn-accent">Subscribe</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-accent">No products available</div>
      )}
    </>
  );
};
