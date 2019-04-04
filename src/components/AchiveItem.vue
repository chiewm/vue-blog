<template>
  <div class="achive">
    <div v-for="items in datas" :key="items.id">
     <div class="achive-item-header">{{ items.yaer }}</div>
      <div v-for="item in items.titles" :key="item.id">
        <div class="achive-item-body hvr-forward">
          <div class="achive-time">{{ item.date }}</div>
          <div class="achive-title"><a :href="'#/post/'+item.id" target="_blank">{{ item.title }}</a></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "AchivesItem",
    data() {
      return {
        id: "",
        yaer: "",
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
        axios.get("https://robin.ml/vue-blog/static/mock/achieves.json").then(res => {
          this.datas = res.data.data;
          console.log(this.datas);
        })
      }
    }
  }

</script>

<style scoped>
  @import url("https://cdn.bootcss.com/hover.css/2.3.1/css/hover-min.css");

  .achive {
    width: 600px;
    float: left;
    padding: 0px 40px;
  }

  .achive .achive-item-header {
    font-size: 30px;
    margin-top: 40px;
    font-weight: 100;
    color: #71777c;

  }

  .achive .achive-item-body {
    padding-top: 5px;
    margin-top: 10px;
  }

  .achive .achive-item-body .achive-time {
    font-size: 14px;
    color: #71777c;
    width: 80px;
    float: left;
  }


  .achive .achive-item-body .achive-title a {
    font-size: 16px;
    color: #3e3e3e;
    display: block;
    width: 600px;
    font-weight: 400;
  }

  .achive .achive-item-body .achive-title a:hover {
    color: #4fc08d;
  }

</style>
