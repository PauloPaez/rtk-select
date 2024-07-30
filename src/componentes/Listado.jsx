import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Candidato from "./Candidato";
import { agregarUnValor } from "../store/miSlice";

const Listado = () => {
  const [candidatos, setCandidatos] = useState([]);
  const listaTrabajadores = useSelector(
    (state) => state.misTrabajadores.trabajadores
  );
  const dispatch = useDispatch();

  // useEffect es para que se carga al comienzo

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
      .then((response) => response.json())
      .then((datos) => setCandidatos(datos.results));
  }, []);

  const buscarUno = (indice) => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((datos) => {
        const provisional = [...candidatos];
        provisional[indice] = { ...datos.results[0] };
        setCandidatos(provisional);
      });
  };

  const guardarUno = (valor, index) => {
    const nuevoValor={...valor, departamento:""}
    dispatch(agregarUnValor(nuevoValor));
    buscarUno(index);
  };
  return (
    <>
      <div className="presentacion">
        {candidatos.map((valor, index) => (
          <Candidato
            key={index}
            valor={valor}
            index={index}
            onBuscarUno={buscarUno}
            onGuardarUno={guardarUno}
          />
        ))}
      </div>
      <div className="candidatos">
        {listaTrabajadores.map((valor, idx) => (
          <Link to="/gestion" key={idx}>
            <button className="verde">{valor.name.first}</button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Listado;
