<template>
  <div id="app">
    <HeaderComp/>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComponent.vue";
export default {
  name: "app",
  components:{
    HeaderComp
  } 
}
</script>

<style>
  body{
    margin: 0px;
    font-family: "Avenir",Arial, Helvetica, sans-serif;
    color: #234;
  }
  ul{
      list-style: none;
      padding: 0px;
      margin: 0px
  }

  a{
    font-weight: bold;
    color: #234;
    text-decoration: none;
  }
  /* para pegar só o item sem a home(sempre esta ativa) coloque exact */
  a.router-link-exact-active{
    color: #4b8;
  }

  .container{
    max-width: 800px;
    margin: 0 auto;
    padding: 20px
  }

  .v-enter{
    opacity: 0;
    transform: translate3d(-20px,0,0);
  }
  .v-enter-active{
    transition: all 0.3s;
  }
</style>
