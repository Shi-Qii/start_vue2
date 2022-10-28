<template>
  <div class="col-2">
    <div>

      <b-sidebar id="sidebar-1" aria-modal="true" backdropprop="true" aria-label="Sidebar with custom footer" no-header shadow>
        <template #footer="{ hide }">
          <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
            <strong class="mr-auto"> </strong>
            <b-button size="sm" @click="hide">Close</b-button>
          </div>
        </template>
        <div class="px-3 py-2 side_Customize">
          <div>
            <ul class="nav mt-2" style="  display: block;">
              <li>
                <a href="./dashboard.html">
                  <i class="nc-icon nc-bank"></i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li>
                <a href="./icons.html">
                  <i class="nc-icon nc-diamond"></i>
                  <p>Icons</p>
                </a>
              </li>
              <li>
                <a href="./map.html">
                  <i class="nc-icon nc-pin-3"></i>
                  <p>Maps</p>
                </a>
              </li>
              <li>
                <a href="./notifications.html">
                  <i class="nc-icon nc-bell-55"></i>
                  <p>Notifications</p>
                </a>
              </li>
              <li class="active ">
                <a href="./user.html">
                  <i class="nc-icon nc-single-02"></i>
                  <p>User Profile</p>
                </a>
              </li>
              <li>
                <a href="./tables.html">
                  <i class="nc-icon nc-tile-56"></i>
                  <p>Table List</p>
                </a>
              </li>
              <li>
                <a href="./typography.html">
                  <i class="nc-icon nc-caps-small"></i>
                  <p>Typography</p>
                </a>
              </li>
              <li class="active-pro">
                <a href="./upgrade.html">
                  <i class="nc-icon nc-spaceship"></i>
                  <p>Upgrade to PRO</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBarMenu"
}
</script>

<style>
.side_Customize {
  position: relative;
  height: calc(95vh - 95px);
  overflow: auto;
  width: 260px;
  z-index: 4;
  padding-bottom: 100px;
}
.nav>li>a{
  color: #66615B;
}
</style>