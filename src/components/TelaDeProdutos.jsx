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
  },[]);

  return (
    <>
      <h1 className="title">Produtos</h1>
      <div className="productList">
        <div className="productList-body">{
          products.map((product) => {
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
        </div>
      </div>
      
      
    </>
  );
};

export default TelaDeProdutos;