<template>
  <div>

    <!--上面**各項選單項目新增-->
    <NavBarMenu></NavBarMenu>

    <!--左邊**各項選單項目新增-->
    <SideBarMenu/>
    <SideBarPersonMenu/>
    <!--中間**主畫面通過左邊或上面、各項選單連結跳頁-->
    <div class=" col-12">
      <router-view/>
    </div>


  </div>
</template>

<script>
import NavBarMenu from './menu/NavBarMenu.vue'
import SideBarMenu from './menu/SideBarMenu.vue'
import SideBarPersonMenu from './menu/SideBarPersonMenu.vue'
import {reactive, ref} from "@vue/composition-api";

export default {
  name: "mainPage",
  components: {
    NavBarMenu, SideBarMenu, SideBarPersonMenu
  },
  setup() {

    const refDemo = ref('i am a ref');
    const reactiveDemo = reactive({'key': 'i am a reactiveDemo'});

    return {
      refDemo, reactiveDemo
    };
  }
}
</script>

<style scoped>

</style>