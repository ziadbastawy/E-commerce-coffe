<template>
  <div class="recipes-list">
    <div class="recipes-blog-filter">
      <div v-for="(filter, id) in filters" :key="id" class="filter my-2">
        <input :id="filter" type="checkbox" name="filter" class="d-none">
        <label :for="filter" class="m-0 rounded-pill text-center">{{
          filter
        }}</label>
      </div>
    </div>
    <div class="recipes">
      <h3 class="title">
        Coffee Recipes
      </h3>
      <div v-for="(recipe, id) in recipes" :key="id">
        <recipe
          :image="recipe.image"
          :title="recipe.title"
          :description="recipe.description"
          :big-media="recipe.bigMedia"
          :link="'/single-recipe'"
        />
      </div>
    </div>
    <b-pagination
      v-model="currentPage"
      class="coffee-pagination my-5"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="recipesList"
      align="center"
      first-number
      last-number
      pills
      next-class="next"
      prev-class="prev"
    >
      <template #prev-text>
        <b-icon-chevron-left />
      </template>
      <template #next-text>
        <b-icon-chevron-right />
      </template>
    </b-pagination>
  </div>
</template>
<script>
import { BIconChevronLeft, BIconChevronRight } from 'bootstrap-vue'
import recipe from '../components/SingleItem.vue'
export default {
  components: {
    recipe,
    BIconChevronLeft,
    BIconChevronRight
  },
  data () {
    return {
      perPage: 1,
      currentPage: 1,
      filters: [
        'Cappuccino',
        'Americano',
        'Espresso',
        'Doppio',
        'Cortado',
        'Red Eye',
        'Galão',
        'Macchiato',
        'Ristretto'
      ],
      recipes: [
        {
          title: 'New Orleans Coffee (Cafe Noir)',
          image: require('@/assets/images/recipes/list/New-Orleans-Coffee-Cafe-Noir.jpg'),
          description:
            'New Orleans is known for plenty of unique and delicious foods, including its famous hot coffee. You make it with basic drip-ground coffee, plus chicory, a dried herb that gives this brew its signature chocolate-caramel flavor, intensely dark color, and thick consistency.'
        },
        {
          title: 'Cold Brew Coffee',
          image: require('@/assets/images/recipes/list/Cold-Brew-Coffee.jpg'),
          description:
            'You need no special equipment to make delicious cold brew coffee. The simple method of steeping ground coffee beans in cold water yields a rich-tasting brew, without any bitter flavor. It makes a great overnight recipe in the summer when you\'re expecting guests the next day. Serve in tall glasses over ice.'
        },
        {
          title: 'Affogato',
          image: require('@/assets/images/recipes/list/Affogato.jpg'),
          description:
            'Fresh-brewed espresso and vanilla ice cream make a fabulous after-dinner coffee dessert. The Italian affogato is an easy recipe that can be made with a stovetop espresso maker or any strong coffee if you don\'t have a separate machine. Be sure to freeze the glasses as it\'s the secret to avoiding melted ice cr..'
        },
        {
          title: 'Maple Pecan Latte',
          image: require('@/assets/images/recipes/list/Maple-Pecan-Latte.jpg'),
          description:
            'A coffee shop favorite during fall and winter, it\'s easy to make a maple pecan latte at home. You\'ll start by making the sweetener, and the maple pecan syrup is enough for many lattes. When it\'s time for a drink, simply mix it with fresh-brewed espresso and steamed milk.'
        },
        {
          title: 'White Chocolate Mocha',
          image: require('@/assets/images/recipes/list/White-Chocolate-Mocha.jpg'),
          description:
            'Does the thought of a sweet, creamy white chocolate latte make you weak in the knees? We can\'t make the cravings stop—but we can share this dreamy recipe, so you can skip the drive to the coffee shop this winter.'
        },
        {
          title: 'White Chocolate Mocha',
          image: require('@/assets/images/recipes/list/White-Chocolate-Mocha.jpg'),
          description:
            'Does the thought of a sweet, creamy white chocolate latte make you weak in the knees? We can\'t make the cravings stop—but we can share this dreamy recipe, so you can skip the drive to the coffee shop this winter.'
        },
        {
          title: 'White Chocolate Mocha',
          image: require('@/assets/images/recipes/list/White-Chocolate-Mocha.jpg'),
          description:
            'Does the thought of a sweet, creamy white chocolate latte make you weak in the knees? We can\'t make the cravings stop—but we can share this dreamy recipe, so you can skip the drive to the coffee shop this winter.'
        }
      ]
    }
  },
  computed: {
    rows () {
      return this.recipes.length
    }
  }
}
</script>
<style lang="scss"></style>
