<template>
  <div>
    <top-bar></top-bar>
    <div class="container">
      <div class="index">
        <content-bar></content-bar>
        <contents></contents>
      </div>

      <side-bar></side-bar>

    </div>

  </div>
</template>

<script>
  import TopBar from '@/components/TopBar';
  import ContentBar from '@/components/ContentBar';
  import Contents from '@/components/Contents';
  import SideBar from '@/components/SideBar'

  export default {
    name: "Index",
    data() {
      return {

      }
    },
    components: {
      TopBar,
      ContentBar,
      Contents,
      SideBar
    }
  }

</script>


<style scoped>
  .index {
    margin-top: 20px;
    width: 580px;
    margin-right: 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
  }

  @media screen and (min-width: 320px) and (max-width: 1024px) {
    .index {
      margin-top: 40px;
      width: 100%;
      margin-right: 0
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .index {
      width: 100%;
      margin-right: 0;
      margin-top: 20px;
    }
  }

</style>
