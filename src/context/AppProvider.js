import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const menus = [
    { key: 'home', label: 'Home' },
    { key: 'users', label: 'Users' },
    { key: 'posts', label: 'Posts' },
    { key: 'comments', label: 'Comments' },
    { key: 'about', label: 'About' },
];

const UPDATE_NAV = 'UPDATE_NAV';

const initialState = {
    nav: { selectedMenu: menus[0], menus: menus },
};

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NAV:
            return {
                ...state,
                nav: action.payload,
            };
        default:
            return state;
    }
};

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateNav = (newNav) => {
        dispatch({ type: UPDATE_NAV, payload: newNav });
    };

    return (
        <AppContext.Provider value={{ state, updateNav }}>
            {children}
        </AppContext.Provider>
    );
};

AppContextProvider.propTypes = {
    children: PropTypes.node,
};

export const useAppContext = () => React.useContext(AppContext);
