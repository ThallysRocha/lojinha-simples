import "../styles/TelaDeCadastro.css";
import React,{useState} from "react";
import database from "../database"


const Cadastro = () =>{

    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [nascimento,setNascimento] = useState(null);
    const [cpf,setCpf] = useState(null);

    const [nomeValid, setNomeValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [senhaValid, setSenhaValid] = useState(false);
    const [nascimentoValid,setNascimentoValid] = useState(false);
    const [cpfValid,setCpfValid] = useState(false);

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

            setNome(value);

            if(e.target.checkValidity()){                
                setErrorMessages({ id: "nome", message: ""});
                setNomeValid(true);
            }
            else{
                setErrorMessages({ id: "nome", message: errors.nome });
                setNomeValid(false);
            }
            
        }        
        if(id === "email"){

            setEmail(value);

            if(e.target.checkValidity()){                
                setErrorMessages({ id: "email", message: ""});
                setEmailValid(true);
            }
            else{
                setErrorMessages({ id: "email", message: errors.email });
                setEmailValid(false);
            }           
            
        }
        if(id === "senha"){

            setSenha(value);

            if(e.target.checkValidity()){                
                setErrorMessages({ id: "senha", message: ""});
                setSenhaValid(true);
            }
            else{
                setErrorMessages({ id: "senha", message: errors.senha });
                setSenhaValid(false);
            }
            
        }
        if(id === "nascimento"){

            setNascimento(value);

            if(e.target.checkValidity()){                
                setErrorMessages({ id: "nascimento", message: ""});
                setNascimentoValid(true);
            }
            else{
                setErrorMessages({ id: "nascimento", message: errors.nascimento });
                setNascimentoValid(false);
            }
            
        }
        if(id === "cpf"){

            setCpf(value);

            if(e.target.checkValidity()){                
                setErrorMessages({ id: "cpf", message: ""});
                setCpfValid(true);
            }
            else{
                setErrorMessages({ id: "cpf", message: errors.cpf });
                setCpfValid(false);
            }
            
        }
    }

    let cpfUnico = true;
    let emailUnico = true;
    
    const handleSubmit  = () => {
        if(!nomeValid)setErrorMessages({ id: "nome", message: errors.nome });
        else if(!emailValid)setErrorMessages({ id: "email", message: errors.email });
        else if(!senhaValid)setErrorMessages({ id: "senha", message: errors.senha});
        else if(!nascimentoValid)setErrorMessages({ id: "nascimento", message: errors.nascimento });
        else if(!cpfValid)setErrorMessages({ id: "cpf", message: errors.cpf });
        else{
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
            if(cpfUnico && emailUnico){
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
        }
        
        
    }

    const renderForm = (
        <div className="form">
            <div className="form-body">
                <div className="nome">
                    <label className="form__label">Nome: </label>
                    <input className="form__input" type="text" id="nome" placeholder="Digite seu nome" 
                    onChange = {(e) => handleInputChange(e)} required="required"/>
                    {renderErrorMessage("nome")}
                </div>
                <div className="email">
                    <label className="form__label">Email: </label>
                    <input className="form__input" type="email" autoComplete="email" id="email" 
                    onChange = {(e) => handleInputChange(e)} placeholder="Digite seu email" required="required"/>
                    {renderErrorMessage("email")}
                </div>
                <div className="senha">
                    <label className="form__label">Senha: </label>
                    <input className="form__input" type="password" autoComplete="new-password" id="senha" 
                    onChange = {(e) => handleInputChange(e)} placeholder="Digite sua senha" required="required"/>
                    {renderErrorMessage("senha")}
                </div>
                <div className="nascimento">
                    <label className="form__label">Data de nascimento: </label>
                    <input className="form__input" type="date" autoComplete="bday" id="nascimento" placeholder="dd/mm/aaaa" 
                    onChange = {(e) => handleInputChange(e)} min="1900-01-01" max="2021-12-31" required="required"/>
                    {renderErrorMessage("nascimento")}
                </div>
                <div className="cpf">
                    <label className="form__label">CPF: </label>
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
        <div className="cadastro">
          <div className="cadastro-form">
            <div className="title">Cadastro</div>
            {isRegistered ? <div>Usuário cadastrado com sucesso</div> : renderForm}
          </div>
        </div>
      );
};
export default Cadastro;