<template>
  <el-container>
      <el-header style="text-align: right; font-size: 25px">
        <span class="manage">小王的后台管理系统</span>
      </el-header>

      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
</template>

<script>
export default {

}
</script>

<style>
.manage{
  float: left;
  line-height: 60px;
  color: #d3dcdc;
}
.layout-container-demo .el-header {
  position: relative;
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-main {
  padding: 0;
  overflow: hidden;
  position: relative;
}
</style>