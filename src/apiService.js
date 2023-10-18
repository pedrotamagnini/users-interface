export const sendUserData = (userData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ status: 'success', data: userData });
        }, 1000);
    });
};
