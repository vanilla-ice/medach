<template lang="pug" >
  div
    header-component
    data-component
    main.main-index
      big-fotos-component
      MinFotosComponent(v-for="(day, index) in postsByDay", :key="index")

</template>

<script>
import moment from 'moment'

import HeaderComponent from '~/components/Header.vue'
import DataComponent from '~/components/Data.vue'
import BigFotosComponent from '~/components/BigFotos.vue'
import MinFotosComponent from '~/components/MinFotos.vue'

import { mapGetters } from 'vuex'
import { db } from '~/db'
const $posts = db.ref('posts')

export default {
  fetch ({ store }) {
    store.dispatch('setPostsRef', $posts.orderByChild('sortDate').limitToLast(50))
  },

  data () {
    return {
    }
  },

  mounted () {
    console.log(this.postsByDay)
  },

  computed: {
    ...mapGetters(['posts']),

    postsByDay () {
      return this.posts.reduce((res, curr) => {
        const date = moment(curr.date).format('DD/MM/YYYY')

        if (!res.hasOwnProperty(date)) {
          res[date] = []
        }
        res[date].push(curr)
        return res
      }, {})
    }
  },

  methods: {
    // setPostsByDay: (day) => {
    //   const dayDate = new Date(day)

    //   return this.posts.filter(post => {
    //     const date = new Date(post.date)
    //   })
    // }
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
