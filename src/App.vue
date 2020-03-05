<template>
  <div id="app">
    <router-view />
    <loading v-show="LOADING"></loading>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Loading from "./components/loading.vue";
export default {
  computed: {
    ...mapState(["LOADING"])
  },
  name: "App",
  components: {
    Loading
  }
};
</script>
<style lang="scss">
#app {
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei", sans-serif;
  height: 100%;
  font-size: 14px;
}
h1,
h2,
h3,
h4,
h4,
h5,
p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
