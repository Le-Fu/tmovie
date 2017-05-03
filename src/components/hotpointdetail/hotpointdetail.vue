<template>
  <div class="hotpointdetail" v-show="showFlag">
    <div class="close" @click="hide"></div>
    <h2 class="title">热点简介</h2>
    <p>{{hotpoint.desc}}</p>
    <h2>相关电影</h2>

  </div>
  </template>
<script>
export default{
  props: {
    hotpoint: {
      type: Object
    }
  },
  data() {
    return {
      showFlag: false
    };
  },
  methods: {
    show() {
      this.showFlag = true;
    },
    hide() {
      this.showFlag = false;
    }
  }
};
</script>

<style scoped>
.hotpointdetail {
  position: fixed;
  top: 44px;
  left: 0;
  bottom: 0;
  z-index: 30;
  width: 100%;
  background-color: #fff;
}
.hotpointdetail .close:after {
  position: fixed;
  content: '<';
  transform: scaleY(2);
  top: 15px;
  left: 20px;
  font-size: 17px;
  color: #fff;
  z-index: 20;
}
</style>
