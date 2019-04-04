<template>
  <div class="content">
    <h3 class="title"><a href="">基于 ELK 技术栈的海量日志平台搭建记录</a></h3>
    <p class="summary">这几天业务需要，需要搭建一个日志分析平台，找了很多资料,了解到了基于...</p>
    <div class="author">chiewminhai<span>1小时前</span><span>大数据</span></div>
    <div class="tool">
      <i class="iconfont icon-eye_protection"></i><span>12</span>
      <i class="iconfont icon-collection"></i><span>99</span>
      <i class="iconfont icon-voice"></i><span>99</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Contents",
    data() {
      return {

      }
    }
  }

</script>

<style scoped>
  @import url("https://at.alicdn.com/t/font_1124736_9gtkw41uh4w.css");

  .content {
    width: 600px;
    float: left;
    height: 110px;
    background: #fff;
    border-bottom: 1px solid #9797971a;
    padding: 15px 20px;
  }

  .content:hover {
    background: rgb(252, 252, 252);

  }

  .content .title a {
    color: #4ec08d;
    letter-spacing: 1px;
  }

  .content .title a:hover {
    text-decoration: underline;
  }


  .content .summary {
    margin-top: 10px;
    color: #676767;
  }

  .content .author {
    margin-top: 25px;
    float: left;
    color: #71777c;
    font-size: 14px;
  }

  .content .author span {
    margin-left: 10px;
  }

  .content .tool {
    margin-top: 25px;
    float: right;
  }

  .content .tool i {
    font-size: 25px;
    color: #71777c;
    display: inline-block;
    vertical-align: middle;
  }

  .content .tool i:hover {
    color: #4fc08d;
  }

  .content .tool span {
    font-size: 14px;
    color: #71777c
  }

</style>
