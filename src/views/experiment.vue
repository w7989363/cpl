<template>
  <div>
    <div class="control-form">
      <div class="form-item">
        <el-input type="text" placeholder="请输入编号" v-model="user" size="mini" :disabled="inputDisabled">
          <template #prepend>编号：</template>
        </el-input>
      </div>
      <div class="form-item">
        <el-button @click="btnHandler" size="small">{{btnName}}</el-button>
        <el-button @click="exportData" size="small">导出数据</el-button>
      </div>
      <div>
        <el-slider size="small" v-model="divWidth" :format-tooltip="formatSlider"></el-slider>
      </div>
    </div>

    <div class="container" :style="{fontSize: fontSize+'px', width: divWidth+'%'}">
      <p>什么是阿里云提货券？</p>
      <p>阿里云提货券是用于提取阿里云指定规格云产品的一种票据凭证的产品。目前提货券在阿里云官网和天猫旗舰店均有销售。每个提货券都对应着云产品的不同规格配置。用户购买该提货券后，在指定的有效期内可对提货券对应的云产品进行开通使用。提货券还具有转移功能。未使用的提货券能够被拥有者转移给其他阿里云用户。获得提货券的用户，可使用该提货券来开通对应的云产品。</p>
      <p>如何使用提货券？</p>
      <p>提货券分为两个步骤操作：1）购买提货券2）提货券开通云产品。</p>
      <p>如何购买提货券？</p>
      <p>目前可以通过天猫旗舰店和官网活动购买提货券。</p>
      <p>如何开通云产品？</p>
      <ul>
        <li>1）购买成功后，可登陆阿里云账号，访问提货券后台（控制台-费用中心-提货券）</li>
        <li>2）在有效期内的提货券，可点击右侧的“使用”，进行云产品的开通。提货券列表</li>
        <li>3）选择对应的云产品规格，进行产品开通。提货券开通后，不能再次使用。</li>
      </ul>
      <p>什么是提货券转移？</p>
      <p>对于可进行转移的提货券，券的所有者可以将该券转移给指定的阿里云账号。提货券转移之后，原所有人将不再有该券的使用权限。接收该提货券的账号可对该提货券进行开通。转移后的提货券有效期不会因为转移而发生改变。提货券仅可转移一次。转移后的提货券不可撤回，请谨慎操作。已经开通的提货券，不能再进行转移。</p>
      <p>提货券转移说明</p>
      <ul>
        <li>1、转移：提货券可被转移给任何一个阿里云账户，每张提货券只能被转移1次；</li>
        <li>2、有效期：以官网提货券上显示为准；</li>
        <li>3、核销：提货券仅且只能在阿里云官网核销，点击提货券“开通云产品”开始核销；一旦被核销，提货券所对应的产品即刻生效；</li>
        <li>4、费用：提货券转移所产生的费用，由买卖双方自由决定，与阿里云无关，阿里云不收取任何转移费用；</li>
        <li>5、发票：被转移后的提货券，阿里云不予以开发票，需由转让方出具发票；</li>
      </ul>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
import { saveAs } from 'file-saver'
import dayjs from 'dayjs'
export default {
  name: 'Experiment',
  data() {
    return {
      inputDisabled: false,
      states: {
        before: {
          btnName: '进入初始实验',
          handler: this.initExp,
          expType: '初始实验'
        },
        init: {
          btnName: '进入阅读实验',
          handler: this.readExp,
          expType: '初始实验'
        },
        read: {
          btnName: '结束实验',
          handler: this.endExp,
          expType: '阅读实验'
        }
      },
      status: 'before',
      divWidth: 100,
      fontSize: 14,
      user: '',
      fileData: {},
      startTime: ''
    }
  },
  computed: {
    btnName() {
      return this.states[this.status].btnName
    },
    btnHandler() {
      return this.states[this.status].handler
    },
    expType() {
      return this.states[this.status].expType
    }
  },
  watch:{
    divWidth() {
      this.debouncedResizeHandler()
    }
  },
  created() {
    this.debouncedResizeHandler = debounce(this.resizeHandler, 200)
  },
  methods: {
    // 开始实验
    initExp() {
      // 未填写编号
      if (!this.user) {
        alert('请输入编号')
        return
      }
      // 开始实验后不能修改编号
      this.inputDisabled = true
      // 注册该编号，重复的会覆盖
      this.fileData[this.user] = {
        [this.expType]: []
      }
      // 变更状态
      this.status = 'init'
      // 记录初始数据
      this.divWidth === 100 ? this.resizeHandler() : this.divWidth = 100
      this.startTime = new Date().getTime()
    },
    // 进入阅读实验
    readExp() {
      this.status = 'read'
      this.fileData[this.user][this.expType] = []
      this.resizeHandler()
    },
    // 结束实验
    endExp() {
      // 计算、记录实验时间
      let duration = new Date().getTime() - this.startTime
      this.fileData[this.user].duration = duration
      this.status = 'before'
      this.user = ''
      this.inputDisabled = false
      this.divWidth = 100
    },
    // 导出文件
    exportData() {
      let fileName = `${new Date()}.json`
      let data = JSON.stringify(this.fileData)
      let file = new File([data], fileName, {type: "text/plain;charset=utf-8"})
      saveAs(file)
      this.fileData = {}
    },
    // resize 回调，记录数据
    resizeHandler() {
      if (this.status === 'before') return
      let cpl = Math.round(document.querySelector('p:first-child').clientWidth / this.fontSize)
      this.fileData[this.user] && this.fileData[this.user][this.expType].push([
        this.fileData[this.user][this.expType].length + 1, 
        cpl,
        dayjs().format('YYYY年MM月DD日HH时mm分ss秒')
      ])
    },
    formatSlider(value) {
      return value + '%'
    }
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
.container {
  box-sizing: border-box;
  font-family: "SimSun";
  border: 1px solid black;
  padding: 10px;
  margin: 30px 0px;
  line-height: 1.5;
}
ul {
  list-style-type: none;
}
</style>
