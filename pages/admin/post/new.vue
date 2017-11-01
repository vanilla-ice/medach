<template lang="pug" >
  .wrapper
    .inner
      .left
        .input-wrapper
          .title
            | Название поста
          .input
            input(v-model="activePost.name" @change="changeName")
        
        .input-wrapper
          .title
            | Url поста
          .input
            input(v-model="activePost.url")

        .input-wrapper
          .post-text
            VueEditor(v-model="activePost.text")
      
      .right
        .input-wrapper
          .title
            | Тэги
          .tags
            .tag(v-for="(tag, id) in availableTags", :key="id")
              label(:for="'tag-' + id") {{ tag.name }}
              input(type="checkbox", :value="tag.value", :id="'tag-' + id" v-model="tags")

    button(@click="savePost") save
</template>

<script>
import slugify from '~/utils/slugify'
import { VueEditor } from 'vue2-editor'
// import { db } from '~/db'
// const $posts = db.ref('posts')

const emptyPost = {
  name: null,
  sortDate: null,
  date: null,
  url: null,
  tags: {},
  text: null,
  author: null,
  redaction: null,
  image: null,
  infographic: null
}

export default {
  layout: 'admin',

  data () {
    return {
      activePost: emptyPost,
      tags: [],
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

  computed: {

  },

  methods: {
    savePost () {
      const date = new Date()
      this.activePost.sortDate = date.getTime()
      this.activePost.date = `${date}`
      this.tags.map(item => { this.activePost.tags[item] = true })
      this.tags = []

      console.log(this.activePost)
      //  $posts.push().set(this.activePost)
    },

    changeName (e) {
      this.activePost.url = slugify(e.target.value)
    }
  },

  created () {

  },

  mounted () {
  },

  components: {
    VueEditor
  }
}
</script>

<style scoped lang="scss">
.inner {
  display: flex;
  flex-flow: row nowrap;
  padding: 0 60px;
}

.input-wrapper {
  margin-top: 15px;
}

.title {
  font-size: 18px;
  font-family: sans-serif;
}

.input {
  margin-top: 10px;
}

.post-text {
  background: #fff;
}

.left {
  flex: 1 1 auto;
}
</style>
