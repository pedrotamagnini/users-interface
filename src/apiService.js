// apiService.js

// Função de simulação de envio de dados para a API
export const sendUserData = (userData) => {
    return new Promise((resolve, reject) => {
        // Simule uma chamada à API com um atraso de 1 segundo
        setTimeout(() => {
            // Suponhamos que a chamada à API foi bem-sucedida
            resolve({ status: 'success', data: userData });

            // Ou simule um erro na chamada à API
            // reject(new Error('Erro na chamada à API'));

        }, 1000); // Simulação de uma chamada assíncrona de 1 segundo
    });
};
