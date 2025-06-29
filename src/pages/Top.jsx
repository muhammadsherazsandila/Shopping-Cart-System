import React from "react";
import List from "../components/List";
import { useProduct } from "../context/ProductContext";

function Top() {
  const { products, setProducts } = useProduct();
  const topProducts = products.filter((product) => product.catagory === "top");
  return (
    <>
      {/* Top Products */}
      <section className="bg-transparent py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 inline-block border-b-4 border-indigo-500 pb-1">
              Top Products
            </h1>
            <p className="mt-2 text-gray-500 text-base">
              Shop the latest styles and deals
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <List products={topProducts} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Top;
