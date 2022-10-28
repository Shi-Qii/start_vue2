<template>
  <div class="container">
    {{reactiveDemo.key}}
  </div>
</template>

<script>
import {reactive, ref} from "@vue/composition-api/dist/vue-composition-api";

export default {
  name: "ErrorPage",
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