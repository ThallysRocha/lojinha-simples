import "../styles/Produto.css"
import { useCarrinho } from "../contexts/Carrinho"
import { useNavigate } from "react-router-dom";
const Produto = (props) => {

    const {
        addToCart
      } = useCarrinho();
    const navigate = useNavigate();  
    return (
    <div className="product">
        <div className="pic" ><img src={`${props.image}`} alt={`${props.title}`} /></div>
        <h3 className="name">{props.title}</h3>
        <p className="category">{props.category}</p>
        <h4 className="price">R${(5.27*props.price).toFixed(2)}</h4>
        <button className="cartAdd" onClick={()=>{addToCart(props);navigate("/carrinho");/*addToCart1(props);console.log(products);*/}}>Adicionar ao carrinho</button>
    </div>
          
    );
  };
  
  export default Produto;