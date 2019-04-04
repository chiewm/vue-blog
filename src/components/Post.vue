<template>
  <div>
    <top-bar></top-bar>
    <div class="container">
      <div style="float:right">
        <side-bar></side-bar>
      </div>

      <div class="post">
        <div class="title">{{ title }}</div>
        <div class="time">{{ time }} &nbsp;{{ author }} &nbsp; {{ tag }}</div>

        <div class="body">
          <div>
            <div class="content" v-html="context">
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
  import axios from 'axios'
  import SideBar from '@/components/SideBar'
  import TopBar from '@/components/TopBar'
  export default {
    name: "Post",
    data() {
      return {
        id: "",
        title: "",
        time: '',
        author: "",
        tag: "",
        context: "暂无文章"
      }
    },
    created() {
      this.getData(this.$route.params.id);
    },
    methods: {
      getData(id) {
        axios.get("https://robin.ml/vue-blog/static/mock/posts.json").then(res => {
          var datas = res.data.data;
          datas.forEach(element => {
            if (element.id == id) {
              this.title = element.title;
              this.time = element.time;
              this.author = element.author;
              this.tag = element.tag;
              this.context = element.context;
            }
          });

        })
      }
    },
    components: {
      SideBar,
      TopBar
    }
  }

</script>

<style scoped>
  @import url("https://at.alicdn.com/t/font_1124736_9gtkw41uh4w.css");

  .post {
    margin-top: 20px;
    padding: 20px;
    background: #fff;
    width: 600px;
    min-height: 420px;
    color: #71777c;
    padding-bottom: 30px;
  }

  .post .title {
    padding: 20px;
    font-size: 24px;
    font-weight: normal;
    color: #3e3e3e;
    ;

  }

  .post .time {
    font-size: 12px;
    margin-left: 20px;
    font-weight: normal;

  }


  .post .body {
    font-size: 16px;
    margin-top: 20px;
    margin-left: 20px;
    font-weight: normal;
  }

  .post .body .content {
    line-height: 40px;
  }

  .post .footer {
    text-align: center;
    margin-top: 20px;
    padding: 5px 0;
  }



  .post .tool {
    margin-bottom: 25px;

  }

  .post .tool i {
    font-size: 40px;
    color: #71777c;
    display: inline-block;
    vertical-align: middle;
  }

  .post .tool i:hover {
    color: #4fc08d;
  }

  .post .tool span {
    font-size: 14px;
    color: #71777c
  }

</style>
