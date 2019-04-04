<template>
  <div>
    <div v-for="item in datas" :key="item.id">
       <div class="content">
      <h3 class="title"><a :href="'/post/' + item.id " target="_blank">{{ item.title }}</a></h3>
      <p class="summary">{{ item.summary }}</p>
      <div class="author">{{ item.author }}<span>{{ item.time }}</span><span>{{ item.tag }}</span></div>
      <div class="tool">
        <i class="iconfont icon-eye_protection"></i><span>{{ item.read }}</span>
        <i class="iconfont icon-collection"></i><span>{{ item.love }}</span>
        <i class="iconfont icon-voice"></i><span>{{ item.comment }}</span>
      </div>
    </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios' 
  export default {
    name: "Contents",
    data() {
      return {
        id:"",
        title: "",
        summary: "",
        author: "",
        read: 0,
        love: 0,
        comment: 0,
  
        datas:[],
        
      }
    },
    created() {
      this.getIndexData();
    },
    methods: {
      getIndexData() {
        axios.get("/static/mock/index.json").then(res => {
          this.datas = res.data.data;
        })
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
    color: #3e3e3e;
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
