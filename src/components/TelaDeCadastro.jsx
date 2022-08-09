import "../styles/TelaDeCadastro.css";
import React,{useState} from "react";



const Cadastro = () =>{
    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [nascimento,setNascimento] = useState(null);
    const [cpf,setCpf] = useState(null);
    
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "nome"){
            setNome(value);
        }
        if(id === "senha"){
            setSenha(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "nascimento"){
            setNascimento(value);
        }
        if(id === "cpf"){
            setCpf(value);
        }

    }

    const handleSubmit  = () => {
        console.log(nome,email,senha,nascimento,cpf);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="nome">
                    <label className="form__label">Nome: </label>
                    <input className="form__input" type="text" id="nome" placeholder="Digite seu nome" 
                    onChange = {(e) => handleInputChange(e)} required="required"/>
                    <span></span>
                </div>
                <div className="email">
                    <label className="form__label">Email: </label>
                    <input className="form__input" type="email" autoComplete="email" id="email" 
                    onChange = {(e) => handleInputChange(e)} placeholder="Digite seu email" required="required"/>
                </div>
                <div className="senha">
                    <label className="form__label">Senha: </label>
                    <input className="form__input" type="password" autoComplete="new-password" id="senha" 
                    onChange = {(e) => handleInputChange(e)} placeholder="Digite sua senha" required="required"/>
                </div>
                <div className="nascimento">
                    <label className="form__label">Data de nascimento: </label>
                    <input className="form__input" type="date" autoComplete="bday" id="nascimento" placeholder="dd/mm/aaaa" 
                    onChange = {(e) => handleInputChange(e)} min="1900-01-01" max="2021-12-31" required="required"/>
                </div>
                <div className="cpf">
                    <label className="form__label">CPF: </label>
                    <input className="form__input" type="text" id="cpf" pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" 
                    onChange = {(e) => handleInputChange(e)} placeholder="xxx.xxx.xxx-xx" required="required"/>
                </div>
            </div>
            <div className="footer">
                <button type="submit" onClick={()=>handleSubmit()} className="botao">Cadastrar-se</button>
            </div>
        </div>
    );
};
export default Cadastro;