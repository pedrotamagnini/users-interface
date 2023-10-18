import baseURL from '../apiConfig';

export function fetchUsersSer(success, failure) {
    const request_options = {
        method: `GET`,
        mode: `cors`,
        cache: `no-cache`,
        credentials: `same-origin`,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };
    fetch(`${baseURL}/users`, request_options)
        .then(res => res.json())
        .then(res => {
            success(res)
        })
        .catch(err => failure(err.message))
}

export function createUsers(newUsersData,success, failure) {
    const request_options = {
        method: `POST`,
        mode: `cors`,
        cache: `no-cache`,
        credentials: `same-origin`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUsersData),
    };

    fetch(`${baseURL}/users`, request_options)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to create users');
            }
            return response.json();
        })
        .then((data) => {
            success(data);
        })
        .catch((error) => {
            failure(error.message);
        })
}

export function fetchPostsSer(success, failure) {
    const request_options = {
        method: `GET`,
        mode: `cors`,
        cache: `no-cache`,
        credentials: `same-origin`,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };
    fetch(`${baseURL}/posts`, request_options)
        .then(res => res.json())
        .then(res => {
            success(res)
        })
        .catch(err => failure(err.message))
}

export function createPosts(newPostsData,success, failure) {
    const request_options = {
        method: `POST`,
        mode: `cors`,
        cache: `no-cache`,
        credentials: `same-origin`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPostsData),
    };

    fetch(`${baseURL}/posts`, request_options)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to create posts');
            }
            return response.json();
        })
        .then((data) => {
            success(data);
        })
        .catch((error) => {
            failure(error.message);
        })
}

export function fetchCommentsSer(success, failure) {
    const request_options = {
        method: `GET`,
        mode: `cors`,
        cache: `no-cache`,
        credentials: `same-origin`,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };
    fetch(`${baseURL}/comments`, request_options)
        .then(res => res.json())
        .then(res => {
            success(res)
        })
        .catch(err => failure(err.message))
}

export function createComments(newCommentsData,success, failure) {
    const request_options = {
        method: `POST`,
        mode: `cors`,
        cache: `no-cache`,
        credentials: `same-origin`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCommentsData),
    };

    fetch(`${baseURL}/comments`, request_options)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to create posts');
            }
            return response.json();
        })
        .then((data) => {
            success(data);
        })
        .catch((error) => {
            failure(error.message);
        })
}



