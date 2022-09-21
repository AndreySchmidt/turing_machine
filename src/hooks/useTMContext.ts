import React, { useContext } from "react";
import { TuringMachineContextType } from "../context";

export const useTMContext = (TuringMachineContext:React.Context<TuringMachineContextType>) => {
    return  useContext<TuringMachineContextType>(TuringMachineContext) || [];
}