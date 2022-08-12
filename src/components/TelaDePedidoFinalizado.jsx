import { useEffect, useState } from "react";
const TelaDePedidoFinalizado = () =>{
    const [cost, setCost] = useState(0);
    const [isConfirmed, setIsConfirmed] = useState(false);
    useEffect(()=>{    
        let cart = JSON.parse(window.localStorage.getItem('cart'));
        let sum = 0;
        console.log(JSON.parse(window.localStorage.getItem('cart')));
        cart.forEach((item)=>{
            sum += (item.quantity*item.price); 
        });
        setCost(sum);
  },[]);
  const pay = () =>{
    if(document.getElementById("payment").value !==""){
        localStorage.removeItem('cart');
        window.localStorage.setItem('cart',JSON.stringify([]));
        setIsConfirmed(true);
    }
    
  }
  const renderPayment = (
    <div>
        <div className="title">Finalizar compra</div>
            <div className="body">
                <div className="cost">R$ {cost.toFixed(2)}</div>
                <div className="payment">
                    <select name="paymentOptions" id="payment">
                        <option value="">Selecione uma forma de pagamento</option>    
                        <option value="pix">PIX</option>
                        <option value="boleto">Boleto</option>
                        <option value="credito">Cartão de crédito</option>
                        <option value="debito">Cartão de débito</option>
                    </select>
                </div>
                <button onClick={()=>{pay()}}>Comprar</button>
        </div>
    </div>
  );
    
  
  return (
    <div className="finalizado">
        {isConfirmed ? <div>Pedido Finalizado, obrigado!</div> : renderPayment}
    </div>
  );
};
export default TelaDePedidoFinalizado;