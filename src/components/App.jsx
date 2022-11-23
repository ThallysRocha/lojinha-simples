import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaInicial from "./TelaInicial"
import TelaDeLogin from "./TelaDeLogin"
import TelaDeCadastro from "./TelaDeCadastro"
import TelaDePedidoFinalizado from "./TelaDePedidoFinalizado"
import TelaDeProdutos from "./TelaDeProdutos"
import TelaDoCarrinho from "./TelaDoCarrinho"
import Header from "./Header"
import Footer from "./Footer"
import AppProvider from "../contexts/index"
import '../styles/App.css';

function App() {
  return (
    <div>
      <AppProvider>
            <BrowserRouter>
      <Header/>
              <Routes>
                <Route path="/" element={<TelaInicial />} />
                <Route path="/produtos" element={<TelaDeProdutos />} />
                <Route path="/carrinho" element={<TelaDoCarrinho />} />
                <Route path="/cadastro" element={<TelaDeCadastro />} />   
                <Route path="/login" element={<TelaDeLogin />} /> 
                <Route path="/finalizado" element={<TelaDePedidoFinalizado />} />                   
              </Routes>
            </BrowserRouter>
      <Footer/>
          </AppProvider>
    </div>
  );
}

export default App;
