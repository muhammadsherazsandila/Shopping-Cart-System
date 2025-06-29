import { useProduct } from "../context/ProductContext";
import List from "./List";

const All = () => {
  const { products, setProducts } = useProduct();
  return (
    <>
      {/* All Products */}
      <section className="bg-transparent py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 inline-block border-b-4 border-indigo-500 pb-1">
              All Products
            </h1>
            <p className="mt-2 text-gray-500 text-base">
              Explore a wide range of styles and deals
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <List products={products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default All;
