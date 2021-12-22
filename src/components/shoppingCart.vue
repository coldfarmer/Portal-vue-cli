<template>
    <div class="shoppingCart" :class="{hiden:cartShow}">
        <div class="shoppingCart__mask" @click="closeCart()"></div>
        <div class="shoppingCart__triangal" :class="{hiden:cartShow}">
        </div>
        <div class="shoppingCart__games"> 
          <div class="shoppingCart__games__empty" v-if="shoppingCart.length == 0">
            <h3>{{homeWord.ht_18}}</h3>
          </div>
          <div class="shoppingCart__games__game" v-for="(game,gameIndex) in shoppingCart" :key='gameIndex'  @click="toGamePage(game,$event)">
              <img :src="require(`@/assets/gamesImg/${game.imgUrl}.jpg`)">
              <h4>{{game.name}}</h4>
              <h4 class="shoppingCart__games__game__price">{{homeWord.ht_02}} {{Math.floor(game.price*(1-game.Discount))}}</h4>
              <h5 id ="gameCartDel" @click="deleteGame(game)">{{homeWord.ht_21}}</h5>
          </div>
        </div>
        <div class="shoppingCart__count"> 
          <div class="shoppingCart__count__price">
            <h3>{{homeWord.ht_17}}</h3>
            <h3>{{homeWord.ht_02}} {{totalPrice}}</h3>
          </div>
          <div class="shoppingCart__count__control">
            <h3 class="shoppingCart__count__control__buy buyBtm" @click="patAlert()">{{homeWord.ht_19}}</h3>
          </div>
        </div>
    </div>
</template>

<script>



export default {
  props:['cartShow','shoppingCart','gameList','homeWord'],
  methods:{
      toGamePage(game,event){
        let target = event.target.id;
        if(target != "gameCartDel"){
          let ID =this.gameList.indexOf(game);
          this.$router.push({path: "/Game",query:{gameID:ID}});
          this.$parent.changeCart();
        }
      },
      closeCart(){
        this.$parent.changeCart();
      },
      patAlert(){
        if(this.shoppingCart.length > 0){
          alert(this.homeWord.ht_20);
        }else{
          alert(this.homeWord.ht_18);
        }
      },
      deleteGame(game){
        let id = this.shoppingCart.indexOf(game);
        console.log(id);
        this.$store.commit("delGameCart",id);
      }
  },
  computed:{
    totalPrice:function(){
        let price = 0;
        this.shoppingCart.forEach(element => {
          price = price + Math.floor(element.price*(1-element.Discount));
        });
        return price
    }
  },
  components: {
  }
}
</script>
