import { useNavigate } from 'react-router-dom';

/*
  [useNavigate]
    O hook useNavigate permite navegarmos programaticamente entre as rotas. Por exemplo, pode ser utilizado quando o usuário faz um login bem sucedido e enviamos o mesmo a página da sua conta.
*/

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log('Fez o login');
    navigate('/sobre');
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
