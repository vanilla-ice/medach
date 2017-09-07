<template lang="pug">
  .min-fotos
      .min-fotos__day.min-fotos__tuesday
        .min-fotos__day-data
          .min-fotos__day-data-text
            | Вторник
          a(name="1/03/2017").min-fotos__day-data-digit
            | 01.03.2017
          span.min-fotos__day-data-circle
        .min-fotos__day-wrapper
          .min-fotos__item
            a(href="#").min-fotos__item-foto.min-fotos__item-foto-1
            .min-fotos__item-text
              | Когда кто-то говорит “больно”, мне часто вспоминается сцена в начале фильма “Майор Пэйн”.
          .min-fotos__item
            a(href="#").min-fotos__item-foto.min-fotos__item-foto-2
            .min-fotos__item-text
              | В ответ на стресс мозг активирует несколько систем, секретирующих нейропептиды.
          .min-fotos__item
            a(href="#").min-fotos__item-foto.min-fotos__item-foto-3
            .min-fotos__item-text
              | Бытует мнение, что полость рта — это одно из самых грязных мест во всём организме человека.
          .min-fotos__item
            a(href="#").min-fotos__item-foto.min-fotos__item-foto-4
            .min-fotos__item-text
              | Однажды, в октябре 2010 года, Лия Дюрант убирала в неотремонтированном подвале своего дома в Фолс-Черч.
          .min-fotos__item
            a(href="#").min-fotos__item-foto.min-fotos__item-foto-5
            .min-fotos__item-text
              | В 2015 году, последнем году, за которым имеются данные, лишь 72% детей до трех лет в США получили семь ключевых…
      .min-fotos__day.min-fotos__monday.min-fotos__grey
        .min-fotos__day-data
          .min-fotos__day-data-text
            | Понедельник
          a(name="28/02/2017").min-fotos__day-data-digit
            | 28.02.2017
          span.min-fotos__day-data-circle
        .min-fotos__day-wrapper
          .min-fotos__item
            a(href="#").min-fotos__item-foto.min-fotos__item-foto-6
            .min-fotos__item-text
              | Микробиом, а в частности — микробиом кишечника — стал в последнее время актуальной темой…
          .min-fotos__item
            a(href="#").min-fotos__item-foto.min-fotos__item-foto-7
            .min-fotos__item-text
              | В вузе, на фармакологии, многие из вас заучивали названия лекарств, показания к их применению и их основные...
          .min-fotos__item
            a(href="#").min-fotos__item-foto.min-fotos__item-foto-8
            .min-fotos__item-text
              | Преждевременные роды на ранних сроках представляют собой главную причину неонатальной смертности и…
          .min-fotos__item
            a(href="#").min-fotos__item-foto.min-fotos__item-foto-9
            .min-fotos__item-text
              | Когда Блейк Виденхефт только начал работать с микроорганизмами, предмет его исследований ещё был…
          .min-fotos__item
            a(href="#").min-fotos__item-foto.min-fotos__item-foto-10
            .min-fotos__item-text
              | Вакцины спасают жизни. Но каков наиболее эффективный способ убедить в этом встревоженных родителей?
      .min-fotos__day.min-fotos__sunday
        .min-fotos__day-data
          .min-fotos__day-data-text
            | Воскресенье
          a(name="1/03/2017").min-fotos__day-data-digit
            | 01.03.2017
          span.min-fotos__day-data-circle
        .min-fotos__day-wrapper
          .min-fotos__item
            a(href="#").min-fotos__item-foto.min-fotos__item-foto-11
            .min-fotos__item-text
              | Осознавая некомпетентность людей, вызванную пропагандой антипрививочников как среди простого населения, так и со стороны медицинских…
          .min-fotos__item
            a(href="#").min-fotos__item-foto.min-fotos__item-foto-12
            .min-fotos__item-text
              | Стоимость проведения клинических испытаний и выведения нового препарата на рынок является центральной проблемой…
          .min-fotos__item
            a(href="#").min-fotos__item-foto.min-fotos__item-foto-13
            .min-fotos__item-text
              | По каким причинам женщины выбирают карьеру в академической медицине или же отказываются от нее?
          .min-fotos__item
            a(href="#").min-fotos__item-foto.min-fotos__item-foto-14
            .min-fotos__item-text
              | В прошлом году Кристина Квасней была близка к тому, чтобы отказаться от цели.
          .min-fotos__item
            a(href="#").min-fotos__item-foto.min-fotos__item-foto-15
            .min-fotos__item-text
              | Инфографика, сравнивающая распределение бюджетных мест до и после приказа

</template>

<style scoped lang="scss">
  .main-index {
  padding-bottom: 50px;
}

.min-fotos__day-data {
  display: flex;
  justify-content: space-between;

  max-width: 1280px;
  width: 100%;

  margin: 0 auto;
  padding: 0 19px;

  font-family: LucidaGrande-Bold;
  font-size: 12px;
  margin-bottom: 14px;
}

.min-fotos__day-data-digit {
  margin-left: auto;
}

.min-fotos__day-data-circle {
  display: block;
  width: 9px;
  height: 9px;
  margin-top: 3px;
  margin-left: 13px;

  background: #0da4fa;
  border-radius: 50%;
}

.min-fotos__day-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  max-width: 1050px;
  width: 100%;
  margin: 0 auto;
}

.min-fotos__item {
  width: 167px;

  font-size: 12px;
  color: #515666;
  line-height: 16px;
}

.min-fotos__item-foto {
  display: block;
  width: 100%;
  height: 219px;
  margin-bottom: 10px;
}

.min-fotos__item-foto-1 {
  background: url('../static/images/pain.jpg') no-repeat center;
  background-size: contain;
}

.min-fotos__item-foto-2 {
  background: url('../static/images/stress-brain.jpg') no-repeat center;
  background-size: contain;
}

.min-fotos__item-foto-3 {
  background: url('../static/images/mouth.jpg') no-repeat center;
  background-size: contain;
}

.min-fotos__item-foto-4 {
  background: url('../static/images/vaccine.jpg') no-repeat center;
  background-size: contain;
}

.min-fotos__item-foto-5 {
  background: url('../static/images/vaccine-wars.jpg') no-repeat center;
  background-size: contain;
}

.min-fotos__item-foto-6 {
  background: url('../static/images/mikrobiom-intestines.jpg') no-repeat center;
  background-size: contain;
}

.min-fotos__item-foto-7 {
  background: url('../static/images/darkside.jpg') no-repeat center;
  background-size: contain;
}

.min-fotos__item-foto-8 {
  background: url('../static/images/womb.jpg') no-repeat center;
  background-size: contain;
}

.min-fotos__item-foto-9 {
  background: url('../static/images/crisp.jpg') no-repeat center;
  background-size: contain;
}

.min-fotos__item-foto-10 {
  background: url('../static/images/nay_2.jpg') no-repeat center;
  background-size: contain;
}

.min-fotos__item-foto-11 {
  background: url('../static/images/medical-channel.jpg') no-repeat center;
  background-size: contain;
}

.min-fotos__item-foto-12 {
  background: url('../static/images/k-i.jpg') no-repeat center;
  background-size: contain;
}

.min-fotos__item-foto-13 {
  background: url('../static/images/woman.jpg') no-repeat center;
  background-size: contain;
}

.min-fotos__item-foto-14 {
  background: url('../static/images/scince-rich.jpg') no-repeat center;
  background-size: contain;
}

.min-fotos__item-foto-15 {
  background: url('../static/images/eye.jpg') no-repeat center;
  background-size: contain;
}

.min-fotos__day {
  padding-top: 25px;
  padding-bottom: 14px;
}

.min-fotos__grey {
  background-color: #F8F8F8;
}


</style>

