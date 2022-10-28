<template>
<div>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <!--      <a class="navbar-brand">預留網站名字</a>-->
    <a class="navbar-brand"></a>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/stockHome" class="nav-link">
          <font-awesome-icon icon="home"/>
          test
        </router-link>
      </li>
      <li class="nav-item">
        <b-button v-b-toggle.sidebar-1>各項選單</b-button>
      </li>
    </div>

    <div class="navbar-nav ml-auto">

      <li class="nav-item dropdown">
        <h5
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
        >
          選單
          <!--          歡迎 {{ currentUser.username }} 到來-->
        </h5>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/profile">個人資料中心</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link">
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

<style scoped>

</style>