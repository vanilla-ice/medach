<template lang="pug" >
  div
    input(placeholder="Post name" v-model="activePost.name")
    button(@click="savePost") save
</template>

<script>
import HeaderComponent from '~/components/Header.vue'
import DataComponent from '~/components/Data.vue'
import BigFotosComponent from '~/components/BigFotos.vue'
import MinFotosComponent from '~/components/MinFotos.vue'

import { mapGetters } from 'vuex'
import { db } from '~/db'
const $posts = db.ref('posts')

const emptyPost = {
  name: null,
  sortDate: null,
  date: null
}

export default {
  data () {
    return {
      activePost: emptyPost
    }
  },

  fetch ({ store }) {
    store.dispatch('setPostsRef', $posts)
  },

  mounted () {
  },

  computed: {
    ...mapGetters(['posts'])
  },

  methods: {
    savePost () {
      const date = new Date()
      this.activePost.sortDate = date.getTime()
      this.activePost.date = `${date}`

      console.log(this.activePost)

      $posts.push().set(this.activePost)
    }
  },

  components: {
    HeaderComponent,
    DataComponent,
    BigFotosComponent,
    MinFotosComponent
  }
}
</script>

<style>

</style>
