<template>
  <div class="common-page-footer-wrapper">
    <div v-if="!isLoading" class="">{{loadText}}</div>
    <div v-else class="">
      加载中...
    </div>
  </div>
</template>
<script type="text/javascript">
import loading from 'common/loading';
export default {
  props: ['loadText', 'isLoading'],
  components: {
    loading
  }
};

</script>
<style lang="less" scoped>


</style>
