<template>
  <div class="page">
    <div class="control-form">
      <ExhausionForm :exhausion.sync="endPilao"></ExhausionForm>
      <div class="form-item" style="width:60%;">
        <el-button size="mini" type="primary" @click="ok()">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import ExhausionForm from '@/components/ExhausionForm'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'endInfo',
  data() {
    return {
      endPilao: {}
    }
  },
  created() {
    this.endPilao = {
      lei: 0,
      kun: 0,
      keshui: 0,
      pifa: 0,
      jinpilijin: 0,
      jinglichongpei: 0,
      jijihuoyue: 0,
      jingliwangsheng: 0,
      youxiaolv: 0,
      shengqi: 0,
      pijuan: 0,
      jingpilijie: 0,
      jizhongjinglifeili: 0,
      duihuafeili: 0,
      xiangbiyan: 0,
      xiangtangxia: 0
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(['saveEndInfo']),
    ok() {
      this.$message.success('感谢您的参与')
      this.saveEndInfo(this.endPilao)
      this.$router.go(-3)
    },
  },
  components: {
    ExhausionForm
  }
}
</script>

<style lang="less">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.control-form {
  font-size: 12px;
  width: 400px;
}
.form-item {
  line-height: 30px;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* align-items: center; */
}
.container {
  box-sizing: border-box;
  font-family: "SimSun";
  border: 1px solid black;
  padding: 10px;
  margin: 30px 0px;
}
</style>
