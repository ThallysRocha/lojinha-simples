import Link from '@mui/material/Link';
import "../styles/Header.css";
const Header = () => {
    return(
        <div className="Header">
                <h1>Lojinha</h1>
                <Link href = "/carrinho">
                    <img className="LogoCarrinho" src={require('../images/carrinho.png')} alt="carrinho"></img>
                </Link>                     
        </div>
    );
};

export default Header;