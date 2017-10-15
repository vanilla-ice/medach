<template lang="pug" >
  div
    input(placeholder="Post name" v-model="activePost.name" @change="changeName")
    input(placeholder="Url" v-model="activePost.url")
    button(@click="savePost") save
</template>

<script>
import HeaderComponent from '~/components/Header.vue'
import DataComponent from '~/components/Data.vue'
import BigFotosComponent from '~/components/BigFotos.vue'
import MinFotosComponent from '~/components/MinFotos.vue'

import slugify from '~/utils/slugify'

import { mapGetters } from 'vuex'
import { db } from '~/db'
const $posts = db.ref('posts')

const emptyPost = {
  name: null,
  sortDate: null,
  date: null,
  url: null
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
      const date = new Date('08/03/2017')
      this.activePost.sortDate = date.getTime()
      this.activePost.date = `${date}`

      $posts.push().set(this.activePost)
    },

    changeName (e) {
      this.activePost.url = slugify(e.target.value)
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
