import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    data: [],
    events: [],
    nonce: 0
  },
  mutations: {
    addData (state, data) {
      state.data.push(data)
    },
    addEvent (state, event) {
      state.events.unshift({ text: event, id: Math.random() })
    },
    upNonce (state) {
      state.nonce++
    }
  },
  actions: {
    async sendData ({ commit, state }, data) {
      const obj = { price: data[0].value, qty: data[1].value, amount: data[2].value, nonce: state.nonce }
      commit('addEvent', `Данные готовы к отправке: ${JSON.stringify(obj)}. Текущий LocalStorage: ${JSON.stringify(Object.keys(localStorage).map(key => localStorage.getItem(key)))}`)
      setTimeout(() => {
        if (Math.round(Math.random() * 1) === 1) {
          commit('addData', obj)
          commit('addEvent', `Данные успешно сохранены. Data: ${JSON.stringify(obj)}`)
        } else {
          commit('addEvent', 'Ошибка сервера.')
          alert("Упс, не повезло. Сервер отвалился")
        }
      }, 1000);
    }
  },
  plugins: [createPersistedState({ key: 'vuexStore', paths: ['data'] })],
});