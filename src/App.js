// Importação das bibliotecas e módulos necessários
import React from 'react'; // Importa a biblioteca React
import { Helmet } from 'react-helmet'; // Importa o componente Helmet para gerir as tags do cabeçalho HTML
import './App.css'; // Importa um arquivo CSS para aplicar estilos ao componente

// Importação de componentes personalizados
import Route from './routes/Route'; // Importa o componente de encaminhamento da aplicação
import FooterGlobal from './components/utils/FooterGlobal'; // Importa o componente de rodapé global
import HeaderGlobal from './components/utils/HeaderGlobal';// Importa o componente do cabeçalho global
// Importa o provedor de contexto 'AppContextProvider' para compartilhar dados e funcionalidades em toda a aplicação
import { AppContextProvider } from './context/AppProvider';

// Definição do componente principal 'App'
function App() {
    return (
        // Componente de contexto para fornecer dados ou funcionalidades partilhadas
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

// Exportação do componente 'App' para ser utilizado noutros locais da aplicação
export default App;
