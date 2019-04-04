<template>
  <div class="tag">
    <div v-for="items in datas" :key="items.id">
     <div class="tag-item-header">{{ items.tag }}</div>
      <div v-for="item in items.titles" :key="item.id">
        <div class="tag-item-body hvr-forward">
          <div class="tag-time">{{ item.date }}</div>
          <div class="tag-title"><a :href="'#/post/'+item.id" target="_blank">{{ item.title }}</a></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "tagsItem",
    data() {
      return {
        id: "",
        tag: "",
        date: "", 
        titles: "",
        datas: [],
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get("https://robin.ml/vue-blog/static/mock/tags.json").then(res => {
          this.datas = res.data.data;
          console.log(this.datas);
        })
      }
    }
  }

</script>

<style scoped>
  @import url("https://cdn.bootcss.com/hover.css/2.3.1/css/hover-min.css");

  .tag {
    width: 600px;
    float: left;
    padding: 0px 40px;
  }

  .tag .tag-item-header {
    font-size: 30px;
    margin-top: 40px;
    font-weight: 100;
    color: #71777c;

  }

  .tag .tag-item-body {
    padding-top: 5px;
    margin-top: 10px;
  }

  .tag .tag-item-body .tag-time {
    font-size: 14px;
    color: #71777c;
    width: 80px;
    float: left;
  }


  .tag .tag-item-body .tag-title a {
    font-size: 16px;
    color: #3e3e3e;
    display: block;
    width: 600px;
    font-weight: 400;
  }

  .tag .tag-item-body .tag-title a:hover {
    color: #4fc08d;
  }

</style>
