<template>
  <div class="lazy-load" id="weekend-trip">
    <h2 class="mp-modtitle">周末去哪儿</h2>
    <div>
      <div id="wrapper">
        <div id="scroller">
          <div>
            <div class="mp-product-item" v-for="item in tripListInfo" :key="item.id">
              <router-link :to="item.link" class="mp-fulllink">
                <div class="product-imgcontainer image-ready">
                  <img :src="item.imgUrl" :alt="item.title">
                </div>
                <div class="mp-product-info">
                  <p class="product-name">{{item.title}}</p>
                  <p class="product-desc">{{item.desc}}</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
    </div>
      
      <div class="mp-price-desc">
        <span class="iconfont icon-xiaotanhao"></span>
        <div class="mp-price-desc-info">
          <span class="mp-price-desc-highlight">票面价</span>
          是指通过景区指定窗口售卖的纸质门票上标注的价格
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  require('../../../utils/iscroll-probe.js');
  export default {
    props:['tripListInfo'],
    mounted: function() {
      this.myScroll = new IScroll('#wrapper', { mouseWheel: true });
    },
    updated:function() {
      this.myScroll.refresh();
    }
  }
</script>
<style>
  #weekend-trip {
    width: 100%;
    height: auto;
    background: #f5f5f5;
  }
  .mp-modtitle {
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem;
    color: #212121;
  }
  .mp-product-item {
    position: relative;
    margin-bottom: .1rem;
    background: #fff;
  }
  .mp-fulllink {
    display: block;
    width: 100%;
    height: 100%;
  }
  .mp-product-item .product-imgcontainer {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.4375%;
  }
  .mp-product-item img {
    opacity: 1;
    width: 100%;
  }
  .mp-product-item .mp-product-info {
    position: relative;
    padding: .14rem .2rem .2rem .2rem;
  }
  .mp-product-item .product-name, .mp-product-item .product-desc {
    overflow: hidden;
    padding-right: 1.4rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .mp-product-item .product-name {
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
  }
  .mp-product-item .product-desc {
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
  }
  .mp-price-desc {
    margin-top: .1rem;
    padding: .14rem .1rem;
    font-size: .24rem;
    line-height: .32rem;
    background: #fff;
    color: #616161;
  }
  .icon-xiaotanhao {
    margin-right:.1rem; 
    width: .24rem;
    float: left;
    font-size: .4rem;
    line-height: .32rem;
    color: #ccc;
  }
  .mp-price-desc-info {
    padding-left: .3rem;
  }
  .mp-price-desc-highlight {
    font-weight: 900;
  }
  #wrapper {
    position: absolute;
    z-index: 1;
    left: 0;
    width: 100%;
    height: 450px;
    overflow: hidden;
    background: #ccc;
    overflow: hidden;
  }

</style>

