import Link from '@mui/material/Link';
import "../styles/TelaInicial.css"
const TelaInicial = () => {
    return(
        <div>
            <Link href="/login">
                Já sou cliente
            </Link>
            <Link href="/cadastro">
                Ainda não sou cadastrado
            </Link>
        </div>
    );
};

export default TelaInicial