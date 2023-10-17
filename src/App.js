import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import Route from './routes/Route';
import FooterGlobal from './components/utils/FooterGlobal';
import HeaderGlobal from './components/utils/HeaderGlobal';
import { AppContextProvider } from './context/AppProvider';

function App() {
    return (
        <AppContextProvider>
            <div className="App">
                <Helmet>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Helmet>
                <HeaderGlobal />
                <Route />
                <FooterGlobal />
            </div>
        </AppContextProvider>
    );
}

export default App;
