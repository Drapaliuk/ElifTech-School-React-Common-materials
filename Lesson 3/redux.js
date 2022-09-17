const reducers = {
  posts: postsReducer,
  profile: profileReducer,
};

const createStore = (reducers) => {
  let state = {};

  const dispatch = (action) => {
    if (typeof action === 'function') {
      return action(dispatch)
    }

    const nextState = {}

    Object.keys(reducers).forEach((part) => {
      nextState[part] = reducers[part](state[part], action);
    });

    devTools(state, nextState, action)

    state = nextState
  };

  dispatch({ type: 'initial-action' });

  return {
    state,
    dispatch,
    useSelector: (callback) => callback(state),
  };
};
