<template>
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
    <el-table-column prop="delTime" label="delTime" width="120" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <el-button type="text" size="small" @click="shwoDetail(scope.row.id)"
          >Detail</el-button
        >
        <el-button type="text" size="small" @click="deleteRow(scope.row.id)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="paging">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      v-model:current-page="currentPage"
    >
    </el-pagination>
  </div>
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
            tableData.data = []; //现将数组置空
            tableData.data.push(...result.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (e) {//抛出错误，弹窗
        ElMessageBox.alert(获取数据失败, "error", {
          type: "error",
          confirmButtonText: "确认",
        });
      }
    }
    //展示彩虹屁详情
    function shwoDetail(id) {//参数为传来的某行数据id
      currentRainbowFart = tableData.data.find((item) => {
        return item.id == id;
      });
      ElMessageBox.alert(currentRainbowFart.sentence, "彩虹屁详情", {
        confirmButtonText: "确认",
      });
    }

    function deleteRow(id){
      deleteSentence(id).then((result) => {
        console.log(result)
      }).catch((err) => {
        
      });
    }

    return {
      currentPage,
      tableData,
      shwoDetail,
      deleteRow,
      getAllRainbowFart,
    };
  },
};
</script>
<style scoped>
.paging {
  display: flex;
  justify-content: center;
}
</style>