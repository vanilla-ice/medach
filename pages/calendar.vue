<template lang="pug" >
  div
    header-component
    main.main-calendar
      calendar-component

</template>
<script>
  import HeaderComponent from '~/components/header-component.vue'
  import CalendarComponent from '~/components/calendar-component.vue'

export default {
    components: {
      HeaderComponent,
      CalendarComponent
    }
}
</script>

<style scoped lang="scss">

</style>
