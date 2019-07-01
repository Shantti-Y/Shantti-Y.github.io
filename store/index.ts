import Vuex from 'vuex';

// TODO: define interface of this state under synced condition with vuex-router-sync
const state = {
  currentPath: '/',
  paths: [
    '/',
    '/about',
    '/works/1',
    '/works/2',
    '/contact'
  ]
}

const getters = {
  prevLinkPath: (state): string | null => {
    const currentPathIdx = state.paths.findIndex(path => path === state.route.path);
    if (currentPathIdx === null) return null;
    if (currentPathIdx - 1 < 0) return null;
    return state.paths[currentPathIdx - 1];
  },
  nextLinkPath: (state): string | null => {
    const currentPathIdx = state.paths.findIndex(path => path === state.route.path);
    if (currentPathIdx === null) return null;
    if (currentPathIdx + 1 >= state.paths.length) return null;
    return state.paths[currentPathIdx + 1];
  }
}

export default () => new Vuex.Store({
  state: state,
  getters: getters
})