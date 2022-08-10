import "../styles/Formulario.css";
import React,{useState} from "react";
import database from "../database"
import Link from '@mui/material/Link';

const TelaDeLogin = () =>{
    const [errorMessages, setErrorMessages] = useState({});
    const [isLogged, setIsLogged] = useState(false);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const errors = {
        senha: "senha inválida",
        email: "email inválido",
        foraDoSistema: "este email não está contido no sistema, deseja cadastrar-se?",
        senhaErrada: "senha não condiz com a cadastrada no sistema para este email"
    }
    const renderErrorMessage = (id) =>
        id === errorMessages.id && (
            <div className="error">{errorMessages.message}</div>
         );

    const handleInputChange = (e) => {
        const {id , value} = e.target;

        if(id === "senha"){
            if(e.target.checkValidity()){
                setSenha(value);
                setErrorMessages({ id: "senha", message: ""});
            }
            else{
                setErrorMessages({ id: "senha", message: errors.senha });
            }
            
        }
        if(id === "email"){
            if(e.target.checkValidity()){
                setEmail(value);
                setErrorMessages({ id: "email", message: ""});
            }
            else{
                setErrorMessages({ id: "email", message: errors.email });
            }           
            
        }
        
    }
    const handleSubmit  = () => {
        /*console.log(JSON.parse(window.localStorage.getItem('database')));*/
        let emailContido = false;
        database.forEach(user => {
            
            if(email === user.email){
                emailContido = true;
                if(senha === user.senha){
                    setIsLogged(true);
                }
                setErrorMessages({ id: "credenciaisErradas", message: errors.senhaErrada });
            }
            if(!emailContido) setErrorMessages({ id: "credenciaisErradas", message: errors.foraDoSistema });
        });
        
    }
    const renderForm = (
        <div className="form">
            <div className="form-body">                
                <div className="email">
                    <label className="form__label"></label>
                    <input className="form__input" type="email" autoComplete="email" id="email" 
                    onChange = {(e) => handleInputChange(e)} placeholder="Email" required="required"/>
                    {renderErrorMessage("email")}
                </div>
                <div className="senha">
                    <label className="form__label"></label>
                    <input className="form__input" type="password" autoComplete="new-password" id="senha" 
                    onChange = {(e) => handleInputChange(e)} placeholder="Senha" required="required"/>
                    {renderErrorMessage("senha")}
                </div>               
            </div>
            <div className="footer">                
                <button type="submit" onClick={()=>handleSubmit()} className="botao">Entrar</button>   
            
            </div>
            <div className="loginFooter">
                <div className="notRegistered">{renderErrorMessage("credenciaisErradas")}</div>
                
                <div className="cadastrar">
                <Link href="/cadastro" >Criar conta</Link>
                </div>
                
            </div>
            
            
            
            
             
        </div>
    );


    return(
        <div className="finalizado">
          <div className="finalizado-form">
            <div className="title">Login</div>
            {isLogged ? <div>Login realizado com sucesso</div> : renderForm}
          </div>
        </div>
    );
};

export default TelaDeLogin;