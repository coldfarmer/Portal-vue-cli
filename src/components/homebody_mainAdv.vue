<template>
    <div class="mainAdv">
        <div class="mainAdv__content" :class="{finalAdv:closeAnimate}" id="mainAdv__content" :style="`transform:translateX(-${Advposition}%)`" @mouseover="pauseSlide()" @mouseout="AutoSlide()">
            
            <div class="mainAdv__content__Adv" v-for="(Adv,Advindex) in mainAdvGame" :key="Advindex"> 
                <img :src="getphoto(Adv.imgUrl)" @click="toGamePage(Adv.gameId)">
                <div class="mainAdv__content__Adv__shadow"></div>
                <div class="mainAdv__content__Adv__price price_big">
                    <p v-if="Adv.Discount != 0" class="discount">- {{Adv.Discount*100}}%</p>
                    <p><span> {{homeWord.ht_02}}</span> {{Math.floor(Adv.price*(1-Adv.Discount))}}</p>
                </div>
                <div class="mainAdv__content__Adv__addtoCard addtoCard_big" @click="addGameToCart(Adv.gameId)">
                    <h4>{{homeWord.ht_01}}</h4>
                    <img src="@/assets/icon/Icon_add-shopping-cart.svg">
                </div>
            </div>

            <div class="mainAdv__content__Adv">
                <img :src="getphoto(mainAdvGame[advPre].imgUrl)">
                <div class="mainAdv__content__Adv__shadow"></div>
                <div class="mainAdv__content__Adv__price price_big">
                    <p v-if="mainAdvGame[advPre].Discount != 0" class="discount">- {{mainAdvGame[advPre].Discount*100}}%</p>
                    <p ><span>{{homeWord.ht_02}}</span> {{Math.floor(mainAdvGame[advPre].price*(1-mainAdvGame[advPre].Discount))}}</p>
                </div>
                <div class="mainAdv__content__Adv__addtoCard addtoCard_big">
                    <h4>{{homeWord.ht_01}}</h4>
                    <img src="@/assets/icon/Icon_add-shopping-cart.svg">
                </div>
            </div>
        </div>

        <div class="mainAdv__Adv-control">
            <div @click="slideNext()" @mouseover="pauseSlide()" @mouseout="AutoSlide()"><img src="@/assets/icon/Icon_arrow_right.svg"></div>
            <div @click="slidePre()" @mouseover="pauseSlide()" @mouseout="AutoSlide()"><img src="@/assets/icon/Icon_arrow_left.svg"></div>
        </div>
    </div>
</template>

<script>
export default {
    props:["mainAdvGame","homeWord","gameList"],
    data(){
        return{
            advPre:0,
            Advposition:20,
            closeAnimate:false,
            AutoslideSecond:3000,
            intervalID:0,
        }
    },
    methods:{
        getphoto(img){
            return img ? require("@/assets/gamesImg/" + img + ".svg") : ''
        },
        slideNext(){
            let pos = this.Advposition;
              if(pos < 60){
                this.Advposition = this.Advposition + 20;
              }else{
                this.closeAnimate  = true;
                setTimeout(() => {
                   this.Advposition = 20; 
                   this.closeAnimate  = false;
                }, 100);
                this.Advposition = 0;
              }
        },
        slidePre(){
            let pos = this.Advposition;
            if(pos > 0){
                this.Advposition = this.Advposition - 20;
            }else{
                this.closeAnimate  = true;
                setTimeout(() => {
                   this.Advposition = 40; 
                   this.closeAnimate  = false;
                }, 100);
                this.Advposition = 60;
            }
        },
        AutoSlide(){
            var vue = this;
            this.intervalID=setInterval(()=>{
                slide();
            }, vue.AutoslideSecond);

            let slide = function(){
                setTimeout(()=>{
                    vue.slideNext();
                },0);
            }
        },
        pauseSlide(){
            window.clearInterval(this.intervalID);
        },
        toGamePage(game){
            this.gameList.forEach((element,index) => {
                if(element.imgUrl == game){
                    this.$router.push({path: "/Game",query:{gameID:index}});
                }
            });
        },
        addGameToCart(gameID){
            this.gameList.forEach(element => {
                if(element.imgUrl == gameID){
                    this.$parent.addGameToCart(element);
                }
            });
        }
    },
    mounted(){
        this.AutoSlide();
    }

}
</script>


<style scoped>

</style>
