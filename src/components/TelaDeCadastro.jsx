import "../styles/Formulario.css";
import React,{useState} from "react";
import database from "../database"



const Cadastro = () =>{
    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [nascimento,setNascimento] = useState(null);
    const [cpf,setCpf] = useState(null);

    const [errorMessages, setErrorMessages] = useState({});
    const [isRegistered, setIsRegistered] = useState(false);
    const errors = {
        nome: "nome inválido",
        senha: "senha inválida",
        email: "email inválido",
        nascimento: "data inválida",
        cpf: "cpf inválido",
        emailRepetido: "este email já foi cadastrado",
        cpfRepetido: "este cpf já foi cadastrado",
    }

    const renderErrorMessage = (id) =>
        id === errorMessages.id && (
            <div className="error">{errorMessages.message}</div>
         );

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "nome"){
            if(e.target.checkValidity()){
                setNome(value);
                setErrorMessages({ id: "nome", message: ""});
            }
            else{
                setErrorMessages({ id: "nome", message: errors.nome });
            }
            
        }
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
        if(id === "nascimento"){
            if(e.target.checkValidity()){
                setNascimento(value);
                setErrorMessages({ id: "nascimento", message: ""});
            }
            else{
                setErrorMessages({ id: "nascimento", message: errors.nascimento });
            }
            
        }
        if(id === "cpf"){
            if(e.target.checkValidity()){
                setCpf(value);
                setErrorMessages({ id: "cpf", message: ""});
            }
            else{
                setErrorMessages({ id: "cpf", message: errors.cpf });
            }
            
        }
    }
    let cpfUnico = true;
    let emailUnico = true;
    const handleSubmit  = () => {

        database.forEach(user => {
            if(cpf === user.cpf){
                cpfUnico = false;
                setErrorMessages({ id: "cpf", message: errors.cpfRepetido });
            }
            if(email === user.email){
                emailUnico = false;
                setErrorMessages({ id: "email", message: errors.emailRepetido });
            }
        });
        if(cpfUnico && emailUnico && nome && cpf && senha && email && nascimento){
            let obj = {
            nome : nome,
            email : email,
            senha: senha,
            nascimento : nascimento,
            cpf : cpf,
            };
            
            database.push(obj);
            window.localStorage.setItem('database',JSON.stringify(database));
            console.log(JSON.parse(window.localStorage.getItem('database')));
            setIsRegistered(true);
        }
        else{
            if(!nome)setErrorMessages({ id: "nome", message: errors.nome });
            if(!senha)setErrorMessages({ id: "senha", message: errors.senha});
            if(!email)setErrorMessages({ id: "email", message: errors.email });
            if(!nascimento)setErrorMessages({ id: "nascimento", message: errors.nascimento });
            if(!cpf)setErrorMessages({ id: "cpf", message: errors.cpf });
        }
        
    }

    const renderForm = (
        <div className="form">
            <div className="form-body">
                <div className="nome">
                    <input className="form__input" type="text" id="nome" placeholder="Nome" 
                    onChange = {(e) => handleInputChange(e)} required="required"/>
                    {renderErrorMessage("nome")}
                </div>
                <div className="email">
                    <input className="form__input" type="email" autoComplete="email" id="email" 
                    onChange = {(e) => handleInputChange(e)} placeholder="Email" required="required"/>
                    {renderErrorMessage("email")}
                </div>
                <div className="senha">
                    <input className="form__input" type="password" autoComplete="new-password" id="senha" 
                    onChange = {(e) => handleInputChange(e)} placeholder="Senha" required="required"/>
                    {renderErrorMessage("senha")}
                </div>
                <div className="nascimento">
                    <label className="form__label">Data de nascimento</label>
                    <input className="form__input" type="date" autoComplete="bday" id="nascimento" placeholder="dd/mm/aaaa" 
                    onChange = {(e) => handleInputChange(e)} min="1900-01-01" max="2021-12-31" required="required"/>
                    {renderErrorMessage("nascimento")}
                </div>
                <div className="cpf">
                    <label className="form__label">CPF</label>
                    <input className="form__input" type="text" id="cpf" pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" 
                    onChange = {(e) => handleInputChange(e)} placeholder="xxx.xxx.xxx-xx" required="required"/>
                    {renderErrorMessage("cpf")}
                </div>
            </div>
            <div className="footer">
                <button type="submit" onClick={()=>handleSubmit()} className="botao">Cadastrar-se</button>
            </div>
        </div>
    );
    return (
        <div className="finalizado">
          <div className="finalizado-form">
            <div className="title">Cadastro</div>
            {isRegistered ? <div>Usuário cadastrado com sucesso</div> : renderForm}
          </div>
        </div>
      );
};
export default Cadastro;