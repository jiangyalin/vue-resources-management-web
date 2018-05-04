<template>
  <div class="m-search-box">
    <div class="m-search-mn">
      <div class="u-mn">
        <a class="u-top" href="javascript:void(0)">
          <i class="fa fa-bar-chart"></i>
          <p class="u-top-p">排行榜</p>
        </a>
        <div class="u-sch">
          <input class="u-it" type="text">
          <i class="fa fa-search"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'search',
    data () {
      return {}
    },
    components: {},
    methods: {}
  }
</script>

<style scoped>
  .m-search-mn{
    width: 340px;
    height: 36px;
  }
  .u-mn{
    display: flex;
    padding: 2px;
    width: 100%;
    height: 100%;
    line-height: 32px;
    color: rgba(255, 255, 255, .9);
    justify-content: space-between;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, .12);
    box-sizing: border-box;
  }
  .u-top{
    display: flex;
    padding: 0 5px;
    width: 68px;
    height: 100%;
    justify-content: space-between;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .2);
    box-sizing: border-box;
    transition: .3s;
  }
  .u-top:hover{
    background-color: hsla(0, 0%, 100%, .1);
  }
  .u-top .fa{
    font-size: 18px;
    line-height: 32px;
  }
  .u-top .u-top-p{
    font-size: 12px;
  }
  .u-sch{
    position: relative;
    width: 266px;
    height: 100%;
    font-size: 12px;
    color: rgba(255, 255, 255, .9);
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .2);
    box-sizing: border-box;
  }
  .u-sch .u-it{
    padding: 0 56px 0 12px;
    width: 100%;
    height: 100%;
    color: rgba(255, 255, 255, .9);
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
  }
  .u-sch .fa{
    position: absolute;
    top: 0;
    right: 0;
    width: 56px;
    height: 100%;
    font-size: 18px;
    text-align: center;
    line-height: 32px;
    cursor: pointer;
  }
</style>
