<template>
  <div class="game-body">
    <h2>{{gameList[this.$route.query.gameID].name}}</h2>
    <div class="game-body__content"> 

      <video class="game-body__content__video" :src="require(`@/assets/video/${gameList[this.$route.query.gameID].imgUrl}.webm`)"  type="video/webm" autoplay muted loop>
      </video>
      
      <div  class="game-body__content__info" >
          <img :src="require(`@/assets/gamesImg/${gameList[this.$route.query.gameID].imgUrl}.jpg`)">
          <div class="game-body__content__info__text"> 
            <h4 class="title">{{homeWord.ht_10}} :</h4>
            <h4 class="info">{{gameList[this.$route.query.gameID].name}}</h4>
            <h4 class="title">{{homeWord.ht_06}} :</h4>
            <h4 class="info">{{gameList[this.$route.query.gameID].score}} {{homeWord.ht_07}}</h4>
            <h4 class="title">{{homeWord.ht_08}} :</h4>
            <h4 class="info">{{Math.floor(100-gameList[this.$route.query.gameID].Discount*100)/10}} {{homeWord.ht_11}}</h4>
            <h4 class="title">{{homeWord.ht_12}} :</h4>
            <h4 class="info">
              {{homeWord.ht_02}} {{Math.floor(gameList[this.$route.query.gameID].price*(1-gameList[this.$route.query.gameID].Discount))}} {{homeWord.ht_13}} 
              <span class="origin_price" v-if="gameList[this.$route.query.gameID].Discount!=0">{{gameList[this.$route.query.gameID].price}} {{homeWord.ht_13}}</span>
            </h4>
            <div class="addtoCard_small" @click="addGameToCart(gameList[$route.query.gameID])">
              <h5>{{homeWord.ht_01}}</h5>
              <img src="@/assets/icon/Icon_add-shopping-cart.svg">
            </div>
          </div>
      </div>

      <h3 class="game-body__content__title game_title">
        <img :src="require(`@/assets/icon/Icon_pencil.svg`)">
        {{homeWord.ht_04}}
      </h3>

      <h4>{{gameList[this.$route.query.gameID].discribe}}</h4>

      <h3 class="game-body__content__title game_title">
        <img :src="require(`@/assets/icon/Icon_desktop.svg`)">
        {{homeWord.ht_05}}
      </h3>

      <h4 v-for="(req,req_index) in gameList[this.$route.query.gameID].system_req" :key="req_index">
        {{req}}
      </h4>

      <div class="game-body__content__empty">
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['gameList','homeWord','shoppingCart'])
    },
    data(){
        return{

        }
    },
    methods:{
      addGameToCart(game){
         if(this.shoppingCart.length<10){
            let gamecart = this.shoppingCart.indexOf(game);
            if(gamecart == -1){
                this.$store.commit("addGameCart",game);
                alert(game.name + this.homeWord.ht_16);
            }else{
                alert(this.homeWord.ht_15);
            }
          }else{
            alert(this.homeWord.ht_14);
          }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>