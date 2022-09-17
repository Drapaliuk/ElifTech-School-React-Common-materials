const store = createStore(reducers);
const dispatch = store.dispatch;

const allPostsBtn = document.querySelector('.async-btn');
const singlePostBtn = document.querySelector('.single-post-btn');
const input = document.querySelector('.input-example');

const fetchPosts = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((r) => r.json())
    .then((payload) => dispatch({ type: SET_POSTS, payload }));
};

const fetchSinglePost = (id) => (dispatch) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  fetch(url)
    .then((r) => r.json())
    .then((post) => {
      dispatch({ type: SET_POSTS, payload: [post] });
    });
};

input.addEventListener('input', function (e) {
  store.dispatch({ type: SET_NAME, payload: e.data });
  const newName = store.useSelector((state) => state.profile.name);
  this.value = newName;
});

allPostsBtn.addEventListener('click', () => dispatch(fetchPosts()));
singlePostBtn.addEventListener('click', () => dispatch(fetchSinglePost(10)));


