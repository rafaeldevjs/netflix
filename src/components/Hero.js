import React from 'react';
import badgetop10 from '../assets/badge-top-10.png';

export default function Hero({ hero }) {
  const { logo, capa, descricao, titulo } = hero;
  return (
    <div
      id="hero"
      className="container-fluid"
      style={{ backgroundImage: `url('${capa}')` }}
    >
      <div className="container">
        <div className="row" id="hero_infos">
          <div className="col-6">
            <img src={logo} alt={titulo} className="logo" />
            <h1 className="text-white">
              <img src={badgetop10} alt="top 10" />
              Top 1 de hoje no Brasil
            </h1>
            <p className="text-white">{descricao}</p>
            <br />
            <button className="btn btn-lg btn-custom-white">
              <span className="mdi mdi-play"></span> Assistir
            </button>{' '}
            <button className="btn btn-lg btn-custom-translucid">
              <span className="mdi mdi-information-outline"></span>Mais
              Informações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
