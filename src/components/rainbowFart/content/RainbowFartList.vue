<template>
<!--  表格-->
  <el-table :data="tableData.data" stripe style="width: 100%">
    <el-table-column prop="id" label="Id" width="50" />
    <el-table-column prop="addTime" label="addTime" width="200" />
    <el-table-column prop="adder" label="adder" width="120" />
    <el-table-column
      show-overflow-tooltip
      prop="author"
      label="author"
      width="120"
    />
    <el-table-column
      show-overflow-tooltip
      prop="sentence"
      label="sentence"
      width="500"
    />
    <el-table-column prop="delFlag" label="delFlag" width="120" />
    <el-table-column prop="deleteTime" label="delTime" width="120" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <el-button type="text" size="small" @click="showDetail(scope.row.id)"
          >Detail</el-button
        >
        <el-button type="text" size="small" @click="deleteConfirm(scope.row.id)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
<!--  分页组件-->
  <div class="paging">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      v-model:current-page="currentPage"
    >
    </el-pagination>
  </div>
<!--  确认删除弹窗-->
  <el-dialog
      v-model="confirmDeleteDialog"
      title="确认删除吗?"
      width="30%"
  >
    <span>删除之后想反悔只能联系大笨峰恢复</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="confirmDeleteDialog = false">我手误了</el-button>
        <el-button type="primary" @click="deleteRow"
        >狠心确认</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { reactive, ref, watch, onMounted } from "vue";
import { getSentence,deleteSentence } from "../../../network/RainbowFart.js";
import { RainbowFart } from "../RainbowFart";
import { ElMessageBox, ElMessage } from "element-plus";
export default {
  setup() {
    onMounted(() => {
      getAllRainbowFart();
    });
    //控制确认删除弹窗是否显示
    let confirmDeleteDialog = ref(false)

    //需要删除的数据id
    let deleteId = ref(0)

    //表格数据
    let tableData = reactive({ data: [] });

    //需要展示详情的彩虹屁
    let currentRainbowFart = "";

    //分页相关
    let currentPage = ref(1); //页码
    //监听当前分页页码变化
    watch(currentPage, (newPage, oldPage) => {
      console.log(newPage, oldPage);
      // getSentence(newPage)
      getAllRainbowFart();
    });

    //获取所有彩虹屁数据
    function getAllRainbowFart() {
      try {
        getSentence(currentPage.value)
          .then((result) => {
            tableData.data = []; //先将数组置空
            tableData.data.push(...result.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (e) {//抛出错误，弹窗
        ElMessageBox.alert("获取数据失败", "error", {
          type: "error",
          confirmButtonText: "确认",
        });
      }
    }
    //展示彩虹屁详情
    function showDetail(id) {//参数为传来的某行数据id
      currentRainbowFart = tableData.data.find((item) => {
        return item.id == id;
      });
      ElMessageBox.alert(currentRainbowFart.sentence, "彩虹屁详情", {
        confirmButtonText: "确认",
      });
    }
   //删除确认?弹出弹窗
    function deleteConfirm(id){
      confirmDeleteDialog.value = true
      deleteId = id
    }
    function deleteRow(){
      deleteSentence(deleteId).then((result) => {
        getAllRainbowFart()
        confirmDeleteDialog.value = false
      }).catch((err) => {
      });
    }

    return {
      currentPage,
      tableData,
      showDetail,
      deleteConfirm,
      getAllRainbowFart,
      confirmDeleteDialog,
      deleteRow
    };
  },
};
</script>
<style scoped>
.paging {
  display: flex;
  justify-content: center;
}
.el-pagination{
  position: absolute;
  bottom: 10px;
}
</style>