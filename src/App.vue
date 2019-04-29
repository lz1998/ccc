<template>
  <div id="app">
    <el-container>

      <!--顶部-->
      <!--顶部换成了默认配色，更配按钮选择-->
      <el-header>
        <el-menu
          default-active="/"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :router="true">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/serve">定制方案</el-menu-item>
          <el-menu-item index="/about">产品导航</el-menu-item>
          <el-menu-item index="/contact">联系我们</el-menu-item>
        </el-menu>
      </el-header>

      <!--中间部分，不要动代码，自动根据导航切换-->
      <el-main>
        <router-view></router-view>
      </el-main>

      <!--底部内容，这里要改-->
      <el-footer>
        到底啦！
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      //这里写变量
    }
  },
  methods:{
    //这里写函数/方法
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    margin:0
    padding:0
    width: 100%
    height: 100%
    .page-container
      margin:0
      padding:0
      width: 100%
      height: 100%
</style>
