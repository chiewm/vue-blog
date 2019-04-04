<template>
  <div class="content-bar">
    <div class="history">
      <ul class="content-nav">
        <li class="item"><a href="">最新</a></li>
        <li class="item"><a href="">热门</a></li>
        <li class="item"><a href="">评论最多</a></li>
      </ul>
    </div>
    <div class="refresh"><a href="">刷新</a></div>
  </div>
</template>

<script>
  export default {
    name: "ContentBar",
    data() {
      return {

      }
    }
  }

</script>

<style scoped>
  .content-bar {
    height: 40px;
    width: 640px;
    background: #fff;
    float: left;
    border-bottom: 1px solid #9797971a;

  }

  .history {
    margin-left: 15px;
  }

  .content-nav {
    width: 200px;
    float: left;
    line-height: 40px;
    height: 40px;
  }

  .content-nav .item {
    display: block;
    float: left;
    padding: 0 8px;
  }


  .content-nav .item a {
    color: #71777c;
    font-size: 12px;
  }

  .refresh a {
    float: right;
    line-height: 40px;
    height: 40px;
    margin-right: 20px;
    font-size: 12px;
    color: #71777c;
  }

</style>
