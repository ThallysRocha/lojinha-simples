import Link from '@mui/material/Link';
import "../styles/Footer.css";
const Footer = () => {
    return(
      <div className = "Footer">
        <Link href="/" className='logOut'>
            Sair
        </Link>
      </div>       
        
    );
};

export default Footer;