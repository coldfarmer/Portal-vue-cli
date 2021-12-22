<template>
  <div class="home-header">
    <div class="home-header__content">
      <div class="home-header__content__logo" @click="changeView(0)">
        <img src="@/assets/logo.svg">
        <p>{{aboutWord.at_01}}</p>
      </div>

      <div class="home-header__content__page-list" v-bind:class="{searchShow:searchShow}">
          <h4 class="page-list" v-for="(word,wordIndex,index) in headerWord" :key="index" :class="{selectedView:viewLink[index]==$route.name}" @click="changeView(index)">
            {{word}}
          </h4>
      </div>

      <div class="home-header__content__searchBar" v-bind:class="{searchShow:searchShow}">
         <img class="icon" src="@/assets/icon/Icon_search.svg">
         <input type="text" v-model="search_input">
         <div class="home-header__content__searchBar__search-result">
            <div class="home-header__content__searchBar__search-result__game" v-for="(result,serach_index) in search_array.slice(0,5)" :key="serach_index" @click="toGamePage(result.gameId)">
                <img :src="require(`@/assets/gamesImg/${gameList[result.gameId].imgUrl}.jpg`)">
                <p>{{gameList[result.gameId].name}}</p>
            </div>
         </div>
      </div>

      <div class="home-header__content__search">
        <div class="home-header__content__search__input"></div>
        <div class="home-header__content__search__shoppingCart">
          <img class="icon" src="@/assets/icon/Icon_shopping-cart.svg" @click="changeCart(),closedSearch()">
          <p>{{shoppingCart.length}}</p>
        </div>
        <img class="icon" :src="require(`@/assets/icon/Icon_${searchIcon}.svg`)" @click="showSearch(),closedCart()">
      </div>
      <shoppingCart :cartShow="cartShow" :shoppingCart="shoppingCart" :gameList="gameList"  :homeWord="homeWord"/>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';
import shoppingCart from './shoppingCart.vue'

export default {
  name: 'homeHeader',
  components:{
    shoppingCart
  },
  computed:{
    ...mapState(['headerWord','homeWord','aboutWord','selectedView','gameList','shoppingCart','shoppingCart']),
    search_array:function() {
      let array = [];
      this.gameList.forEach((element,index) => {
        let search = element.name.toLowerCase().indexOf(this.search_input.toLowerCase());
        if(search > -1 & this.search_input != ''){
           array.push({'pos':search,'gameId':index});
        }
      });
      array = array.sort(function (a, b) {
        return a.pos < b.pos ? -1 : 1;
      });

      return array
    }
  },
  data(){
    return{
      searchShow:false,
      searchIcon:'search',
      viewLink:['Home','About'],
      search_input:'',
      cartShow:true
    }
  },
  methods:{
    changeView(index){
      this.$router.push({ name: this.viewLink[index]});
      console.log(this.$route.name);
    },
    showSearch(){
      if(this.searchShow){
        this.searchShow=false;
        this.searchIcon='search'
         this.search_input='';
      }else{
        this.searchShow=true;
        this.searchIcon='close'
      }
    },
    toGamePage(ID){
      this.$router.push({path: "/Game",query:{gameID:ID}});
      this.search_input='';
    },
    changeCart(){
      if(this.cartShow){
        this.cartShow=false;
      }else{
        this.cartShow=true;
      }
    },
    closedCart(){
        this.cartShow=true;
    },
    closedSearch(){
      this.searchShow=false;
      this.searchIcon='search'
      this.search_input='';
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
