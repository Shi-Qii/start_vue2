<template>
  <div id="app" >
    <MainPage/>

  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'
import {onMounted} from "@vue/composition-api/dist/vue-composition-api";

export default {
  name: 'App',
  components: {
    MainPage
  },setup() {
    onMounted(()=>{
      document.getElementsByTagName("body")[0].className = "main_bg";
    })

    return {
    };
  }
}
</script>

<style>
.main_bg {
  background-color: #f4f3ef;
}
</style>
