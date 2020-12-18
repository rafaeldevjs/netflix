import React from 'react';

export default function ListaEpisodios({ episodio }) {
  const { titulo, numero, descricao, capa } = episodio;
  return (
    <li>
      <div className="row">
        <div className="col-1 my-auto text-center">
          <h3 className="text-white">{numero}</h3>
        </div>
        <div className="col-4">
          <img className="img-fluid" src={capa} alt="" />
        </div>
        <div className="col-7">
          <h6 className="text-white">{titulo}</h6>
          <p className="text-muted">{descricao}</p>
        </div>
      </div>
    </li>
  );
}
