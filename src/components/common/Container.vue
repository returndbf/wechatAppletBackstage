<template>
  <el-container>
      <el-header style="text-align: right; font-size: 12px">
        
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
.layout-container-demo .el-header {
  position: relative;
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-main {
  padding: 0;
}
</style>