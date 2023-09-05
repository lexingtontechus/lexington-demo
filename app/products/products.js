'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';

const ProductList = ({ products, setproducts }) => {
  const [loadingproducts, setLoadingproducts] = useState(true);
  // on first load, fetch and set products
  useEffect(() => {
    const loadproducts = async () => {
      try {
        setLoadingproducts(true);
        const supabase = createClientComponentClient();

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
    return <div className="uppercase">Loading...</div>;
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
                  src="/img/logo-sunset.svg"
                  alt="Sunset Ventures"
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
      ) : (
        <div className="text-accent">No products available</div>
      )}
    </>
  );
};

export default function Products() {
  const [products, setproducts] = useState(null);
  return (
    <div className="container mx-auto">
                  <ProductList products={products} setproducts={setproducts} />
      </div>
  );
}