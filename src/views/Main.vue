<template>
  <el-container
    class="layout-container-demo"
    style="height: 500px; border: 1px solid #eee"
  >
  
    <Aside></Aside>

    <Container>
        <router-view></router-view>
    </Container>

  </el-container>
</template>

<script>
import { ref } from "vue";
import Aside from '../components/common/Aside.vue';
import Container from '../components/common/Container.vue';
export default{
    components:{
        Aside,
        Container
    },
    setup(){
        
    }
}
</script>

<style scoped>

</style>
