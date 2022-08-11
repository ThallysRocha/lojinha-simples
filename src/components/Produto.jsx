import "../styles/Produto.css"

const Produto = (props) => {
    return (
    <div className="product">
        <div className="pic" ><img src={`${props.image}`} alt={`${props.title}`} /></div>
        <h3 className="name">{props.title}</h3>
        <p className="category">{props.category}</p>
        <h4 className="price">R${(5.27*props.price).toFixed(2)}</h4>
        <button className="cartAdd">Adicionar ao carrinho</button>
    </div>
          
    );
  };
  
  export default Produto;