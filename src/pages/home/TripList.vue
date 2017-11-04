<template>
  <div class="lazy-load" id="weekend-trip">
    <h2 class="mp-modtitle">周末去哪儿</h2>
    <div>
      <div class="mp-product-item">
        <a href="#" title="北京温泉排行榜" class="mp-fulllink">
          <div class="product-imgcontainer image-ready">
            <img src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" alt="北京温泉排行榜">
          </div>
          <div class="mp-product-info">
            <p class="product-name">北京温泉排行榜</p>
            <p class="product-desc">细数北京温泉，温暖你的冬天</p>
          </div>
        </a>
      </div>
      <div class="mp-product-item">
        <a href="#" title="寻找北京的皇城范儿" class="mp-fulllink">
          <div class="product-imgcontainer image-ready">
            <img src="http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg" alt="寻找北京的皇城范儿">
          </div>
          <div class="mp-product-info">
            <p class="product-name">寻找北京的皇城范儿</p>
            <p class="product-desc">数百年的宫廷庙宇，至今依旧威严霸气</p>
          </div>
        </a>
      </div>
      <div class="mp-product-item">
        <a href="#" title="北京温泉排行榜" class="mp-fulllink">
          <div class="product-imgcontainer image-ready">
            <img src="http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg" alt="北京必游TOP10">
          </div>
          <div class="mp-product-info">
            <p class="product-name">北京必游TOP10</p>
            <p class="product-desc">来北京必去的景点非这些地方莫属</p>
          </div>
        </a>
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
  export default {
   
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
  

</style>

