<template>
  <div>
    <h2>视觉疲劳度量(按照描述词选择程度)</h2>
    <div class="form-item">
      <span>累：</span>
      <el-rate v-model="exhausion.lei" :max="10" />
    </div>
    <div class="form-item">
      <span>困：</span>
      <el-rate v-model="exhausion.kun" :max="10" />
    </div>
    <div class="form-item">
      <span>瞌睡：</span>
      <el-rate v-model="exhausion.keshui" :max="10" />
    </div>
    <div class="form-item">
      <span>疲乏：</span>
      <el-rate v-model="exhausion.pifa" :max="10" />
    </div>
    <div class="form-item">
      <span>筋疲力尽：</span>
      <el-rate v-model="exhausion.jinpilijin" :max="10" />
    </div>
    <div class="form-item">
      <span>精力充沛：</span>
      <el-rate v-model="exhausion.jinglichongpei" :max="10" />
    </div>
    <div class="form-item">
      <span>积极活跃：</span>
      <el-rate v-model="exhausion.jijihuoyue" :max="10" />
    </div>
    <div class="form-item">
      <span>精力旺盛：</span>
      <el-rate v-model="exhausion.jingliwangsheng" :max="10" />
    </div>
    <div class="form-item">
      <span>有效率：</span>
      <el-rate v-model="exhausion.youxiaolv" :max="10" />
    </div>
    <div class="form-item">
      <span>生气：</span>
      <el-rate v-model="exhausion.shengqi" :max="10" />
    </div>
    <div class="form-item">
      <span>疲倦：</span>
      <el-rate v-model="exhausion.pijuan" :max="10" />
    </div>
    <div class="form-item">
      <span>精疲力竭：</span>
      <el-rate v-model="exhausion.jingpilijie" :max="10" />
    </div>
    <div class="form-item">
      <span>集中精力费力：</span>
      <el-rate v-model="exhausion.jizhongjinglifeili" :max="10" />
    </div>
    <div class="form-item">
      <span>对话费力：</span>
      <el-rate v-model="exhausion.duihuafeili" :max="10" />
    </div>
    <div class="form-item">
      <span>想闭眼：</span>
      <el-rate v-model="exhausion.xiangbiyan" :max="10" />
    </div>
    <div class="form-item">
      <span>想躺下：</span>
      <el-rate v-model="exhausion.xiangtangxia" :max="10" />
    </div>
  </div>
</template>

<script>
export default {
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

<style lang="less">
  
</style>