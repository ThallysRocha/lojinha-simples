import { useEffect, useState } from "react";
import "../styles/TelaDeProdutos.css";
import { useNavigate } from "react-router-dom";

const TelaDoCarrinho = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{    
        setProducts(JSON.parse(window.localStorage.getItem('cart')));
  },[]);
    const navigate = useNavigate();  
    const removeProduct = (product) =>{
        let filtered = products.filter(function(value, index, arr){ 
            return value !== product;
        });
        setProducts(filtered);
        window.localStorage.setItem('cart',JSON.stringify(filtered));            
        
    }
    const addProduct = (product) =>{
        products.forEach(item =>{
            if(item === product){                
                
                item.quantity++;
                window.localStorage.setItem('cart',JSON.stringify(products));
                navigate("/carrinho");
            }
        });
    }
    const subProduct = (product) =>{
        products.forEach(item =>{
            if(item === product){                
                if(item.quantity>1)item.quantity--;
                else{
                    removeProduct(item);
                }
                window.localStorage.setItem('cart',JSON.stringify(products));
                navigate("/carrinho");
            }
        });
    }
    
  return (
    <>
      <h1 className="title">Carrinho</h1>
      
      <div className="productList">
        <button className="buy" onClick={()=>{navigate("/finalizado")}}>Finalizar compra</button>
        <div className="productList-body">{
          products.map((product) => {
            return (          
                <div className="product">
                    <button className="removeProduct" onClick={()=>{removeProduct(product)}}>excluir</button>
                    <div className="pic" ><img src={`${product.image}`} alt={`${product.title}`} /></div>
                    <h3 className="name">{product.title}</h3>
                    <p className="category">{product.category}</p>
                    <h4 className="price">R${(5.27*product.price).toFixed(2)}</h4>
                    <div className="quantity">
                        <button className="add" onClick={()=>{addProduct(product)}}>adicionar</button>
                        <button className="remove" onClick={()=>{subProduct(product)}}>remover</button>                     
                        <p>quantidade no carrinho: {product.quantity}</p>    
                    </div>
                                    
                    

                </div>
            );
          })}
        </div>
      </div>
      
      
    </>
  );
};

export default TelaDoCarrinho;