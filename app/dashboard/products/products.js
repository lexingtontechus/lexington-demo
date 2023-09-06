"use client";

const products = [
  {
    name: "Standard Plan",
    tagline: "Start your next side project",
    price: "$250 per month",
    action: "Subscribe",
    description: "Ideal for  SaaS, websites, and e-commerce projects.",
    producturl:
      "https://ifbzltfkzlvnlgarvsxb.supabase.co/storage/v1/object/public/products/product1.jpg",
  },
  {
    name: "Pro Plan",
    tagline: "Supercharge your development.",
    price: "$500 per month",
    action: "Subscribe",
    description: "Everything in Standard, plus higher limits and team features",
    producturl:
      "https://ifbzltfkzlvnlgarvsxb.supabase.co/storage/v1/object/public/products/product2.jpg",
  },
  {
    name: "Business Plan",
    tagline: "For teams with more security, support, and performance needs.",
    price: "$750 per month",
    action: "Subscribe",
    description:
      "Scale your business, increase productivity, and keep your teams connected.",
    producturl:
      "https://ifbzltfkzlvnlgarvsxb.supabase.co/storage/v1/object/public/products/product3.jpg",
  },
  {
    name: "Enterprise Plan",
    tagline: "For enterprises teams with DDOS security and 2FA support.",
    price: "Contact To Discuss",
    action: "Contact",
    description:
      "The flexibility and power to meet your regulatory requirements and your growth.",
    producturl:
      "https://ifbzltfkzlvnlgarvsxb.supabase.co/storage/v1/object/public/products/product4.jpg",
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto m-8 max-w-2xl">
      <h1 className="text-5xl uppercase font-bold p-4 text-center">Products</h1>
       <h3 className="text-xl text-center py-4">
        This is a showcase of an eCommerce pricing model.
      </h3>
      <div className="flex flex-wrap gap-4 content-center justify-center">
        {products.map((item) => (
          <div
            key={item.id}
            className="grow card card-bordered bg-secondary shadow-xl max-w-[300px] max-h-[500px] rounded-xl "
          >
            <figure className="image-full">
              <img src={item.producturl} alt={item.name} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <h3>{item.tagline}</h3>
              <p className="text-sm">{item.description}</p>
              <p className="font-semibold text-primary-content">{item.price}</p>
              <div className="card-actions">
                <button className="btn btn-primary">{item.action}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
