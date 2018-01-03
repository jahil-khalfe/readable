import { GET_CATEGORIES_SUCCESS, GET_POSTS_SUCCESS, GET_CATEGORY_POSTS_SUCCESS, GET_SINGLE_POST_SUCCES, GET_COMMENTS_SUCCESS } from './actions';

const defState = {
  categories: [],
  categoryPosts: [],
  posts: [],
  singlePost: {},
  singlePostComments: [],
  error: '',
};

const homeReducer = (state = defState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
      case GET_CATEGORY_POSTS_SUCCESS:
      return {
        ...state,
        categoryPosts: action.payload,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
      case GET_SINGLE_POST_SUCCES:
      return {
        ...state,
        singlePost: action.payload,
      };
      case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        singlePostComments: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
