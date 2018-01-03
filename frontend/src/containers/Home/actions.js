import getData, {
  updateComment,
  addComment,
  upVoteComment,
  downVoteComment,
  deleteComment
} from './services';

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
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
export const UPDATE_COMMENT_ERROR = 'UPDATE_COMMENT_ERROR';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const UPVOTE_COMMENT_SUCCESS = 'UPVOTE_COMMENT_ERROR';
export const UPVOTE_COMMENT_ERROR = 'UPVOTE_COMMENT_ERROR';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';
export const DOWNVOTE_COMMENT_SUCCESS = 'DOWNVOTE_COMMENT_SUCCESS';
export const DOWNVOTE_COMMENT_ERROR = 'DOWNVOTE_COMMENT_ERROR';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_ERROR = 'DELETE_COMMENT_ERROR';

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

export const updateCommentAction = comment =>
  dispatch => {
    dispatch({
      type: UPDATE_COMMENT
    });
    updateComment(comment)
      .then(() => dispatch({
        type: UPDATE_COMMENT_SUCCESS,
        payload: comment
      }))
      .catch(error => {
        dispatch({
          type: UPDATE_COMMENT_ERROR,
          error: error.response.data.error
        })
      })
  };

export const addCommentAction = comment =>
  dispatch => {
    dispatch({
      type: ADD_COMMENT
    });
    addComment(comment)
      .then(() => dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: comment
      }))
      .catch(error => {
        dispatch({
          type: ADD_COMMENT_ERROR,
          error: error.response.data.error
        })
      })
  };

export const upVote = comment =>
  dispatch => {
    dispatch({
      type: UPVOTE_COMMENT
    });
    upVoteComment(comment)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: UPVOTE_COMMENT_SUCCESS,
          payload: data
        })
      })
      .catch(error => {
        dispatch({
          type: UPVOTE_COMMENT_ERROR,
          error: error.response.data.error
        })
      })
  };

export const downVote = comment =>
  dispatch => {
    dispatch({
      type: DOWNVOTE_COMMENT
    });
    downVoteComment(comment)
      .then(res => res.json())
      .then(data => dispatch({
        type: DOWNVOTE_COMMENT_SUCCESS,
        payload: data
      }))
      .catch(error => {
        dispatch({
          type: DOWNVOTE_COMMENT_ERROR,
          error: error.response.data.error
        })
      })
  };

export const deleteComments = comment =>
  dispatch => {
    dispatch({
      type: DOWNVOTE_COMMENT
    });
    deleteComment(comment)
      .then(res => res.json())
      .then(data => dispatch({
        type: DOWNVOTE_COMMENT_SUCCESS,
        payload: data
      }))
      .catch(error => {
        dispatch({
          type: DOWNVOTE_COMMENT_ERROR,
          error: error.response.data.error
        })
      })
  };