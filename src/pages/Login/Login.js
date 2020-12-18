import React from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import logo from '../../assets/logo.png';

export default function Login() {
  const [credenciais, setCredenciais] = React.useState({
    email: '',
    senha: '',
  });
  const dataLogin = async () => {
    try {
      const response = await api.post('/usuario/login', credenciais);
      const res = response.data;
      console.log(res);
      if (res.error) {
        alert(res.message);
        return false;
      } else {
        localStorage.setItem('@user', JSON.stringify(res.usuario));
        window.location.reload();
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div
      className="container-fluid bg_filmes"
      style={{ position: 'fixed', height: '100%' }}
    >
      <Header>
        <img src={logo} alt="logo netflix" />
      </Header>
      <div id="caixa_login" className="col-4 offset-4">
        <h1 className="text-white">Entrar</h1>
        <br />
        <>
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Email ou número de telefone"
            onChange={({ target }) => {
              setCredenciais({ ...credenciais, email: target.value });
            }}
          />
          <br />
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="Senha"
            onChange={({ target }) => {
              setCredenciais({ ...credenciais, senha: target.value });
            }}
          />
          <br />
          <button
            className="btn btn-lg btn-block btn-danger"
            onClick={dataLogin}
          >
            Entrar
          </button>
          <div className="row mt-4">
            <div className="col text-muted">
              <input type="checkbox" />
              Lembrar de mim.
            </div>
            <div className="col text-right">
              <a className="text-muted" href="#">
                Precisa de Ajuda
              </a>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
