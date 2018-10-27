import Vue from 'vue'
import Vuex from 'vuex'
import { PeopleService } from './resource'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    person: null,
    people: []
  },
  mutations: {
    CHANGE_PERSON (state, payload) {
      state.person = payload
    },
    CHANGE_PEOPLE (state, payload) {
      state.people = payload
    }
  },
  actions: {
    getPerson (ctx, payload) {
      if (!payload || !payload.id) return ctx.commit('CHANGE_PERSON', {})
      return PeopleService.fetch(payload.id, {
        filter: {
          include: ['father', 'mother', {
            relation: 'fatherChild',
            scope: { include: 'mother' }
          },
          {
            relation: 'motherChild',
            scope: { include: 'father' }
          }]
        }
      })
        .then(res => ctx.commit('CHANGE_PERSON', res.data))
        .catch(err => console.log(err))
    },
    getPeopleName (ctx, payload) {
      return PeopleService.fetch('')
        .then(res => ctx.commit('CHANGE_PEOPLE', res.data))
        .catch(err => console.log(err))
    }
  }
})
