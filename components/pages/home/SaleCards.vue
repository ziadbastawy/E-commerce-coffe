<template>
  <b-container>
    <b-row class="align-items-end">
      <b-col
        v-for="pageCard in inPage"
        :key="pageCard.id"
        class="mb-3"
        cols="12"
        md="6"
      >
        <div class="sale-offer w-100" @click="goTo(pageCard)">
          <a v-show="!loading" class="w-100">
            <b-img class="w-100" :src="pageCard.image" :alt="pageCard.name" />
          </a>
          <b-skeleton-img v-if="loading" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'SaleCards',
  props: {
    inPage: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return { loading: true }
  },
  mounted () {
    this.loading = false
  },
  methods: {
    goTo (pageCard) {
      if (pageCard.product_id) {
        this.$router.push({
          name: 'single-product-id',
          params: { id: pageCard.product_id }
        })
      } else {
        this.$router.push({
          name: 'products',
          query: {
            category: pageCard.category_id,
            subCategory: pageCard.sub_category_id
          }
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.sale-offer {
  border-radius: 0.6rem;
  overflow: hidden;
  img {
    max-height: 30rem;
  }
}
</style>
