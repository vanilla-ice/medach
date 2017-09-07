<template lang="pug" >
  div
    header-component
    data-component
    main.main-index
      big-fotos-component
      MinFotosComponent
</template>

<script>
import HeaderComponent from '~/components/header-component.vue'
import DataComponent from '~/components/data-component.vue'
import BigFotosComponent from '~/components/big-fotos-component.vue'
import MinFotosComponent from '~/components/min-fotos-component.vue'

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
