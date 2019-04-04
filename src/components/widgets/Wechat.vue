<template>
  <div class="wechat">
    <div class="wechat-body">
        <div class="wechat-code">
        <img src="/static/images/wechat.png" alt="">
        </div>
        <div class="wechat-text">
            扫描微信二维码<br>
            与我共同开发
        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "wechat",
    data() {
      return {
         id:"",
      }
    },

  }

</script>

<style scoped>
  .wechat {
    width: 300px;
    min-height: 120px;
    background: #fff;
    margin-top: 20px;
    float: left;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  }



  .wechat .wechat-body{

      padding: 20px;
  }


  .wechat .wechat-body img{
      width: 80px;
      float: left;
  }

   .wechat .wechat-body .wechat-text {
       text-align: center;
       line-height: 40px;
       height: 40px;
       font-size: 16px;
       font-weight: 400;
       color: #676767;
   }



</style>
