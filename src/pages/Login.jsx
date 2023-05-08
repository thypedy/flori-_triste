import Menu from "./Menu.jsx";
import { useState } from 'react';
import img from "../assets/logo.svg"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar o formulário
    const errors = {};
    if (!email) {
      errors.email = 'Por favor, digite seu e-mail';
    }
    if (!password) {
      errors.password = 'Por favor, digite sua senha';
    }
    setErrors(errors);
    // Se não houver erros, enviar credenciais para o backend e autenticar o usuário
  }

  return (
    <>
    <img src={img} style={{width:"50px", height:"50px"}} alt="" />
    <h1>Login</h1>
    <Menu/>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Entrar</button>
    </form>
    </>
  );
}

export default Login;