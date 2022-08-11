import "../styles/Produto.css"

const TelaDeProduto = (props) => {
    return (
    <div className="produto">
        <img src={`${props.image}`} alt={`${props.title}`} />
        <h3>{props.title}</h3>
        <h4>R${props.price}</h4>
        <p>Categoria: {props.category}</p>
    </div>
          
    );
  };
  
  export default TelaDeProduto;