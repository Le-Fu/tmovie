<template>
  <div class="movieinfo">
    <div class="header">
      <img :src="movie.poster" alt="" class="back">
      <img :src="movie.poster" alt="" class="front">
    </div>
    <div class="info-box">
      <h1 class="name">{{movie.name}}</h1>
      <div class="star-wrapper">
        <star :score="movie.score"></star>
        <span class="movie-score">{{movie.score}}</span>
      </div>
      <div class="detail-info">
        <h3 class="info-title">导演</h3>
        <p>{{movie.director}}</p>
        <h3 class="info-title">主演</h3>
        <span class="actor" v-for="item in movie.actor">{{item}}</span>
        <h3 class="info-title">类型</h3>
        <span class="type" v-for="item in movie.type">{{item}}</span>
        <h2 class="info-title">剧情简介</h2>
        <p>{{movie.abstract}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star';

  export default {
    props: {
      movie: {
        type: Object
      }
    },
    components: {
      star
    }
  };
</script>

<style scoped>
  .movieinfo {
    position: fixed;
    left: 0;
    top: 44px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #FBFBFB;
    z-index: 20;
  }

  .movieinfo .header {
    position: relative;
    width: 100%;
    height: 30vh;
    overflow: hidden;
  }

  .movieinfo .header .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(50px);
  }

  .movieinfo .header .front {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
  }
</style>
