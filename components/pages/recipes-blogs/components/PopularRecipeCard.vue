<template>
  <div class="recipe">
    <div class="media mb-4">
      <img :src="image" :alt="title">
    </div>
    <h5 class="title">
      {{ title }}
    </h5>
    <a :href="link" class="link">View Recipe</a>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.recipe {
  margin-inline-end: 2rem;
  .media {
    height: 20rem;
    overflow: hidden;
    border-radius: $default-radios * 2;
  }
  .title {
    color: $gray-dark;
  }
  .link {
    color: $main-color;
  }
}
</style>
