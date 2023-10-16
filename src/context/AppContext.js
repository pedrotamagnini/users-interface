import React, { useContext } from 'react';

const AppContext = React.createContext();

export const { Provider } = AppContext;

export const useAppContext = () => {
    return useContext(AppContext);
};

export default AppContext;
