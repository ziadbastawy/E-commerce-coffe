<template>
  <div>
    <reviews />
    <b-pagination
      v-model="currentPage"
      class="coffee-pagination my-5"
      :total-rows="10"
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
import Reviews from '~/components/pages/recipes-blogs/reviews/list.vue'
export default {
  components: {
    BIconChevronLeft,
    BIconChevronRight,
    Reviews
  },
  data () {
    return {
      perPage: 1,
      currentPage: 1
    }
  }
}
</script>
<style lang="scss" scoped></style>
