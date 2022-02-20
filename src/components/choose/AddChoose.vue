<template>
  <div class="form">

    <el-form :model="formInline" class="demo-form-inline" label-width="100px">
      <el-form-item label="前缀快选">
        <el-select v-model="formInline.prefix" placeholder="前缀">
          <el-option
              v-for="item in prefixs"
              :label="item"
              :value="item"
              :key="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="前缀">
        <el-input
            v-model="formInline.prefix"
            placeholder="前缀"
            class="input"
        ></el-input>
      </el-form-item>

      <el-form-item label="内容">
        <el-input
            v-model="formInline.content"
            :rows="2"
            type="textarea"
            placeholder="内容"
            class="text_area"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {onBeforeMount, reactive, ref} from "vue";
import {Choose} from "./Choose";
import { ElMessage } from 'element-plus'
import {getAllPrefix,insertChoose} from "../../network/Choose";

export default {
  setup() {
    onBeforeMount(()=>{
      getAllPrefix().then(res=>{
         prefixs.value= res.data
      }).catch(err=>{
        console.log(err)
      })
    })
    const formInline = reactive({
      prefix: null,
      content: null,
    });
    //前缀列表
    const prefixs = ref([]);
    //提交事件
    function onSubmit() {
      const choose = new Choose();
      choose.prefix=formInline.prefix
      choose.content = formInline.content
      //调用接口
      insertChoose(choose)
          .then((result) => {
            if (result.code === 1) {
              ElMessage({
                message: "添加成功",
                type: "success",
              });
              formInline.author=null
              formInline.sentence=null
              console.log(result)
            }
          })
          .catch((err) => {
            ElMessage({
              message: "添加失败，检查网络原因或联系大笨峰",
              type: "error",
            });
          });
    }
    return {
      formInline,
      onSubmit,
      prefixs
    };
  },
};
</script>

<style scoped>
.input {
  width: 200px;
}
.text_area {
  width: 300px;
}
.form {
  margin-top: 10%;
  display: flex;
  justify-content: center;
}
</style>