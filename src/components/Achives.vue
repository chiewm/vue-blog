<template>
  <div>
    <top-bar></top-bar>
    <div class="container">
      <div class="achives">
        <achive-item></achive-item>
      </div>
      <side-bar></side-bar>
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

  .achives{
   width: 580px;
  }

  .achives {
 
    background: #fff;
    min-height: 470px;
    margin-top: 20px;
    margin-right: 20px; 

  }


  
  @media screen and (min-width: 320px) and (max-width: 768px) {
    .achives {
      margin-top: 40px;
      width: 100%;
      margin-right: 0; 
    }
  }

    
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .achives {
      width: 100%;
      margin-right: 0; 
      margin-top: 20px;
    }
  }

</style>
