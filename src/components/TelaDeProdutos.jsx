import { useEffect, useState } from "react";
import { getProducts } from "../api";
import Produto from "./Produto";
import "../styles/TelaDeProdutos.css";

const TelaDeProdutos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const initializeProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    initializeProducts();
    console.log(products)
  }, []);

  return (
    <>
      <h1>Produtos</h1>
      {products.map((product) => {
        return (          
            <Produto
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
            />
        );
      })}
    </>
  );
};

export default TelaDeProdutos;