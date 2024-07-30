import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { eliminarUnValor, modificarUnValor } from "../store/miSlice";
import Trabajador from "./Trabajador";

const Gestion = () => {
  const dispatch = useDispatch();

  const actualizar = (departamento, index) => {
    dispatch(
      modificarUnValor({
        indice: index,
        nuevoDepartamento: departamento,
      })
    );
  };

  const eliminar = (valor) => {
    dispatch(
      eliminarUnValor({
        nombre: valor.name.first,
        apellido: valor.name.last,
        telefono: valor.cell,
      })
    );
  };
  const listaTrabajadores = useSelector(
    (state) => state.misTrabajadores.trabajadores
  );

  return (
    <>
      <h1>Trabajadores</h1>
      <Link to="/candidatos">
        <button>Candidatos</button>
      </Link>
      <div className="usuarios">
        {listaTrabajadores.map((valor, idx) => (
          <Trabajador
            key={idx}
            valor={valor}
            idx={idx}
            onActualizar={actualizar}
            onEliminar={eliminar}
          />
        ))}
      </div>
    </>
  );
};

export default Gestion;
