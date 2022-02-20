<template>
  <div class="form">

    <el-form :model="user" class="demo-form-inline" label-width="100px">
      <el-form-item label="用户名">
        <el-input
            v-model="user.name"
            placeholder="用户名"
            class="input"
        ></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input
            v-model="user.password"
            placeholder="密码"
            type="password"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script setup>
import {reactive} from "vue";
import router from "../router";
import {ElMessage} from "element-plus";

const user = reactive({
  name: "",
  password: ""
})

function onSubmit() {
  if ((user.name == "小王" && user.password == "030914")||(user.name == "大笨峰" && user.password == "990919")) {
    localStorage.setItem("user", "login")
    router.push({path: '/main/chooseManage'})
  } else {
    ElMessage({
      message: "登录失败",
      type: "error",
    });
  }
  console.log(123)
}

</script>

<style scoped>
*{
  height:100% ;
}
.input {
  width: 250px;
}

.form {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.demo-form-inline{
  height: auto;
}
</style>