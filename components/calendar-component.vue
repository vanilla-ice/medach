<template lang="pug">
  div
    .calendar__title
      | Календарь
    .calendar__title-year
      | 2017
    .calendar__wrapper.calendar__wrapper-2017(data-year = '2017')
      table.calendar-digits#calendar-1(data-month="01")
        thead
          tr
            td(colspan="4").month
        tbody
      table.calendar-digits#calendar-2(data-month="02")
        thead
          tr
            td(colspan="4").month
        tbody
      table.calendar-digits#calendar-3(data-month="03")
        thead
          tr
            td(colspan="4").month
        tbody
      table.calendar-digits#calendar-4(data-month="04")
        thead
          tr
            td(colspan="4").month
        tbody
      table.calendar-digits#calendar-5(data-month="05")
        thead
          tr
            td(colspan="4").month
        tbody
      table.calendar-digits#calendar-6(data-month="06")
        thead
          tr
            td(colspan="4").month
        tbody
      table.calendar-digits#calendar-7(data-month="07")
        thead
          tr
            td(colspan="4").month
        tbody
      table.calendar-digits#calendar-8(data-month="08")
        thead
          tr
            td(colspan="4").month
        tbody
      table.calendar-digits#calendar-9(data-month="09")
        thead
          tr
            td(colspan="4").month
        tbody
      table.calendar-digits#calendar-10(data-month="10")
        thead
          tr
            td(colspan="4").month
        tbody
      table.calendar-digits#calendar-11(data-month="11")
        thead
          tr
            td(colspan="4").month
        tbody
      table.calendar-digits#calendar-12(data-month="12")
        thead
          tr
            td(colspan="4").month
        tbody
    .calendar__grey
      .calendar__title-year
        | 2016
      .calendar__wrapper.calendar__wrapper-2016(data-year = '2016')
        table.calendar-digits#calendar-1(data-month="01")
          thead
            tr
              td(colspan="4").month
          tbody
        table.calendar-digits#calendar-2(data-month="02")
          thead
            tr
              td(colspan="4").month
          tbody
        table.calendar-digits#calendar-3(data-month="03")
          thead
            tr
              td(colspan="4").month
          tbody
        table.calendar-digits#calendar-4(data-month="04")
          thead
            tr
              td(colspan="4").month
          tbody
        table.calendar-digits#calendar-5(data-month="05")
          thead
            tr
              td(colspan="4").month
          tbody
        table.calendar-digits#calendar-6(data-month="06")
          thead
            tr
              td(colspan="4").month
          tbody
        table.calendar-digits#calendar-7(data-month="07")
          thead
            tr
              td(colspan="4").month
          tbody
        table.calendar-digits#calendar-8(data-month="08")
          thead
            tr
              td(colspan="4").month
          tbody
        table.calendar-digits#calendar-9(data-month="09")
          thead
            tr
              td(colspan="4").month
          tbody
        table.calendar-digits#calendar-10(data-month="10")
          thead
            tr
              td(colspan="4").month
          tbody
        table.calendar-digits#calendar-11(data-month="11")
          thead
            tr
              td(colspan="4").month
          tbody
        table.calendar-digits#calendar-12(data-month="12")
          thead
            tr
              td(colspan="4").month
          tbody
</template>

<style scoped lang="scss">
  .calendar__title {
  margin-top: 95px;
  margin-bottom: 104px;

  color: #686C7A;
  font-family: LucidaGrande-Bold;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
}

.calendar__title-year {
  margin-bottom: 80px;

  color: #686C7A;
  font-family: LucidaGrande-Bold;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
}

.calendar__wrapper {
  max-width: 901px;
  width: 100%;

  margin: 0 auto;
}

.calendar-digits .month {
  font-family: LucidaGrande-Bold;
  font-size: 17px;
  line-height: 20px;
}

.calendar-digits {
  display: inline-block;
  vertical-align: top;

  max-width: 164px;
  width: 100%;
  margin-right: 63px;
  margin-bottom: 53px;
}

.calendar-digits:nth-child(4n) {
  margin-right: 0;
}

.calendar-digits td {
  padding-right: 5px;
  padding-bottom: 10px;

  font-size: 12px;
  line-height: 15px;
  font-family: LucidaGrande-Bold;
}

.calendar-digits .month {
  padding-bottom: 20px;
}

.calendar-digits a:hover {
  text-decoration: underline;
}

.calendar__grey {
  padding-top: 40px;
  background-color: #F8F8F8;
}


</style>

