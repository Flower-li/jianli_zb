<template>
  <div class="loading">
    <van-loading size="24px" vertical color="#fff" style="margin-top:80%;"
      >正在提交中，请勿关闭页面...</van-loading
    >
  </div>
</template>

<script>
export default {
  name: "LOADING",
  data() {
    return {};
  }
};
</script>
<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 121;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.van-loading__text {
  color: #fff;
}
</style>
