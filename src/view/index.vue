<template>
  <div class="content">
    <p>意见或建议</p>
    <table>
    <tr>
      <td class="title">意见建议 :</td>
      <td  class="td-ad-text"><textarea class="ad-text"></textarea> </td>
    </tr>
    <tr>
      <td class="title">部门 :</td>
      <td class="td-input"><input class="input-text"/></td>
    </tr>
    <tr>
      <td class="title">建议人 :</td>
      <td class="td-input"><input class="input-text"/>(便于联系解决)</td>
      <td class="title">联系电话 :</td>
      <td><input/></td>
    </tr>
    <tr>
      <td class="title">验证码 :</td>
      <td><input/></td>
    </tr>
    <tr class="sub-button">
      <el-button type="primary">发表建议</el-button>
    </tr>
  </table>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="scss">
.content{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

table {
  width: 60%;
  min-width: 800px;
  border-collapse:collapse;

  :not(:last-child){
    border-bottom: 0;
  }
}

tr{
  box-sizing:border-box;
  border:1px solid #dcdfe6;
  min-height:40px;
  display: flex;
  flex-direction: row;
  :not(:last-child){
    border-right: 1px solid #dcdfe6;
  }
  :nth-child(2n){
    padding: 5px;
  }
  .title{
    min-width: 100px;
    padding-right: 10px;

  }
  .title:after {
    content:"*";
    color: red;
    padding-left: 5px;
    padding-top: 10px;
  }
}

td {
  display: flex;
  align-items: center;
  justify-content:end;
}

.td-ad-text{
  //
  width: calc(60vw - 120px);
  min-width:680px ;
  //width: 80%;
}
.ad-text{
  width: 100%;
  height: 300px;
  padding: 10px;
}
.td-input{
  justify-content: left;
  min-width: 48%;
  .input-text{
    width: 70%;
  }
}

.sub-button{
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

</style>
