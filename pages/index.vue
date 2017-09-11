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

export default {
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
