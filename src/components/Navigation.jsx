import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MdAllOut,
  MdHome,
  MdShoppingCart,
  MdOutlineVerticalAlignTop,
  MdViewList,
} from "react-icons/md";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import {
  XMarkIcon,
  PlusIcon,
  MinusIcon,
  TrashIcon,
  ArrowRightIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useProduct } from "../context/ProductContext";
import { toast } from "react-toastify";
import { toastConfig } from "../utils/toast";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Top", href: "/top" },
  { name: "All", href: "/all" },
  { name: "About", href: "/about" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const { cartProducts, setCartProducts } = useProduct();
  const navigate = useNavigate();

  const [activeNav, setActiveNav] = useState("Home");

  const subtotal = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = cartProducts.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + (item.originalPrice - item.price) * item.quantity;
    }
    return sum;
  }, 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + tax + shipping;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartProducts(
      cartProducts.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setIsRemoving(true);
    setTimeout(() => {
      setCartProducts(cartProducts.filter((item) => item.id !== id));
      setIsRemoving(false);
    }, 300);
    toast.success("Product removed from cart", toastConfig("success-remove"));
  };

  const handleCheckout = () => {
    // just showing toast for now and removing all items from cart and localstorage
    toast.success("Checkout successful", toastConfig("success-checkout"));
    setCartProducts([]);
  };

  const [showNav, setShowNav] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);

      if (currentScrollY > lastScrollY.current && currentScrollY > 0) {
        setShowNav(false); // hide navbar
      } else {
        setShowNav(true); // show navbar
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 inset-x-0 z-50 transition-transform duration-300 ease-in-out w-full max-w-screen ${
          scrollPosition === 0
            ? "bg-transparent backdrop-blur-none shadow-none border-b-0"
            : "shadow-md backdrop-blur-md"
        } ${showNav ? "translate-y-0" : "-translate-y-full border-b-gray-200"}`}
      >
        <nav
          aria-label="Global"
          className="flex items-center justify-center md:justify-between p-2 lg:px-8"
        >
          <div className="flex lg:flex-1 items-center juscentify-center">
            <Link to={"/"} className="-m-1.5 p-1.5">
              <img alt="" src="/images/logo.png" className="h-18 w-auto" />
            </Link>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm/6 font-semibold text-gray-900 ${
                  activeNav === item.name ? "text-indigo-600" : "text-gray-900"
                }`}
                onClick={() => setActiveNav(item.name)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div
            className="hidden lg:flex lg:flex-1 lg:justify-end relative cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <span className="absolute top-0 right-0 inline-flex items-center justify-center h-6 w-6 translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100 text-xs font-semibold text-indigo-600">
              {" "}
              {cartProducts.length || 0}{" "}
            </span>
            <span className="text-sm/6 font-semibold text-indigo-600">
              <MdShoppingCart className="size-6" />
            </span>
          </div>
        </nav>
      </header>

      <Dialog open={open} onClose={setOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full"
              >
                <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-2xl font-bold text-gray-900">
                        Your Shopping Cart
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 transition-colors"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        {cartProducts.length === 0 ? (
                          <div className="py-12 text-center">
                            <div className="mx-auto h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">
                              Your cart is empty
                            </h3>
                            <p className="mt-1 text-gray-500">
                              Add some items to get started
                            </p>
                            <button
                              onClick={() => setOpen(false)}
                              className="mt-6 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                              Continue Shopping
                            </button>
                          </div>
                        ) : (
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartProducts.map((product) => (
                              <li
                                key={product.id}
                                className={`flex py-6 transition-all duration-300 ${
                                  isRemoving && "opacity-50 scale-95"
                                }`}
                              >
                                <div className="size-24 shrink-0 overflow-hidden rounded-lg border border-gray-200">
                                  <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="size-full object-cover hover:scale-105 transition-transform duration-300"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a
                                          href={product.href}
                                          className="hover:text-indigo-600 transition-colors"
                                        >
                                          {product.name}
                                        </a>
                                      </h3>
                                      <div className="ml-4 flex flex-col items-end">
                                        <p className="text-lg font-bold">
                                          $
                                          {(
                                            product.price * product.quantity
                                          ).toFixed(2)}
                                        </p>
                                        {product.originalPrice && (
                                          <p className="text-sm text-gray-500 line-through">
                                            $
                                            {(
                                              product.originalPrice *
                                              product.quantity
                                            ).toFixed(2)}
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500 flex items-center">
                                      Color: {product.color}
                                      {product.inStock ? (
                                        <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                          In Stock
                                        </span>
                                      ) : (
                                        <span className="ml-2 inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                                          Backorder
                                        </span>
                                      )}
                                    </p>
                                    <div className="mt-1 text-xs text-gray-500">
                                      Size: {product.size}
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-center justify-between text-sm mt-2">
                                    <div className="flex items-center border border-gray-200 rounded-lg">
                                      <button
                                        onClick={() =>
                                          updateQuantity(
                                            product.id,
                                            product.quantity - 1
                                          )
                                        }
                                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors"
                                        disabled={product.quantity <= 1}
                                      >
                                        <MinusIcon className="h-4 w-4" />
                                      </button>
                                      <span className="px-3 py-1 text-gray-900">
                                        {product.quantity}
                                      </span>
                                      <button
                                        onClick={() =>
                                          updateQuantity(
                                            product.id,
                                            product.quantity + 1
                                          )
                                        }
                                        className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors"
                                      >
                                        <PlusIcon className="h-4 w-4" />
                                      </button>
                                    </div>

                                    <div className="flex ml-2">
                                      <button
                                        type="button"
                                        onClick={() => removeItem(product.id)}
                                        className="font-medium text-red-600 hover:text-red-500 flex items-center group"
                                      >
                                        <TrashIcon className="h-5 w-5 mr-1 text-red-500 group-hover:scale-110 transition-transform" />
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>

                  {cartProducts.length > 0 && (
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="space-y-4">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>${subtotal.toFixed(2)}</p>
                        </div>

                        {discount > 0 && (
                          <div className="flex justify-between text-base text-green-600">
                            <p>Discount</p>
                            <p>-${discount.toFixed(2)}</p>
                          </div>
                        )}

                        <div className="flex justify-between text-base text-gray-600">
                          <p>Shipping</p>
                          <p>
                            {shipping === 0
                              ? "FREE"
                              : `$${shipping.toFixed(2)}`}
                          </p>
                        </div>

                        <div className="flex justify-between text-base text-gray-600">
                          <p>Tax</p>
                          <p>${tax.toFixed(2)}</p>
                        </div>

                        <div className="flex justify-between text-xl font-bold text-gray-900 pt-4 border-t border-gray-200">
                          <p>Total</p>
                          <p>${total.toFixed(2)}</p>
                        </div>

                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>

                        <div className="mt-6">
                          <span
                            className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 hover:shadow-lg"
                            onClick={handleCheckout}
                          >
                            Checkout
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="ml-2 h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </span>
                        </div>

                        <div className="mt-4 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or{" "}
                            <button
                              type="button"
                              onClick={() => setOpen(false)}
                              className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                            >
                              Continue Shopping
                              <ArrowRightIcon className="h-4 w-4 ml-1" />
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden w-full max-w-screen fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 shadow-md z-50">
        <button
          onClick={() => navigate("/")}
          className="flex flex-col items-center text-gray-700 hover:text-blue-800"
        >
          <MdHome className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </button>

        <button
          onClick={() => navigate("/top")}
          className="flex flex-col items-center text-gray-700 hover:text-blue-800"
        >
          <MdOutlineVerticalAlignTop className="h-6 w-6" />
          <span className="text-xs">Top</span>
        </button>

        <button
          onClick={() => {
            navigate("/all");
          }}
          className="flex flex-col items-center text-gray-700 hover:text-blue-800"
        >
          <MdViewList className="h-6 w-6" />
          <span className="text-xs">All</span>
        </button>

        <button
          onClick={() => setOpen(true)}
          className="flex flex-col items-center text-gray-700 hover:text-blue-800"
        >
          <MdShoppingCart className="h-6 w-6" />
          <span className="text-xs">Cart</span>
        </button>
      </div>
    </>
  );
};

export default Navigation;
