import { configureStore } from "@reduxjs/toolkit";
import { miSlice } from "./miSlice";
import { departamentosSlice } from "./miSlice";
export default configureStore({
    reducer:{
        misTrabajadores:miSlice.reducer,
        misDepartamentos: departamentosSlice.reducer,
    }
})