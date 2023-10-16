import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const menus = [
    { key: 'home', label: 'Home' },
    { key: 'projects', label: 'Projects' },
    { key: 'about', label: 'About' },
];

const initialState = {
    nav: { selectedMenu: menus[0], menus: menus },
};

const AppContext = createContext();

export class AppContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

AppContextProvider.propTypes = {
    children: PropTypes.node,
};

export const useAppContext = () => React.useContext(AppContext);
