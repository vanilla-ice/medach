<template lang="pug" >
  div
    header-component
    data-component
    main.main-index
      big-fotos-component
      MinFotosComponent
</template>

<script>
import HeaderComponent from '~/components/Header.vue'
import DataComponent from '~/components/Data.vue'
import BigFotosComponent from '~/components/BigFotos.vue'
import MinFotosComponent from '~/components/MinFotos.vue'

import { mapGetters } from 'vuex'
import { db } from '~/db'
const $posts = db.ref('posts')

export default {
  fetch ({ store }) {
    return store.dispatch('setPostsRef', $posts)
  },

  mounted () {
    $posts.once('value').then(post => console.log('post', post))
  },

  computed: {
    ...mapGetters(['posts'])
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
