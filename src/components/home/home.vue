<template>
  <div class="index" ref="index">
    <todaymovie :todayMovie="movie.todayMovie"></todaymovie>
    <h2 class="section">热门话题</h2>
    <div class="hotpoint-wrapper" ref="hotpointWrapper">
      <ul class="hotpoint-list" ref="hotpointList">
        <li @click="selectHotpoint(item, $event)" v-for="item in movie.hotPoint" class="hotpoint">
          <img :src="item.img" alt="">
          <div class="mask">
            <div class="box">{{item.point}}</div>
          </div>
        </li>
      </ul>
    </div>
    <hotpointdetail :hotpoint="selectedHotpoint" ref="hotpointdetail"></hotpointdetail>
    <h2 class="section">精选收藏</h2>
    <ul class="collection-list">
      <li class="movie-list" v-for="collection in movie.collections">
        <img :src="collection.img" alt="">
        <div class="collection-name">{{collection.name}}</div>
      </li>
    </ul>
    <h2 class="section">最新电影</h2>
    <div class="latest-wrapper" ref="latestWrapper">
      <ul class="latest-list" ref="latestUl">
        <li class="latest" v-for="latest in movie.latestmovie" @click="selectLatest(latest, $event)">
          <img :src="latest.poster" alt="">
          <div class="name">{{latest.name}}</div>
          <star :score="latest.score"></star>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import todaymovie from 'components/todaymovie/todaymovie';
  import hotpointdetail from 'components/hotpointdetail/hotpointdetail';
  import star from 'components/star/star';

  export default {
    data() {
      return {
        movie: {},
        selectedHotpoint: {},
        selectedLatest: {}
      };
    },
    mounted() {
      this.$http.get('/api/movie').then((response) => {
        response = response.body;
        if (response.errno === 0) {
          this.movie = response.data;
          this.$nextTick(() => {
            this._initIndexScroll();
            this._initHotpointScroll();
          });
        }
      });
    },
    methods: {
      _initIndexScroll() {
        if (!this.indexScroll) {
          this.indexScroll = new BScroll(this.$refs.index, {
            click: true
          });
        } else {
          this.indexScroll.refresh();
        }
      },
      _initHotpointScroll() {
        if (this.movie.hotPoint) {
          let itemWidth = 136;
          let itemMargin = 5;
          let ulWidth = (itemWidth + itemMargin) * this.movie.hotPoint.length;
          this.$refs.hotpointList.style.width = ulWidth + 'px';
          if (!this.hotPointScroll) {
            this.hotPointScroll = new BScroll(this.$refs.hotpointWrapper, {
              scrollX: true,
              eventPassThrough: 'vertical',
              click: true
            });
          } else {
            this.hotPointScroll.refresh();
          }
        }
      },
      _initLatestScroll() {
        if (this.movie.latestmovie) {
          let itemWidth = 100;
          let itemMargin = 5;
          let ulWidth = (itemWidth + itemMargin) * this.movie.latestmovie.length;
          this.$refs.hotpointList.style.width = ulWidth + 'px';
          if (!this.hotPointScroll) {
            this.hotPointScroll = new BScroll(this.$refs.hotpointWrapper, {
              scrollX: true,
              eventPassThrough: 'vertical',
              click: true
            });
          } else {
            this.hotPointScroll.refresh();
          }
        }
      },
      selectHotpoint(hotpoint, event) {
        if (!event._constructed) {
          return;
        }
        this.selectedHotpoint = hotpoint;
        this.$refs.hotpointdetail.show();
      },
      selectLatest(lastest, event) {
        if (!event._constructed) {
          return;
        }
        this.selectedLatest = lastest;
      }
    },
    components: {
      todaymovie,
      hotpointdetail,
      star
    }
  }
</script>
<style scoped>
  .index {
    overflow-y: scroll;
  }

  .index .section {
    padding: 6px 0 6px 6px;
    font-size: 16px;
    font-weight: 700;
    background-color: #fff;
  }

  .index .hotpoint-wrapper {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }

  .index .hotpoint-wrapper .hotpoint-list {
    font-size: 0;
  }

  .index .hotpoint-wrapper .hotpoint {
    position: relative;
    display: inline-block;
    margin-right: 8px;
    width: 136px;
    height: 100px;
  }

  .index .hotpoint-wrapper .hotpoint img {
    width: 100%;
    height: 100%;
  }

  .index .hotpoint-wrapper .hotpoint .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    background-color: rgba(7, 17, 27, 0.4);
  }

  .index .hotpoint-wrapper .hotpoint .mask .box {
    margin: 10px auto;
    width: 80%;
    padding: 10px 5px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }

  .index .collection-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 144px;
    margin-bottom: -3px;
  }

  .index .collection-list .movie-list {
    position: relative;
    width: 32%;
    margin-bottom: 3px;
  }

  .index .collection-list .movie-list img {
    width: 100%;
    height: 100%;
  }

  .index .collection-list .movie-list .collection-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }

  .latest-wrapper {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }

  .latest-list {
    font-size: 0;
  }

  .latest {
    display: inline-block;
    margin-right: 8px;
    width: 80px;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
  }

  .latest img {
    width: 100%;
  }

</style>
