<template>
  <div>
    <nav class="navbar navbar-expand NavBar_shi">
      <!--      <a class="navbar-brand">預留網站名字</a>-->
      <a class="navbar-brand"></a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item   ">
          <router-link to="/ProjectHome" class="nav-link">
            <font-awesome-icon class="TheSameFontColor" icon="home"/>
            <a class="TheSameFontColor">主頁</a>
          </router-link>
        </li>
        <li class="nav-item mt-1">
          <b-button pill size="sm" variant="outline-secondary" v-b-toggle.sidebar-1>各項選單</b-button>
        </li>
      </div>

      <div class="navbar-nav ml-auto">

        <li class="nav-item dropdown mt-1 mr-1">

          <b-button pill size="sm" variant="outline-secondary" v-b-toggle.sidebar-person>
            <b-icon v-if="false" icon=" person-lines-fill"></b-icon>
            個人中心
          </b-button>
        </li>
        <li class="nav-item ">
          <a class="nav-link TheSameFontColor">
            <font-awesome-icon icon="sign-out-alt"/>
            LogOut
          </a>
        </li>
      </div>

    </nav>
  </div>
</template>

<script>
export default {
  name: "navBarMenu"
}
</script>

<style>
.NavBar_shi {
  background-color: #fdbdd3   !important;
  box-shadow: none;
  border-bottom: 1px solid #ddd;
}

.TheSameFontColor {
  color: #66615B;
}

</style>