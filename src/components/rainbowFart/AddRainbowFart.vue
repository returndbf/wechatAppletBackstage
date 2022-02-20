<template>
  <div class="form">
    <el-form :model="formInline" class="demo-form-inline" label-width="100px">
      <el-form-item label="句子作者">
        <el-input
          v-model="formInline.author"
          placeholder="句子作者"
          class="input"
        ></el-input>
      </el-form-item>
      <el-form-item label="添加者">
        <el-select v-model="formInline.adder" placeholder="添加者">
          <el-option
            v-for="item in adderList"
            :label="item.adder"
            :value="item.adder"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="彩虹屁">
        <el-input
          v-model="formInline.sentence"
          :rows="2"
          type="textarea"
          placeholder="输入彩虹屁"
          class="text_area"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { addSentence } from "../../network/RainbowFart";
import { RainbowFart } from "../../components/rainbowFart/RainbowFart";
import { ElMessage } from 'element-plus'
export default {
  setup() {
    const formInline = reactive({
      author: null,
      adder: null,
      sentence: null,
    });
    //添加者
    const adderList = ref([
      { id: 1, adder: "大笨峰" },
      { id: 2, adder: "小王" },
    ]);
    //提交事件
    function onSubmit() {
      const rainbowFart = new RainbowFart();
      rainbowFart.setAdder(formInline.adder);
      rainbowFart.setAuthor(formInline.author);
      rainbowFart.setSentence(formInline.sentence);
      //调用接口
      addSentence(rainbowFart)
        .then((result) => {
          if (result.code === 1) {
            ElMessage({
              message: "添加成功",
              type: "success",
            });
            formInline.author=null
            formInline.sentence=null
            console.log(result)
          }
        })
        .catch((err) => {
          ElMessage({
              message: "添加失败，检查网络原因或联系大笨峰",
              type: "error",
            });
        });
    }
    return {
      formInline,
      adderList,
      onSubmit,
    };
  },
};
</script>

<style scoped>
.input {
  width: 200px;
}
.text_area {
  width: 300px;
}
.form {
  margin-top: 10%;
  display: flex;
  justify-content: center;
}
</style>