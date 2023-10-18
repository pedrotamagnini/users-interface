const ActionTypes = {
  ADD_USER: "ADD_USER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export { reducer, ActionTypes };
