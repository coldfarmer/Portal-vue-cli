<template>
  <div class="about">
    <homeHeader/>
    <aboutTop/>
    <aboutMid />
    <aboutBot/>
    <homeFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from '@/components/homeHeader.vue'
import aboutTop from '@/components/about_top.vue'
import aboutMid from '@/components/about_mid.vue'
import aboutBot from '@/components/about_bot.vue'
import homeFooter from '@/components/homeFooter.vue'


export default {
  name: 'About',
  components: {
    homeHeader,
    homeFooter,
    aboutTop,
    aboutMid,
    aboutBot 
  }
}
</script>