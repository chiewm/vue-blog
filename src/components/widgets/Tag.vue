<template>
  <div class="tag">
    <div class="tag-header">
      <div class="tag-title">热门标签</div>
      <div class="tag-more"><a href="">查看全部</a></div>
    </div>
    <div class="tag-body">
        <div class="tag-list" v-for="item in datas" :key="item.id">
            <a class="btn" href="">{{ item.name }}</a>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Tag",
    data() {
      return {
         id:"",
          name:"",
          datas:[],
      }
    },
         created() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get("https://robin.ml/vue-blog/static/mock/tag.json").then(res => {
          this.datas = res.data.data;
          console.log(this.datas);
        })
      }
    },
  }

</script>

<style scoped>
  .tag {
    width: 300px;
    min-height: 120px;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  }

  .tag .tag-header {
    height: 41px;
    border-bottom: 1px solid #9797971a;
    font-size: 14px;
  }

  .tag .tag-title {
    padding-left: 20px;
    height: 40px;
    line-height: 40px;
    width: 80px;
    float: left;
    color: #71777c;
  }

  .tag .tag-more {
    padding-right: 20px;
    height: 40px;
    line-height: 40px;
    width: 60px;
    float: right;

  }

  .tag .tag-more a {
    font-size: 12px;
    color: #4fc08d;
  }

  .tag .tag-body{
      padding: 20px;
  }


.tag .tag-body .btn{
    background: #f3f6f3;
    color: #71777c;
    padding: 5px 15px;
     border-radius: 20px;
     font-size: 12px;
     float: left;
     margin: 5px;
   
  }

  .tag .tag-body .btn:hover{
    background: #4fc08d;
    color:#fff;
   
  }

</style>
