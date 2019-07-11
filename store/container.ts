import Vuex from 'vuex';

export const state: any = () => ({
  currentIdx: 0,
  swipedIdx: null
})

export const getters = {
  currentPriority(state) {
    return state.currentIdx + 1;
  },
  swipedPriority(state) {
    return state.swipedIdx + 1;
  }
}

export const actions = {
  moveToNext({ state, getters, commit }) {
    if (getters.currentPriority <= 6) {
      const newIdx = state.currentIdx + 1;
      commit('setCurrentIdx', newIdx);
    }
  },
  moveToPrev({ state, getters, commit }) {
    if (getters.currentPriority > 1) {
      const newIdx = state.currentIdx - 1;
      commit('setCurrentIdx', newIdx);
    }
  },
  changeCurrentIdx({ commit }, newIdx){
    commit('setCurrentIdx', newIdx);
  },
  changeSwipedIdx({ state,  commit }, direction: 'next' | 'prev') {
    if(direction === 'next') {
      commit('setSwiped', state.currentIdx + 1);
    }else{
      commit('setSwiped', state.currentIdx);
    }
  },
  resetSwipedIdx({ commit }) {
    commit('setSwiped', null)
  }
}

export const mutations = {
  setCurrentIdx(state, newIdx) {
    state.currentIdx = newIdx;
  },
  setSwiped(state, newIdx) {
    state.swipedIdx = newIdx;
  }
}