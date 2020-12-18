import React from 'react';
import ListaEpisodios from './ListaEpisodios';
import api from '../services/api';

export default function Modal() {
  const [filmeModal, setFilmeModal] = React.useState({});
  const [episodios, setEpisodios] = React.useState([]);
  const selectFilmeListener = () => {
    window.addEventListener('selectFilme', (data) => {
      // console.log(data);
      setFilmeModal(data.detail);
      console.log(filmeModal);
    });
  };
  const getEpisodios = async (idTemporada) => {
    try {
      const response = await api.get(`/episodio/temporada/${idTemporada}`);
      const res = await response.data;
      console.log(res);
      if (res.error) {
        return false;
      } else {
        setEpisodios(res.episodios);
        console.log(res.episodios);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  React.useEffect(() => {
    selectFilmeListener();
  }, []);
  React.useEffect(() => {
    if (filmeModal.tipo === 'serie') {
      const temporadaId = filmeModal.temporadas[0]._id;
      //console.log(temporadaId);
      getEpisodios(temporadaId);
      console.log(episodios);
    } else {
      return false;
    }
  }, [filmeModal]);

  return (
    <div className="modal fade" id="modal-filme">
      <div className="modal-dialog">
        <div className="modal-content">
          <div
            className="modal-hero"
            style={{ backgroundImage: `url(${filmeModal.capa})` }}
          >
            <img src={filmeModal.logo} alt="" />
            <div className="modal-hero-infos">
              <button className="btn btn-lg btn-custom-white btn-lg">
                <span className="mdi mdi-play"></span> Assistir
              </button>
              <a
                href="#"
                className="btn-custom-round btn btn-light rounded-circle btn-lg"
              >
                <span className="mdi mdi-play"></span>
              </a>
              <a
                href="#"
                className="opacity-50 btn-custom-round border-white btn rounded-circle btn-lg"
              >
                <span className="mdi mdi-thumb-up text-white"></span>
              </a>
              <a
                href="#"
                className="opacity-50 btn-custom-round border-white btn rounded-circle btn-lg"
              >
                <span className="mdi mdi-thumb-down text-white"></span>
              </a>
            </div>
          </div>
          <div className="modal-infos">
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <p className="filme-descricao">{filmeModal.descricao}</p>
                </div>
                <div className="col-5">
                  <p className="filme-elenco">
                    Elenco:
                    <text>
                      {' '}
                      {filmeModal.elenco !== undefined &&
                        filmeModal.elenco.join(',')}
                    </text>
                    <br />
                    <br />
                    Gêneros:
                    <text>
                      {' '}
                      {filmeModal.generos !== undefined &&
                        filmeModal.generos.join(',')}
                    </text>
                    <br />
                    <br />
                    Cenas e momentos:
                    <text>
                      {' '}
                      {filmeModal.cenas_momentos !== undefined &&
                        filmeModal.cenas_momentos.join(',')}
                    </text>
                  </p>
                </div>
              </div>
              {filmeModal.tipo === 'serie' && (
                <>
                  <div className="row">
                    <div className="col-7">
                      <h3 className="text-white">Episodios</h3>
                    </div>
                    <div className="col-5 text-right">
                      <select
                        className="form-control"
                        onChange={(e) => {
                          getEpisodios(e.target.value);
                        }}
                      >
                        {filmeModal.temporadas.map(({ _id, titulo }) => {
                          return (
                            <option key={_id} value={_id}>
                              {titulo}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <ul className="lista-episodio">
                      {episodios.map((episodio, index) => {
                        return (
                          <ListaEpisodios key={index} episodio={episodio} />
                        );
                      })}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
