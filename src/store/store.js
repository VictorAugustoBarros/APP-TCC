import { createStore } from 'vuex';

const initialState = {
  Authenticated: false,
};

const storedState = JSON.parse(localStorage.getItem('appState'));

const store = createStore({
  state() {
    return {
      page: {
        title: null
      },
      user: {
        id: null,
        name: null,
        email: null,
        password: null,
        username: null,
        followers: null,
        following: null,
        posts: 0
      },
      ...initialState,
      ...storedState,
    };
  },
  mutations: {
    setIsAuthenticated(state, new_value) {
      state.Authenticated = new_value;
      localStorage.setItem('appState', JSON.stringify(state));
    },
  },
  actions: {

  },
  getters: {

  },
});

export default store;