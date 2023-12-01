import ProductsPage from "./products";
//import StripePage from "./stripe";
//import LemonSqueezy from "./lemonsqueezy";
export const metadata = {
  title: "Products | Lexington Demo",
};

const Products = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-5xl uppercase font-bold p-4 text-center">Products</h1>
      <h3 className="text-2xl text-center py-4">
        This is a showcase of management consulting business pricing model.
      </h3>
      <p className="text-xl font-bold uppercase py-4">
        The products can be easily integrated with Stripe or LemonSqueezy to
        launch your storefront or eCommerce services.
      </p>
      <ProductsPage />
    </div>
  );
};

export default Products;
