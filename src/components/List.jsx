import { useState, useEffect } from "react";
import { useProduct } from "../context/ProductContext";
import { toastConfig } from "../utils/toast";
import { toast } from "react-toastify";

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < fullStars ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id="halfStar" x1="0" x2="100%" y1="0" y2="0">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path
              fill="url(#halfStar)"
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

function SizeSelector({ sizes, selectedSize, onSelectSize }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelectSize(size)}
          className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${
            selectedSize === size
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export default function List({ products }) {
  const [selectedSizes, setSelectedSizes] = useState({});
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const { whishedProducts, setWhishedProducts, cartProducts, setCartProducts } =
    useProduct([]);
  const whishedProductsIds = whishedProducts.map((p) => p.id);
  const toggleWishlist = (productId) => {
    if (whishedProducts.includes(products.find((p) => p.id === productId))) {
      setWhishedProducts(whishedProducts.filter((p) => p.id !== productId));
    } else {
      setWhishedProducts([
        ...whishedProducts,
        products.find((p) => p.id === productId),
      ]);
    }
  };

  const addToCart = (product, size) => {
    if (!size) {
      toast.error("Please select a size", toastConfig("sizeError"));
      return;
    }

    if (cartProducts.some((p) => p.id === product.id && p.size === size)) {
      setCartProducts(
        cartProducts.map((p) =>
          p.id === product.id && p.size === size
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      );
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1, size }]);
    }

    toast.success("Product added to cart", toastConfig("success"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customers also purchased
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover products that complement your style and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => {
                    toggleWishlist(product.id);
                  }}
                  className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                  aria-label="Add to wishlist"
                >
                  <svg
                    className={`w-5 h-5 transition-colors ${
                      whishedProductsIds.includes(product.id)
                        ? "text-red-500 fill-current"
                        : "text-gray-400 hover:text-red-500"
                    }`}
                    fill={
                      whishedProductsIds.includes(product.id)
                        ? "currentColor"
                        : "none"
                    }
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    loading="lazy"
                    className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-0 md:translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <StarRating rating={product.rating} />
                        <span className="ml-1 text-sm text-white">
                          ({product.reviews})
                        </span>
                      </div>
                      <span className="inline-block px-2  text-center py-1 text-xs font-medium text-white bg-black/60 rounded-full backdrop-blur-sm">
                        {product.color}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </p>
                  </div>

                  <SizeSelector
                    sizes={product.sizes}
                    selectedSize={selectedSizes[product.id]}
                    onSelectSize={(size) => handleSizeSelect(product.id, size)}
                  />

                  <div className="mt-auto pt-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => setQuickViewProduct(product)}
                        className="flex-1 py-3 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        Quick View
                      </button>
                      <button
                        className="py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition-colors duration-300 flex items-center justify-center cursor-pointer"
                        onClick={() =>
                          addToCart(product, selectedSizes[product.id])
                        }
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 ">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white text-gray-700 shadow-md hover:shadow-lg hover:animate-spin hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative ">
                <img
                  src={quickViewProduct.imageSrc}
                  alt={quickViewProduct.imageAlt}
                  className="w-full h-full"
                />
              </div>

              <div className="p-8 overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {quickViewProduct.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      <StarRating rating={quickViewProduct.rating} />
                      <span className="ml-2 text-gray-600">
                        {quickViewProduct.reviews} reviews
                      </span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">
                    ${quickViewProduct.price}
                  </p>
                </div>

                <p className="text-gray-700 mb-6">
                  Premium quality {quickViewProduct.name.toLowerCase()} made
                  from sustainable materials. Designed for comfort and style to
                  elevate your everyday look.
                </p>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Color</h4>
                  <div className="flex gap-3">
                    <button
                      className={`w-10 h-10 rounded-full border-2 ${
                        quickViewProduct.color === "Black"
                          ? "border-gray-900"
                          : "border-transparent"
                      }`}
                      style={{
                        backgroundColor:
                          quickViewProduct.color === "White"
                            ? "#f3f4f6"
                            : "#111827",
                      }}
                    ></button>
                    <button className="w-10 h-10 rounded-full border-2 border-transparent bg-gray-300"></button>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-medium text-gray-900 mb-3">Size</h4>
                  <div className="grid grid-cols-4 gap-3">
                    {quickViewProduct.sizes.map((size) => (
                      <button
                        key={size}
                        className={`py-3 px-4 text-center rounded-lg ${
                          selectedSizes[quickViewProduct.id] === size
                            ? "bg-gray-900 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        onClick={() =>
                          handleSizeSelect(quickViewProduct.id, size)
                        }
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    className="flex-1 py-4 px-6 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    onClick={() =>
                      addToCart(
                        quickViewProduct,
                        selectedSizes[quickViewProduct.id]
                      )
                    }
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => toggleWishlist(quickViewProduct.id)}
                    className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                  >
                    <svg
                      className={`w-6 h-6 ${
                        whishedProductsIds.includes(quickViewProduct.id)
                          ? "text-red-500 fill-current"
                          : "text-gray-600"
                      }`}
                      fill={
                        whishedProductsIds.includes(quickViewProduct.id)
                          ? "currentColor"
                          : "none"
                      }
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
