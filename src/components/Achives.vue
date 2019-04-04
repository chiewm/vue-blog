<template>
  <div class="achives">
    <top-bar></top-bar>
    <div class="container">
      <div style="float:right">
        <side-bar></side-bar>
      </div>
      <div class="achives-item">
        <achive-item></achive-item>
      </div>

      <div>
      </div>


    </div>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar';
  import AchiveItem from '@/components/AchiveItem';
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
      AchiveItem,
      Contents,
      SideBar
    }
  }

</script>


<style scoped>

  .achives .achives-item {
    width: 640px;
    background: #fff;
    min-height: 470px;
    margin-top: 20px; 

  }

</style>
