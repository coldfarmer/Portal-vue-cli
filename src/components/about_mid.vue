<template>
    <div class="about-mid" id='test222'>
        <div class="about-mid__content">
            <div class="about-mid__content__block" v-for="(intro,index) in aboutWord.at_07" :key="index" :class="{scrollHiden:scrollDistance <= scroll_first + index*scroll_next}">
                <img :src="require(`@/assets/about/${intro.imgUrl}.png`)" v-if="index%2 != 0">
                <div class="about-mid__content__block__text" :class="{right: index%2 == 0,left:index%2 != 0}">
                    <p class="title">{{intro.title}}</p>
                    <p class="text">{{intro.text}}</p>
                </div>
                <img :src="require(`@/assets/about/${intro.imgUrl}.png`)"  v-if="index%2 == 0">
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            scrollDistance:0,
            scroll_first:250,
            scroll_next:425
        }
    },
    computed:{
        ...mapState(['aboutWord']),
        testHeight:function() {
            let test = document.getElementById('test222').offsetTop;
            // let test = document.getElementById('test222').getBoundingClientRect().top;
            //  let test = document.documentElement.scrollHeight - document.documentElement.clientHeight;//底部觸發用
            return test
        }
    },
    methods:{
        handleScroll(){
            // let height = document.body.scrollTop+document.documentElement.scrollTop;
            // let height = document.documentElement.scrollHeight - document.documentElement.clientHeight - window.scrollY;//離底部距離
            let height = window.scrollY;
            this.scrollDistance = height;
            console.log(height);
        }
    },
    mounted(){
         window.addEventListener('scroll', this.handleScroll, true);
    }
}
</script>