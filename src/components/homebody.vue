<template>
    <div class="home-body">
        <mainAdv :mainAdvGame="mainAdvGame" :homeWord="homeWord" :gameList="gameList"/>
		<gamesArea :gameList="gameList" :homeWord="homeWord" />
    </div>
</template>

<script>
import mainAdv from './homebody_mainAdv.vue'
import { mapState } from 'vuex';

import gamesArea from './homebody_gameLsit.vue'

export default {
    computed:{
        ...mapState(['mainAdvGame','gameList','homeWord','shoppingCart'])
    },
    components:{
		gamesArea,
        mainAdv,
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
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home-body{
	justify-content: center;
}
</style>
