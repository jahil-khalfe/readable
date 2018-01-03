import getData from './services';

export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR';
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS';
export const GET_CATEGORY_POSTS_SUCCESS = 'GET_CATEGORY_POSTS_SUCCESS';
export const GET_CATEGORY_POSTS_ERROR = 'GET_CATEGORY_POSTS_ERROR';
export const GET_SINGLE_POST = 'GET_SINGLE_POST';
export const GET_SINGLE_POST_SUCCES = 'GET_SINGLE_POST_SUCCES';
export const GET_SINGLE_POST_ERROR = 'GET_SINGLE_POST_ERROR';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';

export const getCategories = () =>
  dispatch => {
    dispatch({
      type: GET_CATEGORIES
    });
    getData('categories')
      .then(res => res.json())
      .then((data) => dispatch({
        type: GET_CATEGORIES_SUCCESS,
        payload: data.categories
      }))
      .catch(error => {
        dispatch({
          type: GET_CATEGORIES_ERROR,
          error: error.response.data.error
        })
      })
  };

export const getPosts = () =>
  dispatch => {
    dispatch({
      type: GET_POSTS
    });
    getData('posts')
      .then(res => res.json())
      .then((data) => dispatch({
        type: GET_POSTS_SUCCESS,
        payload: data
      }))
      .catch(error => {
        dispatch({
          type: GET_POSTS_ERROR,
          error: error.response.data.error
        })
      })
  };

export const getCategoryPosts = category =>
  dispatch => {
    dispatch({
      type: GET_CATEGORY_POSTS
    });
    getData(`${category}/posts`)
      .then(res => res.json())
      .then((data) => dispatch({
        type: GET_CATEGORY_POSTS_SUCCESS,
        payload: data
      }))
      .catch(error => {
        dispatch({
          type: GET_CATEGORY_POSTS_ERROR,
          error: error.response.data.error
        })
      })
  };

export const getSinglePost = id =>
  dispatch => {
    dispatch({
      type: GET_SINGLE_POST
    });
    getData(`posts/${id}`)
      .then(res => res.json())
      .then((data) => dispatch({
        type: GET_SINGLE_POST_SUCCES,
        payload: data
      }))
      .catch(error => {
        dispatch({
          type: GET_SINGLE_POST_ERROR,
          error: error.response.data.error
        })
      })
  };

export const getSinglePostComment = id =>
  dispatch => {
    dispatch({
      type: GET_COMMENTS
    });
    getData(`posts/${id}/comments`)
      .then(res => res.json())
      .then((data) => dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: data
      }))
      .catch(error => {
        dispatch({
          type: GET_COMMENTS_ERROR,
          error: error.response.data.error
        })
      })
  };