import {
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_STARTED,
  FETCH_USERS_SUCCESS,
  SELECT_MENU,
} from "../context/Actions";


const reducer = (state, action) => {
  switch (action.type) {
    case SELECT_MENU:
      const key = action.payload.key;
      const { nav } = state;
      const menu = nav.menus.find((item) => item.key === key);
      const newNav = { ...nav, selectedMenu: menu };

      return {
        ...state,
        nav: newNav,
      };

      //USERS
    case FETCH_USERS_STARTED:
      return {
        ...state,
        users: {
          loading: true,
          error: null,
          data: [],
        },
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: {
          loading: false,
          error: null,
          data: [...action.payload.data],
        },
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        users: {
          loading: false,
          error: action.payload.error,
          data: [],
        },
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false,
          error: null,
          data: [...state.users.data, action.payload],
        },
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        users: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
