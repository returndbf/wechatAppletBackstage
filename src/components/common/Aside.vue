<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-scrollbar>
        <el-menu :default-openeds="['1']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><message /></el-icon>做个决定
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="chooseContentManage">内容管理</el-menu-item>
              <el-menu-item index="1-2" @click="addChoose">内容添加</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu /></el-icon>彩虹屁
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" @click="rainbowFartManage">内容管理</el-menu-item>
              <el-menu-item index="2-2" @click="addRainbowFart">内容添加</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><setting /></el-icon>日志
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="blogManage">内容管理</el-menu-item>
              <el-menu-item index="3-2">没有了</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
</template>

<script>
import { Message, Menu as IconMenu, Setting } from "@element-plus/icons-vue";
import router from "../../router/index.js"
export default {
  components:{
    Message,
    IconMenu,
    Setting
  },
  setup(){
    function chooseContentManage(){
      router.push({ path: '/main/chooseManage' })
    }
    function addChoose(){
       router.push({ path: '/main/addChoose' })
    }
    function rainbowFartManage(){
      router.push({path:'/main/rainbowFartManage'})
    }
    function addRainbowFart(){
      router.push({path:'/main/addRainbowFart'})
    }
    function blogManage(){
      router.push({path:'/main/blogManage'})
    }
    return{
      chooseContentManage,
      addChoose,
      rainbowFartManage,
      addRainbowFart,
      blogManage
    }
  }
}
</script>

<style>
.layout-container-demo .el-aside {
  width: 240px;
  color: var(--el-text-color-primary);
  background: #fff !important;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}
</style>