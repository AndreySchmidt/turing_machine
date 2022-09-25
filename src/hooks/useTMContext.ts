import React, { useContext } from "react";
import { TuringMachineContext, TuringMachineContextType } from "../context";

export const useTMContext = () => {
    return  useContext<TuringMachineContextType>(TuringMachineContext) || [];
}