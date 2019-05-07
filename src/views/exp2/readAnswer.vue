<template>
  <div class="page">
    <div class="article-container">
      <Article :articleIndex="currentIndex" :demoIndex="currentIndex"/>
    </div>
    
    <ReadAnswerForm :form.sync="form"></ReadAnswerForm>
    <el-button size="mini" type="primary" @click="next()">{{btnText}}</el-button>
  </div>
</template>

<script>
// import ExhausionForm from '@/components/ExhausionForm'
import Article from '@/components/Article'
import ReadAnswerForm from '@/components/ReadAnswerForm'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'demoScore',
  data() {
    return {
      form: {
        shijuepilao: 0,
        wenzhangmeiguan: 0,
        gongzuofuhe: 0
      },
      currentIndex: 0,
      articleForm: [],
      input: '',
      articleAnswer: [],
      startTime : '',
      articleTime: []
    }
  },
  computed: {
    ...mapGetters(['startIndex']),
    btnText() {
      if ((this.currentIndex + 1) % 8 === this.startIndex) {
        return '提交'
      } else {
        return '下一篇'
      }
    }
  },
  watch: {
    startIndex:{
      handler(newValue) {
        this.currentIndex = newValue
      },
      immediate: true
    },
  },
  created() {
    this.startTime = new Date().getTime()
  },
  methods: {
    ...mapActions(['saveReadAnswer']),
    resetForm() {
      this.form = {
        shijuepilao: 0,
        wenzhangmeiguan: 0,
        gongzuofuhe: 0
      }
    },
    next() {
      const duration = new Date().getTime() - this.startTime
      this.startTime = new Date().getTime()
      // TODO: push 文章答案
      this.articleForm[this.currentIndex] = {...this.form}
      this.articleAnswer[this.currentIndex] = this.input
      this.articleTime[this.currentIndex] = duration
      if (this.btnText === '提交') {
        // 保存数据到vuex
        this.saveReadAnswer({
          articleAnswer: this.articleAnswer,
          articleForm: this.articleForm,
          articleTime: this.articleTime
        })
        this.$router.push({name: 'EndInfo'})
      } else {
        this.currentIndex = (this.currentIndex + 1) % 8
      }
      this.resetForm()
    },
  },
  components: {
    Article,
    ReadAnswerForm
  }
}
</script>

<style lang="less">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.article-container {
  box-sizing: content-box;
  font-family: "SimSun";
  border-left: 1px solid #dfe2e5;
  border-right: 1px solid #dfe2e5;
  padding: 40px;
  margin: 30px 0px;
}
.rate {
  margin: 10px 0;
}
</style>
