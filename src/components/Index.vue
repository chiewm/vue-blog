<template>
  <div>
    <top-bar></top-bar>
    <div class="container">
         <div style="float:right">
        <side-bar></side-bar>
      </div>
      <div class="index">
        <content-bar></content-bar>
        <contents></contents>
   </div>
 

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
              box-shadow: 0 1px 2px 0 rgba(0,0,0,.05); 
}
</style>
