import { useEffect, useState } from "react";

export const useProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/product`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return {
    product,
  };
};
