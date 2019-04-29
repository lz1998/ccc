<template>
  <div class="home">
    <!--动态轮播图-->
    </el-carousel>
    <el-carousel :interval="4000" type="card" height="330px">
    <el-carousel-item v-for="item in pics" :key="item">
      <img :src="item"/>
    </el-carousel-item>
  </el-carousel>

    <el-divider></el-divider>
    <!--下方3个并列，每行24，各占8，间距20-->
    <!--可能文件夹下图片有些乱orz-->
    <el-row :gutter="28">
      <el-col :span="8">
        <h3>产品服务</h3>
        <img src="./home1.png"/>
      </el-col>
      <el-col :span="8">
        <h3>养老贴士</h3>
        <img src="./home2.png"/>
      </el-col>
      <el-col :span="8">
        <h3>关于我们</h3>
        <img src="./home3.png"/>

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
          require("./header1.jpg"),
          require("./header2.jpg"),
          require("./header3.jpg"),
        ]
      }
    }
  };
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 350px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
