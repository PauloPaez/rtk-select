import React from "react";
import { useSelector } from "react-redux";

const Trabajador = ({ valor, idx, onActualizar, onEliminar }) => {
  const departamentos = useSelector(
    (state) => state.misDepartamentos.departamentos
  );
  console.log(idx);
  return (
    <>
      <div className="columna">
        <div className="fotoUsuarios">
          <img src={valor.picture.large} />
        </div>
        <div className="nombreUsuarios">
          <strong>
            {valor.name.last}, {valor.name.first}
          </strong>
        </div>
        <div>{valor.location.city}</div>
        <div>({valor.location.country})</div>
        <div>
          <select onChange={(event) => onActualizar(event.target.value, idx)}>
            <option>Selecciona</option>
            {departamentos.map((departamento, i) =>
              valor.departamento === departamento ? (
                <option selected key={i}>
                  {departamento}
                </option>
              ) : (
                <option key={i}>{departamento}</option>
              )
            )}
          </select>
        </div>
        <button className="rojo" onClick={()=>onEliminar(valor)}>Eliminar Trabajador</button>
      </div>
    </>
  );
};

export default Trabajador;
