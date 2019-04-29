<template>
  <div class="home">
    <h1>This is home Page</h1>
    <!--动态轮播图-->
    </el-carousel>
    <el-carousel :interval="4000" type="card" height="330px">
    <el-carousel-item v-for="item in pics" :key="item">
      <img :src="item"/>
    </el-carousel-item>
  </el-carousel>

     <el-col :span="8">
    <el-card shadow="hover">
      产品服务
    </el-card>
  </el-col>
   <el-col :span="8">
    <el-card shadow="hover">
      养老贴士
    </el-card>
  </el-col>
   <el-col :span="8">
    <el-card shadow="hover">
      关于我们
    </el-card>
  </el-col>
    <!--下方3个并列，每行24，各占8，间距20-->
    <el-row :gutter="20">
      <el-col :span="8">
        <h3>特点</h3>
        <img src="https://www.baidu.com/img/bd_logo1.png"/>
        <div class="description">
          <p>产品服务</p>
        </div>
      </el-col>
      <el-col :span="8">
        <h3>创新</h3>
        <img src="https://www.baidu.com/img/bd_logo1.png"/>
        <div class="description">
          <p>现在开始</p>
        </div>
      </el-col>
      <el-col :span="8">
        <h3>优势</h3>
        <img src="https://www.baidu.com/img/bd_logo1.png"/>
        <div class="description">
          <p>关于我们</p>
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
