<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="Date" width="150" />
    <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="state" label="State" width="120" />
    <el-table-column
      show-overflow-tooltip
      prop="city"
      label="City"
      width="120"
    />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column prop="zip" label="Zip" width="120" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <el-button type="text" size="small" @click="getAllRainbowFart">Detail</el-button>
        <el-button type="text" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="paging">
    <el-pagination background layout="prev, pager, next" :total="1000" v-model:current-page="currentPage" >
    </el-pagination>
  </div>
</template>

<script>
import { reactive,ref ,watch} from "vue";
import { getHomeBanner } from "../../../network/RainbowFart.js";
export default {
  setup() {
    //分页相关
    let currentPage = ref(1)
    watch(currentPage,(newPage,oldPage)=>{
      console.log(newPage,oldPage)
    })
    //获取所有数据
    function getAllRainbowFart() {
      try {
        getHomeBanner()
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {});
      } catch (e) {
        console.error(e);
      }
    }
    function handleClick() {
      console.log(1);
    }
    //表格数据
    const tableData = reactive([
      {
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Angeles11111111111111111111111111111",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Home",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Office",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Home",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Office",
      },
    ]);
    return {
      currentPage,
      tableData,
      handleClick,
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