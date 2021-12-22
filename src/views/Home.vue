<template>
  <div class="home">
    <homeHeader />
    <homebody />
    <homeFooter />
  </div>
</template>

<script>
import homeHeader from '@/components/homeHeader.vue'
import homeFooter from '@/components/homeFooter.vue'
import homebody from '@/components/homebody.vue'


export default {
  name: 'Home',
  components: {
    homeHeader,
    homeFooter,
    homebody
  }
}
</script>
<style scoped>

.test::-webkit-media-controls-enclosure{ 
    display: none;
}
</style>
