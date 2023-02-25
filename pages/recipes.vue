<template>
  <div class="container">
    <c-headerMedia
      title="Coffee Recipes That Let You Be Your Own Barista"
      :image="require('@/assets/images/recipes/header.jpg')"
      class="mb-5 mt-4"
    />
    <slider />
    <recipes />
  </div>
</template>
<script>
import slider from '@/components/pages/recipes-blogs/Recipes/PopularRecipes.vue'
import recipes from '@/components/pages/recipes-blogs/Recipes/RecipesByCategory.vue'
export default {
  components: { slider, recipes }
}
</script>
<style lang="scss" scoped></style>
