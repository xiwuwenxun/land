<template>
  <div class="home">
    <el-container>
      <el-aside width="auto">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from './aside';
import Header from "./header.vue";
export default {
  components: {
    Header,
    Aside
  }
};
</script>

<style>
body,
header {
  margin: 0;
}
.home .el-header{
  padding: 0;
}
html,body,#app,.home,.el-container{
  height: 100%;
}
.home .el-aside{
  background-color: rgb(48, 65, 86)

}
.home .el-menu{
  background-color: rgb(48, 65, 86);
  border-right: 0;  

}
.home .el-submenu__title:hover ,.home .el-menu-item:hover ,.home .el-menu-item:focus{
  background-color: #263445 !important;
}
</style>