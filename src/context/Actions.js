import { createUsers, fetchUsersSer, createPosts, fetchPostsSer, createComments, fetchCommentsSer } from "../../src/Services/UserService";
import {showAlertModal} from "../../src/components/utils/Alert";

export const SELECT_MENU = "SELECT_MENU";

//USERS
//GET USERS
export const FETCH_USERS_STARTED = "FETCH_USERS_STARTED";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export function fetchUsersAction(dispatch) {
  const action = {
    type: FETCH_USERS_STARTED,
  };
  dispatch(action);
  fetchUsersSer(
    (res) => dispatch(fetchUsersSuccess(res)),
    (err) => dispatch(fetchUsersFailure(err.message))
  );
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: {
      data: [...users],
    },
  };
}

export function fetchUsersFailure(message) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: {
      error: message,
    },
  };
}

//CREATE USERS
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const createUserSuccess = (user) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: user,
  };
};

export const createUserError = (error) => {
  return {
    type: CREATE_USER_FAILURE,
    payload: error,
  };
};
export const createUserAction = (dispatch, newUserData) => {
  createUsers(
    newUserData,
    (data) => {
      console.log("action 2");
      dispatch(createUserSuccess(data));
      showAlertModal("Success!", "Form submitted successfully!");
    },
    (error) => {
      dispatch(createUserError(error));
      showAlertModal("Error!", "Failed to create user. Please try again.");
    }
  );
};

//Posts
//GET POSTS
export const FETCH_POSTS_STARTED = "FETCH_POSTS_STARTED";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export function fetchPostsAction(dispatch) {
  const action = {
    type: FETCH_POSTS_STARTED,
  };
  dispatch(action);
  fetchPostsSer(
      (res) => dispatch(fetchPostsSuccess(res)),
      (err) => dispatch(fetchPostsFailure(err.message))
  );
}

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: {
      data: [...posts],
    },
  };
}

export function fetchPostsFailure(message) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: {
      error: message,
    },
  };
}

//CREATE POSTS
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export const createPostSuccess = (post) => {
  return {
    type: CREATE_POST_SUCCESS,
    payload: post,
  };
};

export const createPostError = (error) => {
  return {
    type: CREATE_POST_FAILURE,
    payload: error,
  };
};
export const createPostAction = (dispatch, newPostData) => {
  createPosts(
      newPostData,
      (data) => {
        console.log("action 2");
        dispatch(createPostSuccess(data));
        showAlertModal("Success!", "Form submitted successfully!");
      },
      (error) => {
        dispatch(createPostError(error));
        showAlertModal("Error!", "Failed to create comment. Please try again.");
      }
  );
};

  //Comments
//GET COMMENTS
  export const FETCH_COMMENTS_STARTED = "FETCH_COMMENTS_STARTED";
  export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
  export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

  export function fetchCommentsAction(dispatch) {
    const action = {
      type: FETCH_COMMENTS_STARTED,
    };
    dispatch(action);
    fetchCommentsSer(
        (res) => dispatch(fetchCommentsSuccess(res)),
        (err) => dispatch(fetchCommentsFailure(err.message))
    );
  }

  export function fetchCommentsSuccess(comments) {
    return {
      type: FETCH_COMMENTS_SUCCESS,
      payload: {
        data: [...comments],
      },
    };
  }

  export function fetchCommentsFailure(message) {
    return {
      type: FETCH_COMMENTS_FAILURE,
      payload: {
        error: message,
      },
    };
  };

//CREATE POSTS
  export const CREATE_COMMENTS_SUCCESS = "CREATE_COMMENTS_SUCCESS";
  export const CREATE_COMMENTS_FAILURE = "CREATE_COMMENTS_FAILURE";

  export const createCommentsSuccess = (comments) => {
    return {
      type: CREATE_COMMENTS_SUCCESS,
      payload: comments,
    };
  };

  export const createCommentError = (error) => {
    return {
      type: CREATE_COMMENTS_FAILURE,
      payload: error,
    };
  };
  export const createCommentAction = (dispatch, newCommentData) => {
    createComments(
        newCommentData,
        (data) => {
          console.log("action 2");
          dispatch(createCommentsSuccess(data));
          showAlertModal("Success!", "Form submitted successfully!");
        },
        (error) => {
          dispatch(createCommentError(error));
          showAlertModal("Error!", "Failed to create comment. Please try again.");
        }
    );
};