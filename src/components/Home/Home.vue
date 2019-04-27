<template>
  <div class="home">
    <h1>This is home Page</h1>
    <!--动态轮播图-->
    <el-carousel>
      <el-carousel-item v-for="item in pics" :key="item">
        <!--<h3>{{ item }}</h3>-->
        <img :src="item"/>
      </el-carousel-item>
    </el-carousel>

    <!--下方3个并列，每行24，各占8，间距20-->
    <el-row :gutter="20">
      <el-col :span="8">
        <h3>特点</h3>
        <img src="https://www.baidu.com/img/bd_logo1.png"/>
        <div class="description">
          <p>文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 </p>
        </div>
      </el-col>
      <el-col :span="8">
        <h3>创新</h3>
        <img src="https://www.baidu.com/img/bd_logo1.png"/>
        <div class="description">
          <p>文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 </p>
        </div>
      </el-col>
      <el-col :span="8">
        <h3>优势</h3>
        <img src="https://www.baidu.com/img/bd_logo1.png"/>
        <div class="description">
          <p>文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 </p>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Home",
    data(){
      return{
        pics:[
          require("./home1.jpg"),
          require("./home2.jpg"),
          require("./home3.jpg"),
        ]
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home
    margin:0
    padding:0
    width: 100%
    height:100%

</style>
