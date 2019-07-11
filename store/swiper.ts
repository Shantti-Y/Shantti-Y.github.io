import Vuex from 'vuex';

export const state: any = () => ({
  position: 0
})

export const getters = {
  currentPosition(state){
    return state.position
  }
}

export const actions = {
  changePosition({ commit }, newPosition){
    commit('setPosition', newPosition);
  }
}

export const mutations = {
  setPosition(state, newPosition){
    state.position = newPosition;
  }
}