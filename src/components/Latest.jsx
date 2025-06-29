import { useProduct } from "../context/ProductContext";
import List from "./List";

const Latest = () => {
  const { products, setProducts } = useProduct();

  const latestProducts = products.filter(
    (product) => product.catagory === "latest"
  );
  return (
    <>
      {/* Latest Products */}
      <section
        id="latest"
        className="bg-gradient-to-b from-white via-gray-50 to-white py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 inline-block border-b-4 border-indigo-500 pb-1">
              Latest Products
            </h1>
            <p className="mt-2 text-gray-500 text-base">
              Discover our newest arrivals — curated just for you.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <List products={latestProducts} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Latest;
