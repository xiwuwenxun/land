<template>
  <el-menu
    text-color="rgb(191, 203, 217)"
    active-text-color="#1890ff"
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">课程管理</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">管理员</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  }
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>