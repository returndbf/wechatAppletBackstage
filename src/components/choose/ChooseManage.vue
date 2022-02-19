<template>
  <choose-list></choose-list>
</template>

<script>
import ChooseList from './content/ChooseList.vue'
import {ref, reactive, onMounted, watch} from "vue";
import {getChooseByPrefix,getAllPrefix,delChoose} from "../../network/Choose";

export default {
  components:{
    ChooseList
  },
  setup(){

  }
}
</script>

<style>

</style>