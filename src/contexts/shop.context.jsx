import { useEffect, useState } from "react";
import { createContext } from "react";
import { addCollectionAndDocuments } from "../utils/firebase.utils.jsx";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const value = {
    products,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
