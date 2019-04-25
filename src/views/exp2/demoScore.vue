<template>
  <div class="page">
    <div class="article-container">
      <Article :articleIndex="0" :demoIndex="currentIndex"/>
    </div>
    <span>为该版式打分</span>
    <el-rate class="rate" v-model="score" :max="10"></el-rate>
    <el-button size="mini" type="primary" @click="next()">{{btnText}}</el-button>
  </div>
</template>

<script>
// import ExhausionForm from '@/components/ExhausionForm'
import Article from '@/components/Article'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'demoScore',
  data() {
    return {
      currentIndex: 0,
      score: 1,
      demoScore: []
    }
  },
  computed: {
    ...mapGetters(['startIndex']),
    btnText() {
      if ((this.currentIndex + 1) % 8 === this.startIndex) {
        return '提交'
      } else {
        return '下一个'
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
  },
  methods: {
    ...mapActions(['saveDemoScore']),
    next() {
      this.demoScore[this.currentIndex] = this.score
      if (this.btnText === '提交') {
        // 保存数据到vuex
        this.saveDemoScore(this.demoScore)
        this.$router.push({name:'ReadAnswer'})
      } else {
        this.currentIndex = (this.currentIndex + 1) % 8
      }
      this.score = 1
    },
  },
  components: {
    Article
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
  border: 1px solid black;
  padding: 10px;
  margin: 30px 0px;
}
.rate {
  margin: 10px 0;
}
</style>
