<template>
  <div id="app">
    <MainPage/>
    <!--左邊**各項選單項目新增-->
    <SideBarMenu></SideBarMenu>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'
import SideBarMenu from './menu/SideBarMenu.vue'

export default {
  name: 'App',
  components: {
    MainPage,SideBarMenu
  }
}
</script>

<style>

</style>
