<template>
  <div class="mp-city-outer" mp-role="cityOuter"> 
    <div class="mp-city-container"> 
      <ul class="mp-city-list mp-flexbox">
        <li class="mp-city-item mp-flexbox-layout mp-city-actived"> 
          <span class="mp-city-inner iconfont icon-dingwei1">北京</span> 
        </li>
        <li class="mp-city-item mp-flexbox-layout"> 
          <span class="mp-city-inner">成都</span> 
        </li>
        <li class="mp-city-item mp-flexbox-layout"> 
          <span class="mp-city-inner">重庆</span> 
        </li>
        <li class="mp-city-item mp-flexbox-layout"> 
          <span class="mp-city-inner">广州</span>
        </li>
      </ul> 
    </div> 
    <div class="mp-city-expand iconfont icon-arrow-bottom"></div> 
  </div>
</template>
<script>
  export default {
    
  }

</script>
<style scoped>
  .mp-city-outer {
    position: relative;
    height: .76rem;
  }
  .mp-city-container {
    margin-right: 14.6%;
  }
  .mp-city-list {
    min-height: .76rem;
    background: #4482f6;
  }
  .mp-city-list .mp-city-actived {
    position: relative;
  }
  .mp-city-item {
    text-align: center;
    
  } 
  .mp-flexbox-layout {
    float: left; 
    width:25%;
    line-height: .76rem;
  }
  .mp-city-inner {
    font-size: .28rem;
    color: #fff;
  }
  .mp-city-actived .mp-city-inner, .mp-city-actived .icon-dingwei1{
    color: #fff!important;
  }
  .mp-city-expand {
    position: absolute;
    top: 0;
    right: 0;
    width: 14.6%;
    height: .76rem;
    background: #86b0ff;
    text-align: center;
    line-height: .76rem;
    color:#fff;

}

</style>
