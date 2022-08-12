import Link from '@mui/material/Link';
import "../styles/Header.css";
import { useEffect, useState } from "react";
const Header = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        
        let cart = JSON.parse(window.localStorage.getItem('cart'));
        if(cart === null) cart = [];
        setCount(cart.length);
  },[count]);
    return(
        <div className="Header">
                <h1 className='title'>Lojinha</h1>
                <div className='imgCart'>
                <Link href = "/carrinho">
                    <img className="LogoCarrinho" src={require('../images/carrinho.png')} alt="carrinho"></img>
                </Link>
                <div className='count'>{count}</div>                  
                </div>
        </div>
    );
};

export default Header;