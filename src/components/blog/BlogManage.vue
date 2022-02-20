<template>
  <div>
    <el-table :data="currentBlogs" stripe style="width: 100%">
      <template v-for="(value,key,index) in blog">
        <el-table-column show-overflow-tooltip v-bind:prop="key" v-bind:label="key" width="150"/>
      </template>

      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button type="text" size="small" @click="showDetail(scope.row.id)">Detail</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
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
  <div>
    <el-dialog v-model="showCurrentBlog" title="日志详情">
      <h1>{{currentBlog.data.title}}</h1>

      <p>{{currentBlog.data.content}}</p>

      <img v-if="currentBlog.data.img" :src="currentBlog.data.img" class="image">

    </el-dialog>
  </div>
</template>

<script>
import {onBeforeMount, reactive, watch, ref, toRef} from "vue";
import {Blog} from "./Blog";
import {getAllBlogs} from "../../network/Blog";
import {ElMessageBox} from "element-plus";

export default {
  setup() {
    onBeforeMount(() => {
      getAllBlogs().then(res => {
        console.log(res)
        blogs.data = res.data
        currentBlogs.value = blogs.data.slice(0, 8)
      }).catch(err => {
        console.log(err);
      })
    })
    //列表数据
    let blogs = reactive({data: []});
    //遍历属性用
    let blog = new Blog();
    //当前页码
    let currentPage = ref(1)
    //当前页面数据
    let currentBlogs = ref([])
    //当前选择的blog
    let currentBlog = reactive({data:{}})
    //当前选择是否展示
    let showCurrentBlog = ref(false)
    //监听页码改变
    watch(currentPage, (a, b) => {
      currentBlogs.value = blogs.data.slice((a - 1) * 8, a * 8)
      currentBlog.data={a:5}
      console.log(currentBlog.data,currentPage)

    }, {immediate: true})

    //展示详情
    function showDetail(id) {

      currentBlog.data =currentBlogs.value.find(item => {
        return item.id === id
      })

      showCurrentBlog.value = true
      console.log(currentBlog);
    }
    return {
      blogs,
      blog,
      currentPage,
      currentBlog,
      currentBlogs,
      showDetail,
      showCurrentBlog
    }
  }

}
</script>

<style scoped>
.el-table {
  max-height: 100%;
}

.paging {
  display: flex;
  justify-content: center;

}

.el-pagination {
  position: absolute;
  bottom: 10px;
}
.image{
  width: 50%;
  height: 50%;
  max-height: 50%;
  max-width: 50%;
  vertical-align: top;
}
h1{
text-align: center;
  margin-bottom: 10px;
}
p{
  white-space: pre-line;
}
</style>