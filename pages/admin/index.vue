<template lang="pug" >
  div
    input(placeholder="Post name" v-model="activePost.name" @change="changeName")
    input(placeholder="Url" v-model="activePost.url")
    .tags
      .tag(v-for="(tag, id) in availableTags", :key="id")
        label(:for="'tag-' + id") {{ tag.name }}
        input(type="checkbox", :value="tag.value", :id="'tag-' + id" v-model="activePost.tags")

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
  url: null,
  tags: []
}

export default {
  data () {
    return {
      activePost: emptyPost,
      availableTags: [
        {
          value: 'surgery',
          name: '#ХИРУРГИЯ'
        },
        {
          name: '#ТЕРАПИЯ',
          value: 'therapy'
        },
        {
          name: '#ОФТАЛЬМОЛОГИЯ',
          value: 'ophthalmology'
        },
        {
          name: '#КАРДИОЛОГИЯ',
          value: 'cardiology'
        },
        {
          name: '#ОБРАЗОВАНИЕ',
          value: 'education'
        },
        {
          name: '#CRISPR',
          value: 'crispr'
        },
        {
          name: '#НЕЙРОХИРУРГИЯ',
          value: 'neurosurgery'
        }
      ]
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
