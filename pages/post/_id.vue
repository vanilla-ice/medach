<template lang="pug" >
  div
    header-component
    main.main.main-description
      .container
        .foto-column
          .foto-column__poster
        desc-column
        info-column
      desc-column-bottom
</template>

<script>
import HeaderComponent from '~/components/Header.vue'
import DescColumn from '~/components/DescColumn.vue'
import InfoColumn from '~/components/InfoColumn.vue'
import descColumnBottom from '~/components/DescColumnBottom.vue'

import { mapGetters } from 'vuex'
import { db } from '~/db'
const $posts = db.ref('posts')

export default {

  data () {
    return {
    }
  },

  computed: {
    ...mapGetters(['posts']),

    activePost () {
      return this.posts[0]
    }
  },

  created () {
    this.$store.dispatch('setPostsRef', $posts.orderByChild('url').equalTo(this.$route.params.id))
  },

  mounted () {
  },

  components: {
    HeaderComponent,
    DescColumn,
    InfoColumn,
    descColumnBottom
  }
}
</script>

<style scoped lang="scss">
.main-description {
  margin-top: 66px;
  padding-bottom: 56px;
}

.main-description .container {
  display: flex;
  justify-content: space-between;
}

.foto-column {
  max-width: 254.43px;
  width: 100%;
}

.foto-column__poster {
  max-width: 254.43px;
  width: 100%;
  height: 321.17px;

  margin-top: 8px;

  background: url('~/static/images/good-bad.png') no-repeat center;
}
</style>
