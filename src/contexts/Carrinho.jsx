import { useContext, useEffect, useMemo } from "react";

import { createContext, useState } from "react";
const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [products,setProducts] = useState();
  const [count,setCount] = useState();
  // useEffect(()=>{
  //   setProducts([]);
  //   setCount(0);
  // },[]);
  const addToCart = (product) =>{
    
    let newItem = true;
    products.forEach(e => {
        if(e.id === product.id){
            newItem = false;
        }
        
    });
    
    if(newItem){
        const productsAux = [...products,{
          id:product.id,
          image:product.image,
          price:product.price,
          title:product.title,
          quantity:1,
      }]
        setProducts(productsAux);
        setCount(1+products.length)
      }    
  };
  const value = useMemo(
    () => ({
      products,setProducts,
      count,setCount,
      addToCart,
    }),
    [products,count]
  );

  return (
    <CarrinhoContext.Provider value={value}>{children}</CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) throw new Error("useCarrinho must be used within a CarrinhoProvider");
  return context;
};