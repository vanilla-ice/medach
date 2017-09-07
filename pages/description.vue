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
  import HeaderComponent from '~/components/header-component.vue'
  import DescColumn from '~/components/desc-column.vue'
  import InfoColumn from '~/components/info-column.vue'
  import descColumnBottom from '~/components/desc-column-bottom.vue'

  export default {
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

  background: url('../static/images/good-bad.png') no-repeat center;
}
</style>
