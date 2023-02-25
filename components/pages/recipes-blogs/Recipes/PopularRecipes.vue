<template>
  <div class="popular-recipes my-4">
    <h2 class="title px-3">
      Popular Recipes
    </h2>
    <c-slider :slides-to-show="3.5" class="my-4">
      <template #items>
        <div v-for="(recipe, index) in recipes" :key="index">
          <Recipe
            :image="recipe.image"
            :title="recipe.title"
            :link="recipe.link"
          />
        </div>
      </template>
    </c-slider>
  </div>
</template>
<script>
import Recipe from '../components/PopularRecipeCard.vue'
export default {
  components: { Recipe },
  data () {
    return {
      recipes: [
        {
          image: require('@/assets/images/recipes/French-Cafe-au-Lait.jpg'),
          title: 'French Cafe au Lait',
          link: '#'
        },
        {
          image: require('@/assets/images/recipes/Pour-Over-Coffee.jpg'),
          title: 'Pour-Over Coffee',
          link: '#'
        },
        {
          image: require('@/assets/images/recipes/Cuban-Coffee-Cafecito.jpg'),
          title: 'Cuban Coffee (Cafecito)',
          link: '#'
        },
        {
          image: require('@/assets/images/recipes/The-Perfect-Cappuccino.jpg'),
          title: 'The Perfect Cappuccino',
          link: '#'
        },
        {
          image: require('@/assets/images/recipes/French-Cafe-au-Lait.jpg'),
          title: 'French Cafe au Lait',
          link: '#'
        },
        {
          image: require('@/assets/images/recipes/Pour-Over-Coffee.jpg'),
          title: 'Pour-Over Coffee',
          link: '#'
        },
        {
          image: require('@/assets/images/recipes/Cuban-Coffee-Cafecito.jpg'),
          title: 'Cuban Coffee (Cafecito)',
          link: '#'
        },
        {
          image: require('@/assets/images/recipes/The-Perfect-Cappuccino.jpg'),
          title: 'The Perfect Cappuccino',
          link: '#'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  color: $gray-dark;
}
</style>
