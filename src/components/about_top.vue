<template>
    <div class="about-top">
        <div class="about-top__layer">
            <p class="about-top__layer__wrap">{{aboutWord.at_01}}</p> 
            <div class="about-top__layer__intro">
                <p class="title">{{aboutWord.at_02}}</p>
                <p class="text">{{aboutWord.at_03}}</p>
            </div>
            <!-- <div class="about-top__layer__mask1"></div>
            <div class="about-top__layer__mask2"></div> -->
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['aboutWord'])
    }
}
</script>