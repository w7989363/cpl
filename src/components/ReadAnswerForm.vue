<template>
  <div>
    <h2>问卷</h2>
    <div class="form-item">
      <span>视觉疲劳度：0 不疲劳，10 非常疲劳</span>
      <el-rate v-model="form.shijuepilao" :max="10" />
    </div>
    <div class="form-item">
      <span>文章版式美观度评分：0 非常差，10 非常好</span>
      <el-rate v-model="form.wenzhangmeiguan" :max="10" />
    </div>
    <div class="form-item">
      <span>工作负荷：0 非常小，10 非常大</span>
      <el-rate v-model="form.gongzuofuhe" :max="10" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => {
        return {
          shijuepilao: 0,
          wenzhangmeiguan: 0,
          gongzuofuhe: 0
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.form-item {
  margin-bottom: 20px;
}
</style>