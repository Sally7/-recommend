<template>
  <div class="content-box">
    <div class="content">
      <el-table
        :data="suggestionList"
        border
        style="width: 100%">
        <el-table-column
          prop="suggestPeople"
          label="建议人"
          width="180">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系方式"
          width="180">
        </el-table-column>
        <el-table-column
          prop="depart"
          label="部门"
          width="180">
        </el-table-column>
        <el-table-column

          label="意见/建议内容">
          <template slot-scope="scope">
            <el-tooltip :content="scope.row.advice" placement="bottom" effect="dark">
              <div class="advice">
                {{scope.row.advice.slice(0,200)+(scope.row.advice.length>200?'...':'')}}
              </div>
            </el-tooltip>

          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="sizeChangeHandle"
        @current-change="currentChangeHandle"
        :current-page="params.pageNo"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="params.pageSize"
        :total="params.total"
        layout="total, sizes, prev, pager, next, jumper">
      </el-pagination>
    </div>
  </div>

</template>


<script>
import {suggestions} from '../api/index'
export default {
  name: "list",
  data() {
    return {
      params:{
        pageSize:10,
        pageNo:1,
      },
      suggestionList: []
    }
  },
  created(){
    this.getSuggestions()
  },
  methods:{
    async getSuggestions(){
      let res = await suggestions(this.params)
      if(res.flag){
        this.params.total = res.data.total
        this.suggestionList = res.data.records
      }
    },
    sizeChangeHandle(val) {
      this.params.pageSize = val
      this.params.pageNo = 1
      this.getSuggestions()
    },
    currentChangeHandle(val){
      this.params.pageNo = val
      this.getSuggestions()
    }
  }
}
</script>

<style  lang="scss">
@import "../style/base.css";
.content-box{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content{
  width: 80%;
  min-width: 800px;
}
.advice{
  display: flex;
}
</style>
