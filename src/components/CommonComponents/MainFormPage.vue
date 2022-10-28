<template>
  <div>
    <div class="col-12 mt-3 ml-3 pt-3 pl-3 ">
      <div class="card card-user">
        <div class="card-header">
          <h5 class="card-title">新增品項頁面</h5>
        </div>
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-md-6 pr-1">
                <div class="form-group">
                  <label>商品編號</label>
                  <input type="text" class="form-control" placeholder="商品編號">
                </div>
              </div>
              <div class="col-md-6 px-1">
                <div class="form-group pl-3">
                  <label>狀態</label>
                  <div class="pl-3 pt-2">
                    <b-form-checkbox v-model="checked" name="check-button" switch>
                      是否打開 <b>(狀態: {{ checked ? 'YES' : 'NO' }})</b>
                    </b-form-checkbox>
                  </div>

                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label>商品名稱</label>
                  <input type="text" class="form-control" placeholder="商品名稱">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 pr-1">
                <div class="form-group">
                  <label>Tag</label>
                  <b-form-tags v-model="tagsValue">
                    <template v-slot="{ tags, inputAttrs, inputHandlers,  addTag, removeTag }">
                      <b-input-group class="mb-2">
                        <b-form-input
                            v-bind="inputAttrs"
                            v-on="inputHandlers"
                            placeholder="New tag - Press enter to add"
                            class=" col-12"
                        ></b-form-input>
                        <b-input-group-append>
                          <b-button @click="addTag()" variant="outline-secondary">Add</b-button>
                        </b-input-group-append>
                      </b-input-group>
                      <div class=" " style="font-size: 1.5rem;">
                        <b-form-tag
                            v-for="tag in tags"
                            @remove="removeTag(tag)"
                            :key="tag"
                            :title="tag"
                            variant="secondary"
                            class="mr-1"
                        >{{ tag }}
                        </b-form-tag>
                      </div>
                    </template>
                  </b-form-tags>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 pr-1">
                <div class="form-group">
                  <label>新增規格</label>
                  <div>
                    <b-button variant="outline-secondary" @click="addRow()">單</b-button>
                    <b-button variant="outline-secondary">批次</b-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 pr-1">
                <div class="form-group">
                  <label>規格</label>
                  <div>
                    <b-table
                        :items="tableObj.items"
                        :fields="tableObj.fields"
                        :sort-by.sync="tableObj.sortBy"
                        :sort-desc.sync="tableObj.sortDesc"
                        sort-icon-left
                        responsive="sm"
                    ></b-table>
                    <div>
                      Sorting By: <b>{{ tableObj.sortBy }}</b>, Sort Direction:
                      <b>{{ tableObj.sortDesc ? 'Descending' : 'Ascending' }}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {reactive, ref} from "@vue/composition-api/dist/vue-composition-api";

export default {
  name: "MainFormPage",
  setup() {
    const tagsValue = ref(['男生上衣', '個性', '襯衫']);
    const checked = ref(false);

    const tableObj = reactive({
      'items': [{isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'}],
      'fields': [
        {key: 'last_name', sortable: true},
        {key: 'first_name', sortable: true},
        {key: 'age', sortable: true},
        {key: 'isActive', sortable: false}
      ],
      'sortBy': 'age',
      'sortDesc': false

    })
    const addRow = () => {
      //後面補上畫面輸入匡對應回來物件，從這裡推近table
      tableObj.items.push({isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'}
      )
    }
    return {tagsValue, checked, tableObj, addRow}
  }
}
</script>

<style scoped>

</style>