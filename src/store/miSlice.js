import { createSlice } from "@reduxjs/toolkit";

export const miSlice = createSlice({
  name: "misTrabajadores",
  initialState: {
    trabajadores: [],
  },
  reducers: {
    agregarUnValor: (state, action) => {
      state.trabajadores = [...state.trabajadores, action.payload];
    },
    modificarUnValor: (state, action) => {
      const { indice, nuevoDepartamento } = action.payload;
      state.trabajadores[indice].departamento = nuevoDepartamento;
    },
    eliminarUnValor: (state, action) => {
      const {nombre,apellido,telefono} = action.payload;
      state.trabajadores = state.trabajadores.filter(
        (valor) =>
          valor.nombre !== nombre &&
          valor.apellido !== apellido &&
          valor.cell !== telefono
      );
    }
  },
});

export const departamentosSlice = createSlice({
  name: "misDepartamentos",
  initialState: {
    departamentos: ["Ventas", "Compras", "Comercial"],
  },
  reducers: {},
});

export const { agregarUnValor } = miSlice.actions;
export const { modificarUnValor } = miSlice.actions;
export const { eliminarUnValor } = miSlice.actions;
