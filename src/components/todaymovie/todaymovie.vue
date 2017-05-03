<template>
  <div class="todaymovie">
    <div class="movie-wrapper">
      <img :src="todayMovie.img" alt="">
      <div class="desc" @click="handleShow">{{todayMovie.desc}}</div>
    </div>
    <div class="detail-wrapper" v-show="showDetail">
      <movieinfo :movie="todayMovie"></movieinfo>
      <div class="close" @click="handleHide"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import movieinfo from 'components/movieinfo/movieinfo';

  export default {
    props: {
      todayMovie: {
        type: Object
      }
    },
    data() {
      return {
        showDetail: false
      }
    },
    methods: {
      handleShow() {
        this.showDetail = true;
      },
      handleHide() {
        this.showDetail = false;
      }
    },
    components: {
      movieinfo
    }
  };
</script>

<style scoped>
  .todaymovie {
    position: relative;
    width: 100%;
    height: 30vh;
    overflow: hidden;
  }

  .todaymovie img {
    width: 100%;
  }

  .todaymovie .desc {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 30px 0;
    text-align: center;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .todaymovie .close:after {
    position: fixed;
    content: '<';
    transform: scaleY(2);
    top: 15px;
    left: 20px;
    font-size: 17px;
    color: #fff;
    z-index: 20;
  }

  .todaymovie .detail-wrapper {
    margin-top: 44px;
  }
</style>
