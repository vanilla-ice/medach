<template lang="pug">
  .wrapper
    .header
      nuxt-link(to="/admin").logo
        img(src="~/static/images/logo.png")
    nuxt
</template>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

  .main-index {
    padding-bottom: 50px;
  }
  @import '../assets/normalize.css';
  @import '../assets/fonts.css';
  @import '../assets/settings.css';

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
</style>
