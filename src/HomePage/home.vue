<template>
  <div class="container">
    <b-form-tags v-model="tagsValue" no-outer-focus class="mb-2">
      <template v-slot="{ tags, inputAttrs, inputHandlers,  addTag, removeTag }">
        <b-input-group class="mb-2">
          <b-form-input
              v-bind="inputAttrs"
              v-on="inputHandlers"
              placeholder="New tag - Press enter to add"
              class="form-control"
          ></b-form-input>
          <b-input-group-append>
            <b-button @click="addTag()" variant="primary">Add</b-button>
          </b-input-group-append>
        </b-input-group>
        <div class="d-inline-block" style="font-size: 1.5rem;">
          <b-form-tag
              v-for="tag in tags"
              @remove="removeTag(tag)"
              :key="tag"
              :title="tag"
              variant="primary"
              class="mr-1"
          >{{ tag }}</b-form-tag>
        </div>
      </template>
    </b-form-tags>  </div>
</template>

<script>
import {reactive, ref} from "@vue/composition-api/dist/vue-composition-api";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "HomePage",
  setup() {
    const tagsValue = ref(['apple', 'orange', 'banana']);
    const refDemo = ref('i am a ref');
    const reactiveDemo = reactive({'key': 'i am a reactiveDemo'});

    return {
      refDemo, reactiveDemo,tagsValue
    };
  }
}
</script>

<style scoped>

</style>