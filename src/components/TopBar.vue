<template>
  <div class="topbar">
    <div class="container clearfix">
      <div class="topbar-logo">CHIEW</div>
      <div class="topbar-nav">
        <ul>

          <li class="nav-item">
          <router-link to="/">首页</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/achives">归档</router-link>
          </li>
          <li class="nav-item">
               <router-link to="/tags">标签</router-link>
          </li>
        <!--
          <li class="nav-item">
            <a href="">资源</a>
          </li> -->
          <li class="nav-item">
                <a href="https://robin.ml/" target="_blank">关于</a>
          </li>
        </ul>
      </div>
      <div class="topbar-write">
        <a href="" class="btn">写文章</a>
      </div>
      <div class="topbar-search"></div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'TopBar',
    data() {
      return {

      }
    },

  }

</script>

<style scoped>
  .topbar {
    height: 60px;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  }

  .topbar-logo {
    line-height: 40px;
    height: 40px;
    font-size: 30px;
    font-weight: bold;
    color: #4fc08d;
    display: block;
    float: left;
    margin-top: 10px;
  }


  .topbar-nav {
    width: 600px;
    float: left;
    height: 40px;
    color: #71777c;
    line-height: 40px;
    margin-left: 50px;
    margin-top: 10px;
  }

  .topbar-nav .nav-item {
    float: left;
    margin: 0 20px;
    font-size: 16px;
  }

  .topbar-nav .nav-item a {
    color: #71777c;
  }



  .topbar-nav .nav-item a:hover {
    color: #4fc08d;
  }


  .topbar-write {
    float: right;
    height: 40px;
    line-height: 40px;
    margin-left: 50px;
    margin-top: 10px;
  }

  .topbar-write a {
    font-size: 16px;
    display: block;
    color: #fff;
    padding: 1px 20px;

  }

  .topbar-write .btn {
    background: #4fc08d;
    border-radius: 20px;
  }

  .topbar-write .btn:hover {
    background: #4ab485;
    border-radius: 20px;
  }

</style>
