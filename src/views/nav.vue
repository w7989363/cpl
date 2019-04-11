<template>
  <div>
    <el-button @click = "goTo('ResizeWidthExp')">调整宽度实验</el-button>
    <el-button @click = "goTo('AdjustCplExp')">调整cpl实验</el-button>
    <el-button @click = "goTo('Draw')">画图</el-button>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    goTo(name) {
      this.$router.push({ name: name })
    }
  }
}
</script>

<style>
</style>
