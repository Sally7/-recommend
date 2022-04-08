<template>
  <div class="content">
    <p>意见或建议</p>
    <table>
      <tr>
        <td class="title">意见建议 :</td>
        <td class="td-ad-text"><textarea v-model="params.advice" maxlength="2000" class="ad-text"></textarea></td>
      </tr>
      <tr>
        <td class="title">部门 :</td>
        <td class="td-input"><input v-model="params.depart"  maxlength="20"  class="input-text"/></td>
      </tr>
      <tr>
        <td class="title"   maxlength="10">建议人 :</td>
        <td class="td-input"><input v-model="params.suggestPeople" class="input-text"/>(便于联系解决)</td>
        <td class="title">联系电话 :</td>
        <td><input v-model="params.phone" maxlength="11"/></td>
      </tr>
      <tr>
        <td class="title">验证码 :</td>
        <td><input v-model="params.code"/></td>
        <div class="ValidCode disabled-select" :style="`width:${width}; height:${height}`" @click="refreshCode">
          <span v-for="(item, index) in codeList" :key="index" :style="getStyle(item)">{{ item.code }}</span>
        </div>
      </tr>
      <tr class="sub-button">
        <el-button type="primary" @click="submit">发表建议</el-button>
      </tr>
    </table>
  </div>
</template>

<script>
import {addSuggestions} from '../api/index'
export default {
  name: "index",
  props: {
    width: {
      type: String,
      default: '100px'
    },
    height: {
      type: String,
      default: '34px'
    },
    length: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      codeList:[],
      codeInfo:[],
      params: {
        depart: '',
        suggestPeople: '',
        advice: '',
        phone: '',
        code:''
      }
    }
  },
  created() {
    this.createdCode()
  },
  methods: {
    async submit(){
      if(this.verifyInfo()){
        let res = await addSuggestions(this.params)
        if(res.data==1){
          this.$message('提交成功')
        }
      }

    },
    verifyInfo(){
      console.log(this.codeInfo,this.params.code,this.codeInfo.join(''))
      if(this.params.code.toLowerCase !=this.codeInfo.join('').toLowerCase){
        this.$message.error('请输入正确的验证码')
        return
      }
      if(this.params.advice==''){
        this.$message.error('建议不得为空')
        return
      }
      if(this.params.depart==''){
        this.$message.error('部门不得为空')
        return
      }
      if(this.params.suggestPeople==''){
        this.$message.error('建议人不得为空')
        return
      }
      if(this.params.phone==''){
        this.$message.error('联系方式不得为空')
        return
      }else {
        if(!(/^1[0-9]{10}$/.test(this.params.phone))){
          this.$message.error('请输入正确的手机号')
          return
        }
      }
      return true
    },
    refreshCode() {
      this.createdCode()
    },
    createdCode() {
      const len = this.length
      const codeList = []
      const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789'
      const charsLen = chars.length
      // 生成
      for (let i = 0; i < len; i++) {
        const rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)]
        codeList.push({
          code: chars.charAt(Math.floor(Math.random() * charsLen)),
          color: `rgb(${rgb})`,
          fontSize: `1${[Math.floor(Math.random() * 10)]}px`,
          padding: `${[Math.floor(Math.random() * 10)]}px`,
          transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
        })
      }
      // 指向
      this.codeList = codeList
      this.codeInfo = codeList.map((item,index)=>{
        return item.code
      })
      // 将当前数据派发出去
      this.$emit('update:value', codeList.map(item => item.code).join(''))
    }
    ,
    getStyle(data) {
      return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`
    }
  }
}
</script>

<style scoped lang="scss">
.ValidCode {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    display: inline-block;
  }
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

table {
  width: 60%;
  min-width: 800px;
  border-collapse: collapse;

  :not(:last-child) {
    border-bottom: 0;
  }
}

tr {
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
  min-height: 40px;
  display: flex;
  flex-direction: row;

  :not(:last-child) {
    border-right: 1px solid #dcdfe6;
  }

  :nth-child(2n) {
    padding: 5px;
  }

  .title {
    min-width: 100px;
    padding-right: 10px;

  }

  .title:after {
    content: "*";
    color: red;
    padding-left: 5px;
    padding-top: 10px;
  }
}

td {
  display: flex;
  align-items: center;
  justify-content: end;
}

.td-ad-text {
  //
  width: calc(60vw - 120px);
  min-width: 680px;
  //width: 80%;
}

.ad-text {
  width: 100%;
  height: 300px;
  padding: 10px;
}

.td-input {
  justify-content: left;
  min-width: 48%;

  .input-text {
    width: 70%;
  }
}

.sub-button {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

</style>
