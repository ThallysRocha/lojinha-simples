import TelaDeLogin from './TelaDeLogin';
import "../styles/TelaInicial.css"

import { useEffect } from "react";
import { useCarrinho } from "../contexts/Carrinho"
const TelaInicial = () => {
    const {
        setProducts,setCount,
      } = useCarrinho();
    useEffect(()=>{
        setProducts([]);
        setCount(0);
    },[]);
    return(
        <div>
            <TelaDeLogin/>
            
        </div>
    );
};

export default TelaInicial