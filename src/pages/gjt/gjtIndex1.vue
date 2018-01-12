<template>
  <div class="gjtIndex">
    <mt-navbar >
  <mt-tab-item id="1">option A</mt-tab-item>
  <mt-tab-item id="2">option B</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container >
  <mt-tab-container-item id="tab-container1">
    <mt-cell title="tab-container 1">
    </mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container2">
    <mt-cell  title="tab-container 2">
    </mt-cell>
  </mt-tab-container-item>
</mt-tab-container>


  </div>
</template>

<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
export default {
  name: '',
  data () {
    return {
      msg: ''
    }
  },
}
</script>

<style scoped>

</style>
