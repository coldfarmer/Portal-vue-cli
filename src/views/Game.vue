<template>
  <div class="game">
    <homeHeader />
    <gamebody />
    <homeFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from '@/components/homeHeader.vue'
import homeFooter from '@/components/homeFooter.vue'
import gamebody from '@/components/gamebody.vue'


export default {
  name: 'Game',
  components: {
    homeHeader,
    homeFooter,
    gamebody
  }
}
</script>
<style scoped>
</style>