<template>
  <div id="app">
    <div class="head">
      <span class="back" @click="back()" v-if='!$route.meta.isshowBackbtn'></span>
      {{ $route.meta.name }}
    </div>
    <div class="tab-bar">
      <div class="tab-item">
        <router-link to="/home">
          <p>
            <i class="icon iconfont icon-home"></i>
          </p>
          <p>电影</p>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/discovery">
          <p>
            <i class="icon iconfont icon-business"></i>
          </p>
          <p>发现</p>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/profile">
          <p>
            <i class="icon iconfont icon-rank"></i>
          </p>
          <p>我的</p>
        </router-link>
      </div>
    </div>
    <keep-alive>
      <router-view class='main'></router-view>
    </keep-alive>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style>
  .main {
    margin-top: 44px;
    margin-bottom: 50px;
    background: #F2F2F2;
    height: calc(100vh - 94px);
  }

  .head {
    width: 100%;
    color: #fff;
    font-size: 17px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background: #454545;
    position: fixed;
    top: 0;
    z-index: 12;
  }

  .head .back {
    position: relative;
    float: left;
  }

  .head .back:after {
    position: absolute;
    content: '<';
    transform: scaleY(2);
    top: 2px;
    left: 30px;
  }

  .tab-bar {
    border-top: 1px solid #E7E7E7;
    position: fixed;
    display: flex;
    width: 100%;
    height: 44px;
    line-height: 20px;
    bottom: 0;
    background: #FBFBFB;
    padding-top: 5px;
    z-index: 10;
  }

  .tab-item {
    flex: 1;
    text-align: center;
  }

  .tab-item i {
    font-size: 20px;
  }

  .tab-item p {
    font-size: 12px;
  }

  a {
    font-size: 15px;
    color: #7e7e7e;
    font-weight: normal;
  }

  .router-link-active {
    color: #FF5C00;
  }

  /*l*/
</style>
