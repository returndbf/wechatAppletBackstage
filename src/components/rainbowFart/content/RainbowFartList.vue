<template>
  <el-table :data="tableData.data" stripe style="width: 100%">
    <el-table-column prop="id" label="Id1" width="150"/>
    <el-table-column prop="addTime" label="addTime" width="120"/>
    <el-table-column prop="adder" label="adder" width="120"/>
    <el-table-column
        show-overflow-tooltip
        prop="author"
        label="author"
        width="120"
    />
    <el-table-column prop="sentence" label="sentence" width="500"/>
    <el-table-column prop="delFlag" label="delFlag" width="120"/>
    <el-table-column prop="delTime" label="delTime" width="120"/>
    <el-table-column fixed="right" label="Operations" width="120">

      <template #default>
        <el-button type="text" size="small" @click="getAllRainbowFart">Detail</el-button>
        <el-button type="text" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="paging">
    <el-pagination background layout="prev, pager, next" :total="1000" v-model:current-page="currentPage">
    </el-pagination>
  </div>
</template>

<script>
import {reactive, ref, watch,onMounted} from "vue";
import {getSentence} from "../../../network/RainbowFart.js";
import {RainbowFart} from "../RainbowFart";

export default {
  setup() {
    onMounted(()=> {
      getAllRainbowFart()
    }
  )

    //分页相关
    let currentPage = ref(1)//页码
    //监听当前分页页码变化
    watch(currentPage, (newPage, oldPage) => {
      console.log(newPage, oldPage)
     // getSentence(newPage)
      getAllRainbowFart()
    })

    //获取所有彩虹屁数据
    function getAllRainbowFart() {
      try {
        getSentence(currentPage.value)
            .then((result) => {
              console.log(result.data);
              tableData.data=[]
              tableData.data.push(...result.data)
            })
            .catch((err) => {
              console.log(err)
            });
      } catch (e) {
        console.error(e);
      }
    }

    function handleClick() {
      console.log(1);
    }

    //表格数据
    let tableData = reactive({data:[]});
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