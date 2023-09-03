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

import supabaseClient from "/utils/supabase";

export default function ProductsListPage() {
  const { isSignedIn, isLoading, user } = useUser();
  const [Products, setProducts] = useState(null);
  return (
    <>
      <ProductHeader />
      {isLoading ? (
        <></>
      ) : (
        <main className="mx-auto">
          <div className="text-center">
                <ProductList Products={Products} setProducts={setProducts} />
          </div>
        </main>
      )}
    </>
  );
}

const ProductHeader = () => {
  const { isSignedIn } = useUser();
  return (
    <header className="flex h-16 w-full bg-base-300 my-4 p-4 justify-content">
      <div className="">Products</div>
    </header>
  );
};

const ProductList = ({ Products, setProducts }) => {
  const { session } = useSession();
  const [loadingProducts, setLoadingProducts] = useState(true);

  // on first load, fetch and set Products
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoadingProducts(true);
        const supabaseAccessToken = await session.getToken({
          template: "supabase",
        });
        const supabase = await supabaseClient(supabaseAccessToken);
        const { data: Products } = await supabase.from("products").select("*");
        setProducts(Products);
      } catch (e) {
        alert(e);
      } finally {
        setLoadingProducts(false);
      }
    };
    loadProducts();
  }, []);

  // if loading, just show basic message
  if (loadingProducts) {
    return <div className="text-2xl uppercase mx-auto">Loading Products...</div>;
  }

  // display all the products
  return (
    <>
      {Products?.length > 0 ? (
        <div className="p-4">
          <ol>
            {Products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="text-xl p-2">Product configuration is waiting approval.</div>
      )}
    </>
  );
};

