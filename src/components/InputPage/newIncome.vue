<template>
  <div>
    <b-container>
      <div  class=" row  pt-3  pb-3  justify-content-md-center">


          <b-col class="col-md-6  " style="background-color: white; " >
            <font-awesome-icon icon="fa-sharp fa-solid fa-coins" />
            新增收入
            <b-form  class="mt-3 mb-3" @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                  id="input-group-1"
                  label="金額"
                  label-for="input-1"
                  description="輸入金額"
              >
                <b-form-input
                    id="input-1"
                    v-model="form.amount"
                ></b-form-input>
              </b-form-group>
              <b-form-group v-if="false" id="input-group-2" label="類型" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.type"
                    placeholder="Enter name"
                    required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label="類型" label-for="input-3">
                <b-form-select
                    id="input-3"
                    v-model="form.category"
                    :options="category"
                    required
                ></b-form-select>
              </b-form-group>
              <b-form-group id="input-group-2" label="日期" label-for="input-2">
                <b-form-datepicker id="example-datepicker" v-model="form.datepicker" class="mb-2"></b-form-datepicker>
              </b-form-group>
              <b-form-group id="input-group-2" label="備註" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.remark"
                    placeholder="備註"
                    required
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" pill variant="outline-secondary">Submit</b-button>
              <b-button type="reset" pill variant="outline-danger">Reset</b-button>
            </b-form>

          </b-col>
        </div>


    </b-container>
  </div>

</template>

<script>

import {reactive, ref} from "@vue/composition-api/dist/vue-composition-api";

export default {
  name: "newIncome",
  setup() {
    const form = reactive({
      amount: '',
      type: '',
      category: null,
      remark: '',
      datepicker: ''
    })
    const show = ref(true);
    const category = ref([
      {text: 'Please select an option', value: null},
      {text: '衣服', value: null},
      {text: '伙食', value: null},
      {text: '日用品', value: null},
      {text: '交通', value: null},
      {text: '交際', value: null},
      {text: '其他', value: null},
    ]);


    const onSubmit = () => {

    }
    const onReset = () => {
    }

    return {
      category, form, show, onReset, onSubmit
    }

  }
}
</script>

<style scoped>

</style>