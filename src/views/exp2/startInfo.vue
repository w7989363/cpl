<template>
  <div class="page">
    <div class="control-form">
      <h1>基本信息</h1>
      <div class="form-item">
        <span>姓名：</span>
        <el-input type="text" placeholder="请输入姓名" v-model="personalInfo.name" size="mini">
        </el-input>
      </div>
      <div class="form-item">
        <span>编号：</span>
        <el-input type="text" placeholder="请输入编号" v-model="personalInfo.id" size="mini">
        </el-input>
      </div>
      <div class="form-item">
        <span>性别：</span>
        <el-radio-group size="small" v-model="personalInfo.gender">
          <el-radio-button label="男">男</el-radio-button>
          <el-radio-button label="女">女</el-radio-button>
        </el-radio-group>
      </div>
      <div class="form-item">
        <span>年龄：</span>
        <el-radio-group size="small" v-model="personalInfo.age">
          <el-radio-button label="25岁以下">25岁以下</el-radio-button>
          <el-radio-button label="26-35岁">26-35岁</el-radio-button>
          <el-radio-button label="36-45岁">36-45岁</el-radio-button>
          <el-radio-button label="45岁以上">45岁以上</el-radio-button>
        </el-radio-group>
      </div>
      <div class="form-item">
        <span>最高学历：</span>
        <el-radio-group size="small" v-model="personalInfo.education">
          <el-radio-button label="高中/中专及以下">高中/中专及以下</el-radio-button>
          <el-radio-button label="大专">大专</el-radio-button>
          <el-radio-button label="本科">本科</el-radio-button>
          <el-radio-button label="硕士及以上">硕士及以上</el-radio-button>
        </el-radio-group>
      </div>
      <div class="form-item">
        <span>专业：</span>
        <el-input type="text" placeholder="您的专业" v-model="personalInfo.major" size="mini">
        </el-input>
      </div>
      <div class="form-item">
        <span>职业：</span>
        <el-input type="text" placeholder="您的职业" v-model="personalInfo.job" size="mini">
        </el-input>
      </div>
      <div class="form-item">
        <span>阅读技术文档的频率：</span>
        <el-radio-group size="small" v-model="personalInfo.frequency">
          <el-radio-button label="每天">每天</el-radio-button>
          <el-radio-button label="每周">每周</el-radio-button>
          <el-radio-button label="每月">每月</el-radio-button>
          <el-radio-button label="每年">每年</el-radio-button>
        </el-radio-group>
      </div>
      <div class="form-item">
        <span>阅读技术文档的年限：</span>
        <el-radio-group size="small" v-model="personalInfo.readYear">
          <el-radio-button label="1年及以内">1年及以内</el-radio-button>
          <el-radio-button label="1~5年">1~5年</el-radio-button>
          <el-radio-button label="5~10年">5~10年</el-radio-button>
          <el-radio-button label="10年及以上">10年及以上</el-radio-button>
        </el-radio-group>
      </div>
      <ExhausionForm :exhausion.sync="startPilao"></ExhausionForm>
      <div class="form-item" style="width:60%;">
        <el-button size="mini" type="primary" @click="ok()" :disabled="btnDisabled">提交</el-button>
      </div>
    </div>
    <el-button class="export-btn" @click="exportData()">导出数据</el-button>
  </div>
</template>

<script>
import ExhausionForm from '@/components/ExhausionForm'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'startInfo',
  data() {
    return {
      personalInfo: {},
      startPilao: {}
    }
  },
  mounted() {
    this.setStartActicle()
    this.personalInfo = {
      name: '',
      id: '',
      gender: '男',
      age: '25岁以下',
      education: '高中/中专及以下',
      major: '',
      job: '',
      frequency: '每天',
      readYear: '1年及以内',
    }
    this.startPilao = {
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
    ...mapGetters(['exp2Data','startIndex']),
    btnDisabled() {
      return this.personalInfo.name === '' || this.personalInfo.id === '' || this.personalInfo.major === '' || this.personalInfo.job === ''
    }
  },
  methods: {
    ...mapActions(['setStartActicle', 'saveStartInfo']),
    ok() {
      this.saveStartInfo({
        personalInfo: this.personalInfo,
        startPilao: this.startPilao
      })
      this.$router.push({ name: 'DemoScore' })
    },
    exportData() {
      const fileName = `${new Date()}.json`
      const data = JSON.stringify(this.exp2Data)
      const file = new File([data], fileName, {type: "text/plain;charset=utf-8"})
      saveAs(file)
    },
  },
  components: {
    ExhausionForm
  }
}
</script>

<style lang="less">
.page {
  position: relative;
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
.export-btn {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
