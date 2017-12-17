import Util from '../util/Util'
import Api from '../api/Api'
import Vuex from 'vuex'
import Vue from 'vue'
import {
  CHANGE_KEYWORD,
  SEARCH,
  FTECH_FAVORITE,
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from './mutation-types'

Vue.use(Vuex);


const state = {
  keyword: '',
  gifsIds: [],
  favorites: []
}
const actions = {
  [CHANGE_KEYWORD] ({commit}, keyword) {
    commit(CHANGE_KEYWORD, keyword);
  },
  [SEARCH] ({ commit, state }) {
    Api.seachGifsIds(state.keyword)
      .then(ids => {
        commit(SEARCH, ids);
      });
  },
  [FTECH_FAVORITE] ({commit}) {
    Api.getFavorites()
      .then((ids) => {
        commit(FTECH_FAVORITE, ids);
      });
  },
  [ADD_FAVORITE] ({commit, state}, id) {
    Api.postFavorite(id)
      .then(() => {
        commit(ADD_FAVORITE, id);
      });
  },
  [REMOVE_FAVORITE] ({commit, state}, id) {
    commit(REMOVE_FAVORITE, id);
    Api.deleteFavorite(id)
      .then(() => {
        dispatch(FTECH_FAVORITE);
      });
  }
}
const mutations = {
  [CHANGE_KEYWORD] (state, keyword) {
    state.keyword = keyword;
  },
  [FTECH_FAVORITE] (state, ids) {
    state.favorites = ids;
  },
  [SEARCH] (state, ids) {
    state.gifsIds = ids;
  },
  [ADD_FAVORITE] (state, id) {
    if (!Util.hasBothId(state.favorites, id)) {
      console.log(state.favorites);
      state.favorites.push(id);
    }
  },
  [REMOVE_FAVORITE] (state, id) {
    for (let i = 0; i < state.favorites.length; i++) {
      if (state.favorites[i] === id) {
        state.favorites.splice(i, 1);
        break;
      }
    }
  }
}
const getters = {
  keyword: state => state.keyword,
  gifsIds: state => state.gifsIds,
  favorites: state => state.favorites
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})