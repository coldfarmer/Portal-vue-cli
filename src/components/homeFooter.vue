<template>
  <div class="home-footer">
    <div class="home-footer__content"> 
      <div class="home-footer__content__logo">
        <img src="@/assets/logo.svg">
        <p>Portal</p>
      </div>
      <div class="home-footer__content__contactUS">
        <h4 v-for="(word,wordIndex) in footerWord.ft_01" :key="wordIndex">
          {{word}}
        </h4>
      </div>
      <div class="home-footer__content__infomation">
        <h4 v-for="(word,wordIndex) in footerWord.ft_02" :key="wordIndex">
          {{word}}
        </h4>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';
export default {
  name: 'homeFooter',
  computed:{
    ...mapState(['footerWord'])
  },
  props: {
  
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
