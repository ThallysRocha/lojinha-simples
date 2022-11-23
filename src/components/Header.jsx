import Link from '@mui/material/Link';
import "../styles/Header.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "../contexts/Carrinho"
const Header = () => {
    const navigate = useNavigate();
    const {
        count,
      } = useCarrinho();
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