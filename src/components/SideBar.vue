<template>
  <div class="sidebar">
    <tag></tag>
    <hot></hot>
    <wechat></wechat>
  </div>

</template>

<script>
import Tag from '@/components/widgets/Tag';
import Hot from '@/components/widgets/Hot';
import Wechat from '@/components/widgets/Wechat';
// import Archive from '@/components/widgets/Archive';
  export default {
    name: 'SideBar',
    data() {
      return {

      }
    },
    components:{
        Tag,
        Hot,
        Wechat
        // Archive
    }

  }

</script>

<style scoped>
.sidebar {
  margin-top: 20px; 
  width: 280px;
}

@media screen and (min-width: 320px) and (max-width: 1024px) {
    .sidebar {
        width: 100%;

    }
}


</style>
