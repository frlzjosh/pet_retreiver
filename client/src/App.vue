<template>
<div>
<div class="header">
      <p class="header__title">Pet Retriever</p>
    </div>
  <div id="app">
    
    <router-view/>
</div>
</div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header{
  z-index: 1;
  background-color: #041436;
  position: fixed;
  height: 40px;
  width: 100%;
  top: 0;
  &__title{
    padding-top: 9px;
    padding-left: 10px;
    color: #FAFAFA;
    font-size: 1.5rem;
  }
}
</style>
