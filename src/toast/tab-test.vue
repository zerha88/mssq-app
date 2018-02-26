<template>
  <div class="tab-test">
    <navTabs></navTabs>
    <test1 v-if="tabStatus===0"></test1>
    <test2 v-if="tabStatus===1"></test2>
    <test3 v-if="tabStatus===2"></test3>
  </div>
</template>

<script>
import navTabs from "./nav-tabs.vue"
import test1 from "./test1.vue"
import test2 from "./test2.vue"
import test3 from "./test3.vue"

export default {
  name: '',
  data () {
    return {
      tabStatus:0,
      msg: ''
    }
  },
  components:{
    navTabs:navTabs,
    test1: test1,
    test2: test2,
    test3: test3,
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
