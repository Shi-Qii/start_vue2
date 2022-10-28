<template>
  <div class="container">
  </div>
</template>

<script>
import {reactive, ref} from "@vue/composition-api/dist/vue-composition-api";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "HomePage",
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