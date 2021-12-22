<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <loading v-if="show"/>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import loading from '@/components/loading.vue'
export default {
  components: {
    loading
  },
  data(){
    return{
      show:true,
    }
  },
  methods:{
    loadPageWord(){
      this.show=true;
      axios.get('language/word.json').then(response => {
        console.log(response.data);
        this.$store.commit("updateWord",response.data);
        this.loadGames();
        setTimeout(()=>{
          this.show=false;
        },1000);
        }, response => {
        console.log(response);
      });
    },
    loadGames(){
      this.show=true;
      axios.get('language/gameList.json').then(response => {
        this.$store.commit("updateGames",response.data);
        setTimeout(()=>{
          this.show=false;
        },1000);
        }, response => {
        console.log(response);
      });
    }
  },
  mounted(){
    this.loadPageWord();
  }
}
</script>


<style lang="scss">
@import "./sass/all.scss";
</style>
