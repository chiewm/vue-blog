<template>
  <div class="header">
    <div class="container">
      <div class="header-logo">
        <a href=""></a>
      </div>
      <div class="header-nav">
        <ul class="nav-list clearfix">
          <li class="nav-item" v-for="item in list" :key="item.id">
            <a href="">{{ item.text }}</a>
          </li>
        </ul>
      </div>
      <div class="header-search">
        <form action="" class="search-form clearfix">
          <input type="text" name="keyword" id="" class="search-text">
          <input type="button" id="" class="search-btn" value="搜索">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderNav",
    data() {
      return {
        list: [{
            id: 0,
            text: "小米手机"
          },
          {
            id: 1,
            text: "红米"
          },
          {
            id: 2,
            text: "电视"
          },
          {
            id: 3,
            text: "笔记本"
          },
          {
            id: 4,
            text: "家电"
          },
          {
            id: 5,
            text: "新品"
          },
          {
            id: 6,
            text: "路由器"
          },
          {
            id: 7,
            text: "智能硬件"
          },
          {
            id: 8,
            text: "服务"
          },
          {
            id: 9,
            text: "社区"
          },
        ]
      }
    }
  }

</script>


<style scoped>
  .header {
    height: 80px;
  }

  .header-logo {
    margin-top: 22px;
    width: 62px;
    float: left;
  }

  .header-logo a {
    display: block;
    width: 55px;
    height: 55px;
    background: #ff6608 url("~@/../static/images/mi-logo.png") no-repeat 50% 50%;
  }

  .header-nav {
    float: left;
  }

  .header-nav .nav-list {
    height: 88px;
    width: 820px;
    font-size: 16px;
    padding: 12px 0 0 38px;
  }

  .header-nav .nav-list .nav-item {
    float: left;
  }

  .header-nav .nav-list .nav-item a {
    padding: 26px 10px 38px;
    display: block;
    color: #333;
  }

  .header-nav .nav-list .nav-item a:hover {
    color: #ff6608;
  }


  .header-search {
    float: right;
    height: 50px;
    width: 296px;
    margin-top: 28px;
  }

  .header-search .search-form {
    position: relative;
    display: block;
    height: 50px;

  }

  .header-search .search-form .search-text {
    position: absolute;
    right: 50px;
    top: 0;
    display: block;
    width: 245px;
    height: 48px;
    line-height: 50px;
    border: 1px solid #e0e0e0;
    outline: 0;
  }

  .header-search .search-form .search-btn {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: 51px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #e0e0e0;
    outline: 0;
    background: #fff;
  }

</style>
