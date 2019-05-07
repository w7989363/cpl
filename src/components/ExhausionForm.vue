<template>
  <div>
    <h2>视觉疲劳度量</h2>
    <h3>0表示一点也不 10表示极其</h3>
    <div class="form-item">
      <div>累：</div>
      <el-rate show-score v-model="exhausion.lei" :max="10" />
    </div>
    <div class="form-item">
      <div>困：</div>
      <el-rate show-score v-model="exhausion.kun" :max="10" />
    </div>
    <div class="form-item">
      <div>瞌睡：</div>
      <el-rate show-score v-model="exhausion.keshui" :max="10" />
    </div>
    <div class="form-item">
      <div>疲乏：</div>
      <el-rate show-score v-model="exhausion.pifa" :max="10" />
    </div>
    <div class="form-item">
      <div>筋疲力尽：</div>
      <el-rate show-score v-model="exhausion.jinpilijin" :max="10" />
    </div>
    <div class="form-item">
      <div>精力充沛：</div>
      <el-rate show-score v-model="exhausion.jinglichongpei" :max="10" />
    </div>
    <div class="form-item">
      <div>积极活跃：</div>
      <el-rate show-score v-model="exhausion.jijihuoyue" :max="10" />
    </div>
    <div class="form-item">
      <div>精力旺盛：</div>
      <el-rate show-score v-model="exhausion.jingliwangsheng" :max="10" />
    </div>
    <div class="form-item">
      <div>有效率：</div>
      <el-rate show-score v-model="exhausion.youxiaolv" :max="10" />
    </div>
    <div class="form-item">
      <div>生气：</div>
      <el-rate show-score v-model="exhausion.shengqi" :max="10" />
    </div>
    <div class="form-item">
      <div>疲倦：</div>
      <el-rate show-score v-model="exhausion.pijuan" :max="10" />
    </div>
    <div class="form-item">
      <div>精疲力竭：</div>
      <el-rate show-score v-model="exhausion.jingpilijie" :max="10" />
    </div>
    <div class="form-item">
      <div>集中精力费力：</div>
      <el-rate show-score v-model="exhausion.jizhongjinglifeili" :max="10" />
    </div>
    <div class="form-item">
      <div>对话费力：</div>
      <el-rate show-score v-model="exhausion.duihuafeili" :max="10" />
    </div>
    <div class="form-item">
      <div>想闭眼：</div>
      <el-rate show-score v-model="exhausion.xiangbiyan" :max="10" />
    </div>
    <div class="form-item">
      <div>想躺下：</div>
      <el-rate show-score v-model="exhausion.xiangtangxia" :max="10" />
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     iconClasses: 
  //   }
  // },
  props: {
    exhausion: {
      type: Object,
      default: () => {
        return {
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
      }
    }
  }
}
</script>

<style lang="less" scoped>
.form-item {
  margin-bottom: 15px;
  div:first-child {
    margin-bottom: 5px;
  }
}
</style>