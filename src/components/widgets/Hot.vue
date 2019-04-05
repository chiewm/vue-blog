<template>
  <div class="hot">
    <div class="hot-header">
      <div class="hot-title">阅读排行</div>
      <div class="hot-more"><a href="">查看全部</a></div>
    </div>
    <div class="hot-body">
      <div class="hot-list">
        <ul v-for="item in datas" :key="item.id">
          <li><a :href="'#/post/' + item.id " target="_blank">{{ item.title }}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    
    name: "Hot",
    data() {
      return {
        id: "",
        rank:"",
        title:"",
        datas:[],
      }
    },
     created() {
      this.getIndexData();
    },
    methods: {
      getIndexData() {
        axios.get("https://robin.ml/vue-blog/static/mock/hot.json").then(res => {
          this.datas = res.data.data;
        })
      }
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

</style>
