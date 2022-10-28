<template>
<div>
  <div class="col-2">
    <b-sidebar backdrop id="sidebar-1" title="選單" shadow>
      <div class="px-3 py-2">
        <b-dropdown Block id="dropdown-dropright" dropright text="xx功能" variant="primary" class="m-2 ">
          <b-dropdown-item>
            <router-link to="/">
              1-1
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/">
              1-2
            </router-link>
          </b-dropdown-item>

        </b-dropdown>
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

<style scoped>

</style>