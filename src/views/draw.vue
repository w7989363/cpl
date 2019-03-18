<template>
  <div>
    <div class="control-form">
      <div class="form-item">
        <el-upload
          class="upload-demo"
          action="#"
          :auto-upload="false"
          :on-change="fileHandler"
          :multiple="true"
          :show-file-list="false">
          <template #trigger><el-button size="small">导入数据</el-button></template>
          <el-button size="small" type="danger" @click="clearData">清空</el-button>
        </el-upload>
      </div>
      <ul>
        <li v-for="item in fileList">{{item}}</li>
      </ul>
      <div class="form-item">
        <el-select
          v-model="drawTarget"
          size="small">
          <el-option value="all"></el-option>
          <el-option v-for="(item, key) in fileData" :key="key" :value="key"></el-option>
        </el-select>
      </div>
    </div>
    <div ref="initChart"></div>
    <div ref="readChart"></div>
  </div>
</template>

<script>
// 部分引入 echarts
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legendScroll'

const expTypes = ['初始实验', '阅读实验']
export default {
  name: 'Draw',
  data() {
    return {
      fileList: [],
      fileData: {},
      drawTarget: 'all'
    }
  },
  computed: {
    initSeries() {
      return this.makeSeries(0)
    },
    readSeries() {
      return this.makeSeries(1)
    },
    initMin() {
      let min = Infinity
      this.initSeries.forEach(({data}) => {
        data.forEach(([x, y]) => {
          min = min < y ? min : y
        })
      })
      return min
    },
    readMin() {
      let min = Infinity
      this.readSeries.forEach(({data}) => {
        data.forEach(([x, y]) => {
          min = min < y ? min : y
        })
      })
      return min
    },
    legendData() {
      return this.drawTarget === 'all' ? Object.keys(this.fileData) : [this.drawTarget]
    }
  },
  mounted() {
    this.initChart = echarts.init(this.$refs.initChart)
    this.readChart = echarts.init(this.$refs.readChart)
  },
  watch: {
    initSeries: {
      handler() {
        this.initChart.clear()
        this.initChart.setOption(this.makeOption(0))
      },
      deep: true
    },
    readSeries: {
      handler() {
        this.readChart.clear()
        this.readChart.setOption(this.makeOption(1))
      },
      deep: true
    },
  },
  methods: {
    fileHandler(file, fileList) {
      if(!file) return
      let reader = new FileReader()
      reader.addEventListener('load', async (e) => {
        try {
          let data = JSON.parse(e.target.result)
          this.fileData = Object.assign({}, this.fileData, data)
          this.fileList.push(file.name)
        } catch (err) {
          console.log(`load JSON data error: ${err.message}`)
        }
      })
      reader.readAsText(file.raw)
    },
    clearData() {
      this.fileList = []
      this.fileData = {}
      this.drawTarget = 'all'
    },
    // 根据实验类型以及所选用户生成图表数据
    makeSeries(type) {
      let expType = expTypes[type]
      let ret = []
      if (this.drawTarget === 'all') {
        Object.keys(this.fileData).forEach(user => {
          ret.push({
            name: user,
            type: 'line',
            data: this.fileData[user][expType]
          })
        })
      }
      else {
        ret.push({
          name: this.drawTarget,
          type: 'line',
          data: this.fileData[this.drawTarget][expType]
        })
      }
      return ret
    },
    // 根据实验类型生成图表 option
    makeOption(type) {
      let expType = expTypes[type]
      return {
        title: {
          text: `${expType}cpl变化统计图`,
          y: 'bottom',
          x: 'center'
        },
        legend: {
          data: this.legendData
        },
        xAxis: {
          name: '调整次数',
          type: 'category',
          interval: 1
        },
        yAxis: {
          name: 'cpl',
          type: 'value',
          min: type === 0 ? this.initMin - 1 : this.readMin - 1,
          // interval: 1
        },
        series: type === 0 ? this.initSeries : this.readSeries,
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        toolbox: {
          right: 20,
          feature: {
            dataView: {},
            saveAsImage: {}
          }
        }
      }
    },
  }
}
</script>

<style>
.control-form {
  font-size: 12px;
  width: 400px;
}
.form-item {
  height: 30px;
  margin: 5px 0;
  display: flex;
  align-items: center;
}
#init-chart, #read-chart {
  width: 900px;
  height:600px;
  margin: 30px 0;
}
</style>
