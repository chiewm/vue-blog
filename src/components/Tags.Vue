<!--<template>
  <div class="tags">
    <top-bar></top-bar>
    <div class="container">
      <div style="float:right">
        <side-bar></side-bar>
      </div>
      <div class="tags-item">
        <tag-item></tag-item>
      </div>

      <div>
      </div>


    </div>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar';
  import TagItem from '@/components/TagItem';
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
      TagItem,
      Contents,
      SideBar
    }
  }

</script>


<style scoped>

  .tags .tags-item {
    width: 640px;
    background: #fff;
    min-height: 470px;
    margin-top: 20px; 

  }

</style>
-->

<template>
  <div>
    <top-bar></top-bar>
    <div class="container">
      <div class="tags">
        <tag-item></tag-item>
      </div>
      <side-bar></side-bar>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar';
  import TagItem from '@/components/TagItem';
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
      TagItem,
      Contents,
      SideBar
    }
  }

</script>


<style scoped>

  .tags{
   width: 580px;
  }

  .tags {
 
    background: #fff;
    min-height: 470px;
    margin-top: 20px;
    margin-right: 20px; 

  }


  
  @media screen and (min-width: 320px) and (max-width: 1024px) {
    .tags {
      margin-top: 40px;
      width: 100%;
      margin-right: 0; 
    }
  }

</style>
