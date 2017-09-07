<template lang="pug">
  .posters
      .container
        .posters__wrapper
          .posters__item
            a(href="#").posters__item-data
              | 01.03.2017
              span
                .posters__item-circle
            a(href="#").posters__item-foto.posters__item-foto-1
            .posters__item-text
              | В 2015 году, последнем году, за которым имеются данные, лишь 72% детей до трех лет в США получили семь ключевых…
          .posters__item
            a(href="#").posters__item-data
              | 23.05.2015
              span
                .posters__item-circle
            a(href="#").posters__item-foto.posters__item-foto-2
            .posters__item-text
              | Однажды, в октябре 2010 года, Лия Дюрант убирала в неотремонтированном подвале своего дома в Фолс-Черч.
          .posters__item
            a(href="#").posters__item-data
              | 25.11.2016
              span
                .posters__item-circle
            a(href="#").posters__item-foto.posters__item-foto-3
            .posters__item-text
              | Бытует мнение, что полость рта — это одно из самых грязных мест во всём организме человека.
          .posters__item
            a(href="#").posters__item-data
              | 07.07.2017
              span
                .posters__item-circle
            a(href="#").posters__item-foto.posters__item-foto-4
            .posters__item-text
              | Когда кто-то говорит “больно”, мне часто вспоминается сцена в начале фильма “Майор Пэйн”.
          .posters__item
            a(href="#").posters__item-data
              | 22.09.2016
              span
                .posters__item-circle
            a(href="#").posters__item-foto.posters__item-foto-5
            .posters__item-text
              | В ответ на стресс мозг активирует несколько систем, секретирующих нейропептиды.
      .posters__wrapper.min-fotos__grey
        .container
          .posters__item
            a(href="#").posters__item-data
              | 01.03.2017
              span
                .posters__item-circle
            a(href="#").posters__item-foto.posters__item-foto-6
            .posters__item-text
              | Микробиом, а в частности — микробиом кишечника — стал в последнее время актуальной темой…
          .posters__item
            a(href="#").posters__item-data
              | 23.05.2015
              span
                .posters__item-circle
            a(href="#").posters__item-foto.posters__item-foto-7
            .posters__item-text
              | В вузе, на фармакологии, многие из вас заучивали названия лекарств, показания к их применению и их основные…
          .posters__item
            a(href="#").posters__item-data
              | 25.11.2016
              span
                .posters__item-circle
            a(href="#").posters__item-foto.posters__item-foto-8
            .posters__item-text
              | Преждевременные роды на ранних сроках представляют собой главную причину неонатальной смертности и...
          .posters__item
            a(href="#").posters__item-data
              | 07.07.2017
              span
                .posters__item-circle
            a(href="#").posters__item-foto.posters__item-foto-9
            .posters__item-text
              | Когда кто-то говорит “больно”, мне часто вспоминается сцена в начале фильма “Майор Пэйн”.
          .posters__item
            a(href="#").posters__item-data
              | 22.09.2016
              span
                .posters__item-circle
            a(href="#").posters__item-foto.posters__item-foto-10
            .posters__item-text
              | Вакцины спасают жизни. Но каков наиболее эффективный способ убедить в этом встревоженных родителей?
      .container
        .posters__wrapper
          .posters__item
            a(href="#").posters__item-data
              | 01.03.2017
              span
                .posters__item-circle
            a(href="#").posters__item-foto.posters__item-foto-11
            .posters__item-text
              | В прошлом году Кристина Квасней была близка к тому, чтобы отказаться от цели.
          .posters__item
            a(href="#").posters__item-data
              | 23.05.2015
              span
                .posters__item-circle
            a(href="#").posters__item-foto.posters__item-foto-12
            .posters__item-text
              | В течение длительного времени ученые пытались понять некоторые основополагающие принципы цветового зрения.
</template>

<style scoped lang="scss">
  .posters__item {
  display: inline-block;
  vertical-align: top;

  max-width: 167px;
  width: 100%;
  margin-right: 4.3%;
}

.posters__item:nth-child(n+5) {
  margin-right: 0;
}

.posters__item-text {
  color: #515666;
  font-size: 12px;
  line-height: 14px;
}

.posters__item-foto {
  display: block;

  height: 219px;
  width: 167px;
  margin-bottom: 10px;
}

.posters__item-foto-1 {
  background: url('../static/images/vaccine-wars.jpg') no-repeat center;
  background-size: contain;
}

.posters__item-foto-2 {
  background: url('../static/images/vaccine.jpg') no-repeat center;
  background-size: contain;
}

.posters__item-foto-3 {
  background: url('../static/images/mouth.jpg') no-repeat center;
  background-size: contain;
}

.posters__item-foto-4 {
  background: url('../static/images/pain.jpg') no-repeat center;
  background-size: contain;
}

.posters__item-foto-5 {
  background: url('../static/images/stress-brain.jpg') no-repeat center;
  background-size: contain;
}

.posters__item-foto-6 {
  background: url('../static/images/mikrobiom-intestines.jpg') no-repeat center;
  background-size: contain;
}

.posters__item-foto-7 {
  background: url('../static/images/darkside.jpg') no-repeat center;
  background-size: contain;
}

.posters__item-foto-8 {
  background: url('../static/images/womb.jpg') no-repeat center;
  background-size: contain;
}

.posters__item-foto-9 {
  background: url('../static/images/crisp.jpg') no-repeat center;
  background-size: contain;
}

.posters__item-foto-10 {
  background: url('../static/images/nay_2.jpg') no-repeat center;
  background-size: contain;
}

.posters__item-foto-11 {
  background: url('../static/images/scince-rich.jpg') no-repeat center;
  background-size: contain;
}

.posters__item-foto-12 {
  background: url('../static/images/eye.jpg') no-repeat center;
  background-size: contain;
}

.posters__wrapper {
  padding-top: 27px;
  padding-bottom: 18px;
}

.posters__item-data {
  position: relative;

  display: inline-block;
  margin-bottom: 12px;

  font-family: LucidaGrande-Bold;
  font-size: 12px;
  line-height: 15px;
}

.posters__item-data::after {
  content: '';
  position: absolute;
  height: 9px;
  width: 9px;
  background-color: #0EA4FB;
  border-radius: 50%;
  right: -15px;
  top: 3px;
}

.main-surgery .container {
  padding: 0 115px;
}

</style>

