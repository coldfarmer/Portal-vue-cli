import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		headerWord:[],
		footerWord:[],
		homeWord:[],
		aboutWord:[],
		mainAdvGame:[],
		gameList:[],
		shoppingCart:[],
    },
	mutations:{
		updateWord(state,word){
			state.headerWord = word.headerWord;
			state.footerWord = word.footerWord;
			state.homeWord = word.homeWord;
			state.aboutWord = word.aboutWord;
		},
		updateGames(state,word){
			state.mainAdvGame = word.mainAdvGame;
			state.gameList = word.games;
		},
		addGameCart(state,word){
			state.shoppingCart.push(word);
		},
		delGameCart(state,word){
			state.shoppingCart.splice(word,1);
		}
	}
})
