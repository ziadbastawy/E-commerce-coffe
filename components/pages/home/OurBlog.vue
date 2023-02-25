<template>
  <b-container>
    <BlogHead class="section-margin-bottom" />
    <SliderArticle class="section-margin-bottom" />
  </b-container>
</template>
<script>
import BlogHead from './components/BlogHead.vue'
import SliderArticle from './components/SliderArticle.vue'
export default {
  components: {
    BlogHead,
    SliderArticle
  },
  data () {
    return { count: 0 }
  }
}
</script>
<style lang="scss" scoped>
.class-name {
  padding: 2rem;
  background: #000;
}
</style>
