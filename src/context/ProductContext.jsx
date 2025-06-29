import { createContext, useState, useContext, useEffect } from "react";
const productContext = createContext();
import { stockProducts } from "../utils/products";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(stockProducts);

  const [whishedProducts, setWhishedProducts] = useState(() => {
    const stored = localStorage.getItem("whishedProducts");
    return stored ? JSON.parse(stored) : [];
  });

  const [cartProducts, setCartProducts] = useState(() => {
    const stored = localStorage.getItem("cartProducts");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("whishedProducts", JSON.stringify(whishedProducts));
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts, whishedProducts]);

  return (
    <productContext.Provider
      value={{
        products,
        setProducts,
        whishedProducts,
        setWhishedProducts,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { ProductProvider, useProduct };
