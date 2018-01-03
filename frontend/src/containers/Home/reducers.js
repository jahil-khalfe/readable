import {
  GET_CATEGORIES_SUCCESS,
  GET_POSTS_SUCCESS,
  GET_CATEGORY_POSTS_SUCCESS,
  GET_SINGLE_POST_SUCCES,
  GET_COMMENTS_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  ADD_COMMENT_SUCCESS,
  UPVOTE_COMMENT_SUCCESS,
  DOWNVOTE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS
} from './actions';

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
    case UPDATE_COMMENT_SUCCESS:
      const updatedComments = state.singlePostComments.filter(comment => comment.id !== action.payload.id).concat(action.payload);
      return {
        ...state,
        singlePostComments: updatedComments
      };
    case ADD_COMMENT_SUCCESS:
      return { ...state, singlePostComments: [...state.singlePostComments, action.payload] };

    case UPVOTE_COMMENT_SUCCESS:
      const upVoteComments = state.singlePostComments.filter(comment => comment.id !== action.payload.id).concat(action.payload);
      return { ...state, singlePostComments: upVoteComments };

    case DOWNVOTE_COMMENT_SUCCESS:
      const downVoteComments = state.singlePostComments.filter(comment => comment.id !== action.payload.id).concat(action.payload);
      return { ...state, singlePostComments: downVoteComments };

    case DELETE_COMMENT_SUCCESS:
      console.log(action.payload);
      return { ...state, comments: state.singlePostComments.filter(comment => comment.id !== action.payload.id) };
    default:
      return state;
  }
};

export default homeReducer;
