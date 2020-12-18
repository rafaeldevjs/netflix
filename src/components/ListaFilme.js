import React from 'react';

export default function ListaFilme({ filme }) {
  const selectFilme = () => {
    const event = new CustomEvent('selectFilme', {
      detail: filme,
    });
    window.dispatchEvent(event);
  };
  const { thumb } = filme;
  return (
    <li
      className="filme"
      data-toggle="modal"
      data-target="#modal-filme"
      onClick={selectFilme}
    >
      <img src={thumb} alt="" className="img-fluid" />
      <div className="filme_info">
        <div className="col-12">
          <a href="#" className="btn-custom-round btn btn-light rounded-circle">
            <span className="mdi mdi-play"></span>
          </a>
          <a
            href="#"
            className="opacity-50 btn-custom-round border-white btn rounded-circle"
          >
            <span className="mdi mdi-thumb-up text-white"></span>
          </a>
          <a
            href="#"
            className="opacity-50 btn-custom-round border-white btn rounded-circle"
          >
            <span className="mdi mdi-thumb-down text-white"></span>
          </a>
          <a
            href="#"
            className="opacity-50 btn-custom-round border-white btn rounded-circle"
          >
            <span className="mdi mdi-plus text-white"></span>
          </a>
        </div>
        <p>
          T3:EP5 <text>"Meu Episodio"</text>
        </p>
      </div>
    </li>
  );
}
