import React, { createContext, useContext, useReducer } from 'react';
import {reducer} from "./Reducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const initialState = { /* seu estado inicial aqui */ };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
