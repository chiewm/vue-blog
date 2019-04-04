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
        width: 300px;
    }
</style>
