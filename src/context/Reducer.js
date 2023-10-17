// reducer.js

// Defina os tipos de ação que você deseja lidar
const ActionTypes = {
  ADD_USER: "ADD_USER",
  // Outros tipos de ação, se necessário
};

// Defina a função de redução que atualiza o estado com base na ação
const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        ...state,
        // Atualize o estado de acordo com a ação ADD_USER
        users: [...state.users, action.payload], // Suponhamos que você tenha um array de usuários no estado
      };
      // Outros casos de ação, se necessário
    default:
      return state;
  }
};

export { reducer, ActionTypes };
