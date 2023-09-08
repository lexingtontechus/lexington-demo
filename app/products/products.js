'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';

const ProductList = ({ products, setproducts }) => {
  const [loadingproducts, setLoadingproducts] = useState(true);
  const supabase = createClientComponentClient()
  // on first load, fetch and set products
  useEffect(() => {
    const loadproducts = async () => {
      try {
        setLoadingproducts(true);
        const { data: products } = await supabase
          .from("products")
          .select("*")
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
    <div className="container mx-auto p-4"><div className="uppercase text-2xl text-center">Loading
    <p className="py-6">
            <span className="h-32 loading loading-bars loading-xs"></span>
            <span className="h-32 loading loading-bars loading-sm"></span>
            <span className="h-32 loading loading-bars loading-md"></span>
            <span className="h-32 loading loading-bars loading-lg"></span>
          </p></div>
    </div>);
  }

  // display all the products
  return (
        <div className="flex flex-wrap gap-4 content-center justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="grow card w-48 bg-base-200 shadow-xl"
            >
              <figure>
                <img
                  src={product.product_url}
                  alt={product.name}
                  className="p-4 h-32"
                />
              </figure>
              <div className="card-body">
                <div class="card-title text-2xl font-bold text-accent">
                  {product.name}
                </div>
                <div>{product.description}</div>
                {/* <div>
                    <pre>{JSON.stringify(product.metadata)}</pre>
          </div>*/}
                <div className="card-actions justify-end">
                  <button className="btn btn-neutral">Subscribe</button>
                </div>
              </div>
            </div>
          ))}
        </div>
  );
};

export default function Products() {
  const [products, setproducts] = useState(null);
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl uppercase font-bold p-4 text-center">Products</h1>
        <ProductList products={products} setproducts={setproducts} />
   </div>
  );
}