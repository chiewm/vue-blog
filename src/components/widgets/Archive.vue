<template>
  <div class="hot">
    <div class="hot-header">
      <div class="hot-title">归档</div>
      <div class="hot-more"><a href="">查看全部</a></div>
    </div>
    <div class="hot-body">
      <div class="hot-list">
        <ul>
          <li><a href="">2019年1月 <span>11 篇</span></a></li>
          <li><a href="">2018年12月 <span>3 篇</span></a></li>
            <li><a href="">2018年11月 <span>1 篇</span></a></li>
              <li><a href="">2018年10月 <span>6 篇</span></a></li>
                <li><a href="">2018年9月 <span>7 篇</span></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Archive",
    data() {
      return {}
    }
  }

</script>

<style scoped>
  .hot {
    margin-top: 20px;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  }

  .hot .hot-header {
    height: 41px;
    border-bottom: 1px solid #9797971a;
    font-size: 14px;
  }

  .hot .hot-title {
    padding-left: 20px;
    height: 40px;
    line-height: 40px;
    width: 80px;
    float: left;
    color: #71777c;
  }

  .hot .hot-more {
    padding-right: 20px;
    height: 40px;
    line-height: 40px;
    width: 60px;
    float: right;

  }

  .hot .hot-more a {
    font-size: 12px;
    color: #4fc08d;
  }

  .hot .hot-body {
    padding: 15px;
  }

  .hot .hot-body .hot-list li {
    margin: 7px 4px;
  }

  .hot .hot-body .hot-list a {
    color: #71777c;

  }

   .hot .hot-body .hot-list a:hover {
    color: #4fc08d;

  }

   .hot .hot-body .hot-list span {
    background: #4fc08d;
    color: #fff;
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 8px;
    float: right;
    margin-right:10px; 

  }

</style>
