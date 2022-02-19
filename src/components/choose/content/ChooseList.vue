<template>
  <!--  下拉框-->
  <div>
    <el-select v-model="currentPrefix" placeholder="Select" size="large">
      <el-option
          v-for="item in prefixs"
          :key="item"
          :label="item"
          :value="item"
      >
      </el-option>
    </el-select>
  </div>
  <!--  展示选中列表-->
  <div>
    <el-table :data="chooses" style="width: 100%" max-height="400">
      <el-table-column prop="id" label="id"/>
      <el-table-column prop="prefix" label="prefix"/>
      <el-table-column prop="content" label="content"/>
      <el-table-column prop="delFlag" label="delFlag"/>
      <el-table-column fixed="right" label="Operations">
        <template #default="scope">
          <el-button
              type="text"
              size="small"
              @click.prevent="showDetail(scope.row.id)"
          >
            Detail
          </el-button>
          <el-button
              type="text"
              size="small"
              @click.prevent="deleteConfirm(scope.row.id)"
          >
            Remove
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <!--  删除弹窗-->
  <div>
    <el-dialog
        v-model="showDeleteDialog"
        title="确认删除吗?"
        width="30%"
    >
      <span>劝你三思</span>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="showDeleteDialog = false">我手误了</el-button>
        <el-button type="primary" @click="deleteChoose"
        >狠心确认</el-button
        >
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import {reactive, onMounted, ref, watch, onBeforeMount} from "vue";
import {getAllPrefix, getChooseByPrefix, delChoose} from "../../../network/Choose";
import {Choose} from "../Choose";
import {ElMessageBox} from "element-plus";

export default {
  setup() {
    //dom挂载
    onBeforeMount(() => {
      getAllPrefixs()
      getAllChooseBySelect()
    })
    //当前选择的前缀
    let currentPrefix = ref("我要学习")
    //所有的前缀列表数据
    const prefixs = ref([])

    //获取所有的前缀放到下拉框
    function getAllPrefixs() {
      getAllPrefix().then(res => {
        console.log(res)
        prefixs.value = res.data
      }).catch(err => {
        console.log(err)
      })
    }

    //监听选择改变
    watch(currentPrefix, (a, b) => {
      console.log(a)
      getAllChooseBySelect()
    })


//*************************************以上为下拉列表框数据******************************
    //当前展示的所有choose
    const chooses = ref([]);
    //选中detail的choose
    let currentChoose = null
    //准备删除的choose的id
    let deleteChooseId = 0
    //删除弹窗展示
    let showDeleteDialog = ref(false)

    //展示choose详情
    function showDetail(id) {
      currentChoose = chooses.value.find(item => {
        return item.id == id
      })
      ElMessageBox.alert(currentChoose.prefix + currentChoose.content, "决定详情", {
        confirmButtonText: "确认",
      });
    }

    //删除一个choose
    function deleteConfirm(id) {
      deleteChooseId = id
      showDeleteDialog.value = true
    }

    function deleteChoose() {
      delChoose(deleteChooseId).then(res => {
        getAllChooseBySelect()
        showDeleteDialog.value = false
        console.log(res);
      }).catch(err => {

      })
    }


    //选择的前缀数据获取
    function getAllChooseBySelect() {
      return getChooseByPrefix(currentPrefix.value).then(res => {
        console.log(res.data);
        chooses.value = res.data
      }).catch(err => {
        console.log(err)
      })
    }

    return {
      currentPrefix,
      prefixs,
      chooses,
      showDetail,
      deleteChooseId,
      showDeleteDialog,
      deleteConfirm,
      deleteChoose

    };
  },
};
</script>
<style scoped>

</style>