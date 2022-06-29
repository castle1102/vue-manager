<template>
  <div>
    <!-- background-color="#112f50" -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      text-color="#fff"
      background-color="#112f50"
      active-text-color="#409EFF"
      router
      :collapse="isCollapse"
      unique-opened
    >
      <el-menu-item>
        <span slot="title">易购后台管理系统</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <!-- <span slot="title">首页</span> -->
        <span slot="title">{{ $t("menu.home") }}</span>
      </el-menu-item>
      <el-submenu index="/goods">
        <template slot="title">
          <i class="el-icon-s-cooperation"></i>
          <!-- <span slot="title">商品管理</span> -->
          <span slot="title">{{ $t("menu.goods") }}</span>
        </template>
        <el-menu-item index="/goods/goods-list">
          <i class="el-icon-menu"></i>
          <span slot="title">商品列表</span>
        </el-menu-item>
        <el-menu-item index="/goods/goods-verify">
          <i class="el-icon-menu"></i>
          <span slot="title">商品审核</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/params">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">{{ $t("menu.params") }}</span>
        </template>
        <el-menu-item index="/params/specifications">
          <i class="el-icon-setting"></i>
          <span slot="title">规格与包装</span>
        </el-menu-item>
      </el-submenu>

      <el-menu-item index="/advert">
        <i class="el-icon-data-board"></i>
        <span slot="title">广告分类</span>
      </el-menu-item>
      <el-submenu index="/order">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/order-list">
            <i class="el-icon-menu"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>
          <el-menu-item index="/order/send-goods">
            <i class="el-icon-menu"></i>
            <span slot="title">发货列表</span>
          </el-menu-item>
          <el-menu-item index="/order/change-goods">
            <i class="el-icon-menu"></i>
            <span slot="title">换货列表</span>
          </el-menu-item>
          <el-menu-item index="/order/order-back">
            <i class="el-icon-menu"></i>
            <span slot="title">退货管理</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/user">
        <i class="el-icon-data-board"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  data() {
    return {
      // isCollapse:false
    };
  },
};
</script>

<style lang='less' scoped>
.el-menu {
  border-right: 0;
  .is-active {
    background: #1e78bf !important;
    color: #fff !important;
  }
}
// .el-menu-vertical-demo{
//   background: #112f50;
// }
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
// /deep/ .el-submenu{
//   .el-menu{
//     background: rgb(14, 35, 61);
//   }
// }
// /deep/ .el-menu-item:hover,.el-submenu:hover{
//     background: #0d2641;
// }
</style>