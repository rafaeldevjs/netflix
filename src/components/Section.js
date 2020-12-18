import React from 'react';
import ListaFilme from './ListaFilme';

export default function Section({ sessao }) {
  console.log(sessao);
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5 className="text-white">{sessao[0]?.generos[0]}</h5>
          </div>
        </div>
      </div>
      <div className="col-12">
        <ul className="filme_lista">
          {sessao.map((filme, index) => {
            return <ListaFilme key={index} filme={filme} />;
          })}
        </ul>
      </div>
    </section>
  );
}
