<template lang="pug">
  .data
    .data-text
      | ПОНЕДЕЛЬНИК 28/02/2017
      span.data__circle
</template>

<style scoped lang="scss">
.data {
  display: flex;
  align-items: center;

  margin-bottom: 36px;
  margin-top: 14px;
}


.data-text {
  position: relative;
  display: inline-block;
  margin: 0 auto;

  font-family: LucidaGrande-Bold;
  text-align: center;
}

.data__circle {
  position: absolute;
  left: -20px;
  top: 5px;

  width: 9px;
  height: 9px;
  background: #ff7e7e;
  border-radius: 50%;
}

</style>

