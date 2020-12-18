import React from 'react';
import Modal from '../../components/Modal';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import api from '../../services/api';

import logo from '../../assets/logo.png';
export default function Home() {
  const [user, setUser] = React.useState({});
  const [hero, setHero] = React.useState({});
  const [secoes, setSecoes] = React.useState(null);
  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('@user')));
    getHome();
  }, []);
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const getHome = async () => {
    try {
      const response = await api.get('/home');
      const res = response.data;
      if (res.error) {
        alert(res.message);
        return false;
      } else {
        setHero(res.principal);
        setSecoes(res.secoes);

        console.log(secoes);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Modal />
      <div className="container-fluid">
        <Header>
          <div className="col-2">
            <img src={logo} alt="logo netflix" />
          </div>
          <div className="col-8">
            <ul className="menu_list">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Séries</a>
              </li>
              <li>
                <a href="#">Filmes</a>
              </li>
              <li>
                <a href="#">Mais Recentes</a>
              </li>
              <li>
                <a href="#">Minha Lista</a>
              </li>
            </ul>
          </div>
          <div className="col-2 text-right">
            <a href="" className="text-white" onClick={logout}>
              Olá, {user.nome}. Sair
            </a>
          </div>
        </Header>
      </div>
      <Hero hero={hero} />
      <div id="main-content">
        {secoes &&
          secoes.map((sessao, index) => (
            <Section key={index} sessao={sessao} />
          ))}
      </div>
    </>
  );
}
