<template>
  <div class="serve">
    <h1>This is serve Page</h1>
    <h1>现在开始为老人定制方案</h1>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="你的名字">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="所在城市">
        <el-select v-model="form.region" placeholder="请选择所在城市">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
          <el-option label="深圳" value="shenzhen"></el-option>
          <el-option label="广州" value="guangzhou"></el-option>
          <el-option label="重庆" value="chongqing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="所需服务">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="卧室" name="type"></el-checkbox>
          <el-checkbox label="厕所" name="type"></el-checkbox>
          <el-checkbox label="餐厅" name="type"></el-checkbox>
          <el-checkbox label="起居室" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊支持">
        <el-radio-group v-model="form.resource">
          <el-radio label="1"></el-radio>
          <el-radio label="2"></el-radio>
        </el-radio-group>
      </el-form-item>
      
      <el-form-item>
        <el-button type="warning" @click="onSubmit">立即尝试</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <el-row>
  <el-col :span="7" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="./server2.png" class="image">
      <div style="padding: 10px;">
        <span>目前已有的案例</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">了解更多</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
  <el-col :span="7" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="./server2.png" class="image">
      <div style="padding: 10px;">
        <span>目前已有的案例</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">了解更多</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
   <el-col :span="7" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="./server2.png" class="image">
      <div style="padding: 10px;">
        <span>目前已有的案例</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">了解更多</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

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
