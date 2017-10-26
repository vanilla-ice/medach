<template lang="pug" >
  .wrapper
    .header
      nuxt-link(to="/admin").logo
        img(src="~/static/images/logo.png")

    .posts
      .post
        .add-new(v-html="require('~/static/images/plus.svg')")

      .post(v-for="(post, index) in posts")
        .opacity
          .buttons
            nuxt-link.button(:to="'admin/post/' + post.url") Редактировать
            .button Удалить
        .img
        .name
          | {{ post.name }}
    //- input(placeholder="Post name" v-model="activePost.name" @change="changeName")
    //- input(placeholder="Url" v-model="activePost.url")
    //- .tags
    //-   .tag(v-for="(tag, id) in availableTags", :key="id")
    //-     label(:for="'tag-' + id") {{ tag.name }}
    //-     input(type="checkbox", :value="tag.value", :id="'tag-' + id" v-model="tags")

    //- button(@click="savePost") save
</template>

<script>
import Posters from '~/components/Posters'
import Plus from '~/static/images/plus.svg'

import slugify from '~/utils/slugify'

import { mapGetters } from 'vuex'
import { db } from '~/db'
const $posts = db.ref('posts')

const emptyPost = {
  name: null,
  sortDate: null,
  date: null,
  url: null,
  tags: {}
}

export default {
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

  fetch ({ store }) {
    store.dispatch('setPostsRef', $posts.orderByChild('sortDate'))
  },

  mounted () {
    console.log(this.posts)
  },

  computed: {
    ...mapGetters(['posts'])
  },

  methods: {
    savePost () {
      const date = new Date()
      this.activePost.sortDate = date.getTime()
      this.activePost.date = `${date}`
      this.tags.map(item => { this.activePost.tags[item] = true })
      this.tags = []

      $posts.push().set(this.activePost)
    },

    changeName (e) {
      this.activePost.url = slugify(e.target.value)
    }
  },

  components: {
    Posters,
    Plus
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  height: 100vh;
  background: #eeefef;
}

.header {
  padding: 30px 60px;
}

.logo {
  display: inline-block;

  img {
    display: block;
  }
}

.img {
  width: 100%;
  min-height: 200px;
  background: url('~static/images/crisp.jpg') no-repeat center / cover;
}

.posts {
  display: flex;
  flex-flow: row wrap;
  padding: 10px 50px 50px 50px;
  height: calc(100% - 83px);
  overflow-y: auto;
}

.post {
  width: calc(20% - 20px);
  cursor: pointer;
  margin: 0 10px;
  padding: 20px;
  box-shadow: 1px 1px 3px 0 #ccc;
  position: relative;
  overflow: hidden;

  background: #fff;

  &:nth-child(n + 6) {
    margin-top: 20px;
  }
}

.name {
  font-family: sans-serif;
  margin-top: 15px;
}

.opacity {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  width: 100%;
  height: 100%;
  color: #fff;
  opacity: 0;
  transition: opacity .2s ease;

  &:hover {
    opacity: 1;
  }
}

.buttons {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.button {
  font-size: 18px;
  font-family: sans-serif;
  text-shadow: 1px 1px 1px #000;
  border-bottom: 1px solid transparent;
  display: inline-block;
  color: #fff;

  &:not(:first-child) {
    margin-top: 10px;
  }

  &:hover {
    border-color: #fff;
  }
}

.add-new {
  width: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<style lang="scss">
.add-new {
  svg {
    width: 100%;

    path {
      fill: #ccc;
      transition: fill .2s ease;
    }
  }
}

.post:hover{
  .add-new svg path {
    fill: #aaa;
  }
}

</style>
