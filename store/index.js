import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import { firebaseMutations, firebaseAction } from 'vuexfire'

Vue.use(Vuex)

function store () {
  return new Vuex.Store({
    state: {
      posts: []
    },

    getters: {
      posts: state => state.posts
    },

    mutations: {
      ...firebaseMutations
    },

    plugins: [createLogger()],

    actions: {
      setPostsRef: firebaseAction(({
        bindFirebaseRef
      }, ref) => {
        return new Promise((resolve, reject) => {
          bindFirebaseRef('posts', ref, {
            readyCallback: resolve,
            cancelCallback: reject
          })
        })
      })
    }
  })
}

export default store
