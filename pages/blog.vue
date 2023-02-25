<template>
  <div class="container">
    <c-header-media
      title="Coffee Music in a cup!"
      :image="require('@/assets/images/blog/header.jpg')"
    />
    <div
      class="blog-reviews d-flex justify-content-center align-items-center my-4"
    >
      <nuxt-link tag="button" to="/blog/articles">
        Articles
      </nuxt-link>
      <nuxt-link tag="button" to="/blog/reviews">
        Reviews
      </nuxt-link>
    </div>
    <nuxt-child />
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.blog-reviews {
  color: #000;
  button {
    border: 1px solid #e3e3e3;
    padding: 0.75rem;
    padding-top: 1rem;
    width: 13rem;
    margin: 0 0.5rem;
    border-radius: $default-radios;
    background-color: transparent;
    transition: $default-transition;
    &.nuxt-link-exact-active {
      color: $main-color;
      box-shadow: 0 0 7px rgba($color: $main-color, $alpha: 0.41);
      border-color: $main-color;
    }
    &:hover {
      color: $main-color;
    }
  }
}
</style>
