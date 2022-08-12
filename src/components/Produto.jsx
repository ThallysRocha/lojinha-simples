import "../styles/Produto.css"

let cart = JSON.parse(window.localStorage.getItem('cart'));
if(cart === null) cart = [];
const addToCart = (product) => {
    let newItem = true;
    cart.forEach(e => {
        if(e.id === product.id){
            newItem = false;
        }
        
    });
    if(newItem){
        cart.push({
            id:product.id,
            image:product.image,
            price:product.price,
            title:product.title,
            quantity:1,
        });
        window.localStorage.setItem('cart',JSON.stringify(cart));
    }
}
const Produto = (props) => {
    return (
    <div className="product">
        <div className="pic" ><img src={`${props.image}`} alt={`${props.title}`} /></div>
        <h3 className="name">{props.title}</h3>
        <p className="category">{props.category}</p>
        <h4 className="price">R${(5.27*props.price).toFixed(2)}</h4>
        <button className="cartAdd" onClick={()=>{addToCart(props)}}>Adicionar ao carrinho</button>
    </div>
          
    );
  };
  
  export default Produto;