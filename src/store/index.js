import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  currentID: '',
  exp2Data: {},
  // 改成-1
  startIndex: 0
}

const mutations = {
  setStartActicle(state) {
    state.startIndex = (state.startIndex + 1) % 8
  },
  setCurrentID(state, data) {
    state.currentID = data
  },
  savePersonalInfo(state, data) {
    const id = state.currentID
    state.exp2Data[id] = Object.assign(state.exp2Data[id], data)
  },
  saveStartPilao(state, data) {
    const id = state.currentID
    state.exp2Data[id].startPilao = data
  },
  saveDemoScore(state, data) {
    const id = state.currentID
    state.exp2Data[id].demoScore = data
  },
  saveArticleAnswer(state, data) {
    const id = state.currentID
    state.exp2Data[id].articleAnswer = data
  },
  saveArticleForm(state, data) {
    const id = state.currentID
    state.exp2Data[id].articleForm = data
  },
  saveArticleTime(state, data) {
    const id = state.currentID
    state.exp2Data[id].articleTime = data
  },
  saveEndPilao(state, data) {
    const id = state.currentID
    state.exp2Data[id].endPilao = data
  }
}

const actions = {
  setStartActicle({ commit }) {
    commit('setStartActicle')
  },
  saveStartInfo({ state, commit }, { personalInfo, startPilao }) {
    const id = personalInfo.id
    state.exp2Data[id] = { startIndex: state.startIndex }
    commit('setCurrentID', personalInfo.id)
    commit('savePersonalInfo', personalInfo)
    commit('saveStartPilao', startPilao)
  },
  saveDemoScore({ commit }, payload) {
    commit('saveDemoScore', payload)
  },
  saveReadAnswer({ commit }, { articleAnswer, articleForm, articleTime }) {
    commit('saveArticleAnswer', articleAnswer)
    commit('saveArticleForm', articleForm)
    commit('saveArticleTime', articleTime)
  },
  saveEndInfo({ commit }, payload) {
    commit('saveEndPilao', payload)
  }
}

const getters = {
  startIndex: state => state.startIndex,
  exp2Data: state => state.exp2Data
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})