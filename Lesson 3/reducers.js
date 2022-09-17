const SET_POSTS = 'posts/set-posts';
const SET_NAME = 'profile/set-name';

const postsInitialState = {
  posts: [],
};

const postsReducer = (state = postsInitialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: [...state.posts, ...action.payload] };

    default:
      return state;
  }
};

const profileInitialState = {
  name: '',
};

const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: state.name + action.payload };

    default:
      return state;
  }
};
