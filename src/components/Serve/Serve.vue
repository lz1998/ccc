<template>
<!--上半部分内容基本改的和他们需求一样了-->
  <div class="serve">
    <h1>现在开始为老人定制方案</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="你的名字">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="身体情况">
        <el-select v-model="form.region" placeholder="请确认老人身体状况">
          <el-option label="腿脚不便" value="leghurt"></el-option>
          <el-option label="患有心血管疾病" value="heartdisease"></el-option>
          <el-option label="上半身残疾" value="bodyhurt"></el-option>
          <el-option label="无法独自行动" value="damaged"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="家庭人数">
        <el-radio-group v-model="form.resource">
          <el-radio label="1"></el-radio>
          <el-radio label="2"></el-radio>
          <el-radio label="3"></el-radio>
          <el-radio label="4"></el-radio>
          <el-radio label="5"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="onSubmit">即刻定制</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
       <el-divider></el-divider>
        <el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>

  </div>
</template>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>
<script type="text/ecmascript-6">
  export default {
    name: "Serve",
    data(){
      return {
        form:{
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods:{
      onSubmit() {
        console.log('submit!');
        console.log(this.form.name);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .serve
    margin:0
    padding:0
</style>
