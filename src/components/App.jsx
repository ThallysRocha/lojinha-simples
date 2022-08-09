import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaInicial from "./Telainicial"
import TelaDeLogin from "./TelaDeLogin"
import TelaDeCadastro from "./TelaDeCadastro"
import TelaDePedidoFinalizado from "./TelaDePedidoFinalizado"
import TelaDeProdutos from "./TelaDeProdutos"
import TelaDoCarrinho from "./TelaDoCarrinho"
import Header from "./Header"
import Footer from "./Footer"
import '../styles/App.css';

function App() {
  return (
    <div>
      <Header/>
      <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<TelaInicial />} />
                <Route path="/produtos" element={<TelaDeProdutos />} />
                <Route path="/carrinho" element={<TelaDoCarrinho />} />
                <Route path="/cadastro" element={<TelaDeCadastro />} />   
                <Route path="/login" element={<TelaDeLogin />} /> 
                <Route path="/finalizado" element={<TelaDePedidoFinalizado />} />                   
              </Routes>
            </BrowserRouter>
          </div>
      <Footer/>
    </div>
  );
}

export default App;
