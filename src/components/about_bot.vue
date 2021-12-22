<template>
    <div class="about-bot">
      <div class="about-bot__title">
          <p class="about-bot__title__big">{{aboutWord.at_04}}</p>
          <p class="about-bot__title__small">{{aboutWord.at_05}}</p>
      </div>
      <div class="about-bot__content">
          <div class="about-bot__content__block" v-for="(text,textIndex) in aboutWord.at_06" :key="textIndex">
              <div class="about-bot__content__block__icon">
                <img :src="require(`@/assets/icon/${text.imgUrl}.svg`)">
              </div>
              <div class="about-bot__content__block__text">
                <p class="title">{{text.title}}</p>
                <p class="text">{{text.text}}</p>
              </div>
          </div>
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