<template>
    <div class="home-body__game-list">
        <div class="home-body__game-list__content">
            <div class="home-body__game-list__content__title">
               <img src="@/assets/icon/Icon_logo-game.svg">
               <h3>{{homeWord.ht_03}}</h3>
            </div>
            <div class="home-body__game-list__content__game-area">
                <div class="home-body__game-list__content__game-area__game-block" v-for="(game,gameIndex) in page_gameData" :key="gameIndex">
                    <img class="game_img" :src="require(`@/assets/gamesImg/${game.imgUrl}.jpg`)" @click="toGamePage(gameIndex)">
                    <video :src="require(`@/assets/video/${game.imgUrl}.webm`)" type="video/webm" autoplay muted loop  @click="toGamePage(gameIndex)">
                    </video>
                    <h3 class="game_title">{{game.name}}</h3>
                    <div class="price_small" autoplay:true>
                        <p v-if="game.Discount != 0" class="discount">- {{game.Discount*100}}%</p>
                        <p>
                            <span> {{homeWord.ht_02}}</span>
                            {{Math.floor(game.price*(1-game.Discount))}}
                            <span class="origin_price" v-if="game.Discount != 0"> {{game.price}}</span> 
                        </p>
                        <div class="addtoCard_small"  @click="addGameToCart(game)">
                            <h5>{{homeWord.ht_01}}</h5>
                            <img src="@/assets/icon/Icon_add-shopping-cart.svg">
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-body__game-list__content__page-menu">
                <p @click="nextPage()">❮</p>
                <p v-for="(page,pageIndex) in page_menuData" :key="pageIndex" :class="{selected_page:selected_page-1 == pageIndex}" @click=" toPage(pageIndex+1)">
                    {{pageIndex+1}}
                </p>
                <p @click="prePage()">❯</p>
            </div>
        </div>   
    </div>
</template>

<script>
export default {
    props:["gameList","homeWord"],
    data(){
        return{
            selected_page:1,
            pageSize:6,
        }
    },
    methods:{
        toPage(page){
            this.selected_page=page;
            window.scrollTo(top);
        },
        nextPage(){
            if(this.selected_page>1){
                this.selected_page = this.selected_page-1;
                window.scrollTo(top);
            }
        },
        prePage(){
            if(this.selected_page<this.page_menuData){
                this.selected_page = this.selected_page+1;
                window.scrollTo(top);
            }
        },
        toGamePage(ID){
            this.$router.push({path: "/Game",query:{gameID:ID + (this.selected_page-1)*this.pageSize}});
        },
        addGameToCart(game){
            this.$parent.addGameToCart(game);
        }
    },
    computed:{
        page_gameData:function(){
            return  this.gameList.slice((this.selected_page-1)*this.pageSize,this.pageSize*this.selected_page)
        },
        page_menuData:function(){
            return Math.ceil(this.gameList.length/this.pageSize) 
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
