<template>
  <div class="productsList">
    <!-- shimmer
    <div class="my-5">
      <b-row v-if="!subCategory.length && loading" class="">
        <b-col
          v-for="index in 4"
          :key="index"
          cols="12"
          sm="6"
          lg="4"
          xl="3"
        >
          <b-skeleton width="100%" height="8rem" />
        </b-col>
      </b-row>
    </div>
    -->

    <product-categories-header :subCategoriesList="subCategory" />
    <b-row class="mb-4">
      <b-col cols="12" lg="3">
        <side-filter
          v-if="filters.length"
          :filters="filters"
          :selectedOptions="selectedOptions"
          @updateFilter="updateFilter"
          @updateChips="updateChips"
          @resetAll="resetAll"
        />
      </b-col>
      <b-col cols="12" lg="9">
        <header-filter
          :filters="chipList"
          :quantity="paginateData.total"
          :subCategoryName="subCategoryName"
          :categoryName="categoryName"
          @removeItem="removeItem"
        />
        <b-row v-if="productsList.length">
          <b-col
            v-for="(product, index) in productsList"
            :key="index"
            xs="12"
            sm="6"
            xl="4"
          >
            <c-product
              :isLoading="false"
              :product="{
                name: product.name,
                img: product.image,
                badgeContent: product.discount ? `${product.discount} %` : '',
                salePrice: product.price_before_discount,
                price: product.price,
                rate: product.rate > 10 ? product.rate / 10 : product.rate,
                ...product
              }"
            />
          </b-col>
        </b-row>
        <b-row
          v-else-if="!loading && productsList.length === 0"
          class="text-center py-5"
        >
          <b-col cols="12">
            <NoProducts class="mb-3" />
            <h6 class="font-weight-bold">
              {{ $t('products.sorryThereAreNoProductsToShow') }}
            </h6>
            <p>{{ $t('products.checkWhatsTrending') }}</p>
          </b-col>
        </b-row>
        <div
          v-if="loading || (loading && productsList.length === 0)"
          class="load-more d-flex justify-content-center align-items-center my-5"
        >
          <img
            src="@/assets/images/nearby-shops/loading.svg"
            class="spinner"
            alt="loading"
          >
          <span>{{ $t('products.loadMore') }}</span>
        </div>
        <div
          v-infinite-scroll="getNextPage"
          :infinite-scroll-disabled="loading"
        />
      </b-col>
    </b-row>
  </div>
</template>
<script>
/* eslint-disable vue/no-unused-components */

import HeaderFilter from '../common/HeaderFilter.vue'
import ProductCategoriesHeader from '../seller-profile-and-category/ProductCategoriesHeader.vue'
import NoProducts from '~/assets/images/svg-icons/NoProducts.vue'
// import ApiServer from '@/services/products'

export default {
  components: { ProductCategoriesHeader, HeaderFilter, NoProducts },
  data () {
    return {
      /// /////////////////////////
      /// // Filter Data
      /// /////////////////////////
      filters: [],
      chipList: [],
      selectedOptions: {},

      /// //////////////////////////////////////////////////
      /// //  category and sub_ category List Data
      /// //////////////////////////////////////////////////
      subCategory: [],
      categoryObj: {},

      /// /////////////////////////
      /// // Products List Data
      /// /////////////////////////
      paginateData: {},
      productsList: [],
      page: 1,
      lastPage: 1,
      loading: false,
      /// /////////////////////////
      /// // Products List Data
      /// /////////////////////////
      routeQuery: this.$route.query,
      cancel: null,
      previousQuery: ''
    }
  },
  async fetch () {
    let query = this.routeQuery
    if (this.$route.params.id && this.$route.name === 'seller-profile-id') {
      query = { ...query, vendor_id: this.$route.params.id }
    }
    this.selectedOptions = { ...query }
    await this.getProducts(query)
    this.getChipsFromQuery(query)
  },
  computed: {
    subCategoryName () {
      const subCategory = parseInt(this.$route.query.subCategory, 10) || null
      if (subCategory && this.subCategory?.length) {
        return this.subCategory.filter(item => item.id === subCategory)[0]?.name
      }
      return ''
    },
    categoryName () {
      if (this.categoryObj?.name) {
        return this.categoryObj.name
      }
      return ''
    }
  },
  watch: {
    '$route.query' (newVal, oldVal) {
      this.productsList = []
      this.routeQuery = newVal
      this.selectedOptions = { ...newVal }

      this.getProducts(newVal)
      // if (newVal.search !== oldVal.search) {
      //   this.getChipsFromQuery(newVal)
      // }
    }
  },
  methods: {
    resetAll () {
      this.selectedOptions = Object.assign({})
      this.chipList = []
      const { category } = this.$route.query
      this.$router.push({
        name: this.$route.name,
        query: {
          category
        }
      })
    },
    updateFilter (filters) {
      this.selectedOptions = { ...filters }
      this.$router.push({
        name: this.$route.name,
        query: {
          ...this.$route.query,
          ...filters
        }
      })
    },
    updateChips (chip) {
      if (chip.type === 'multi') {
        const chipIndex = this.chipList.findIndex(
          item => item.key === chip.key && item.id === chip.id
        )
        if (chipIndex >= 0) {
          return this.chipList.splice(chipIndex, 1)
        }
        this.chipList.push(chip)
      } else if (chip.type === 'single') {
        const chipIndex = this.chipList.findIndex(item => item.key === chip.key)
        if (chipIndex >= 0) {
          return this.chipList.splice(chipIndex, 1, chip)
        }
        this.chipList.push(chip)
      }
    },
    getProducts (query) {
      this.loading = true
      // this.$nuxt.$loading.start()

      const currentQuery = JSON.stringify(query)
      return new Promise((resolve, reject) => {
        if (this.cancel !== null && this.previousQuery === currentQuery) {
          this.cancel.cancel()
        }
        this.cancel = this.$axios.CancelToken.source()

        this.$axios
          .$get('/products', {
            params: {
              ...query
            },
            requestKey: 'customRequestKeyName',
            cancelToken: this.cancel.token
          })
          .then((res) => {
            const { filters, sub_category, category, paginate, data } = res.data
            this.filters = filters
            this.subCategory = sub_category
            this.categoryObj = category
            this.paginateData = paginate
            this.page = paginate.currentPage
            this.lastPage = paginate.lastPage
            this.loading = false
            this.productsList.push(...data)
            this.cancel = null
            this.previousQuery = JSON.stringify(query)
            // this.$nuxt.$loading.finish()
            resolve(res.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    removeItem ({ filter, index }) {
      const { type, key, id } = filter
      const oldQuery = { ...this.$route.query }
      if (type === 'multi') {
        oldQuery[key] = oldQuery[key].filter(item => item !== id)
        this.updateFilter(oldQuery)
      } else if (type === 'single') {
        oldQuery[key] = ''
        this.updateFilter(oldQuery)
      }
      this.chipList.splice(index, 1)
    },
    getNextPage () {
      if (this.page === this.lastPage) {
        return
      }
      this.loading = true
      this.page += 1
      this.getProducts({
        ...this.$route.query,
        page: this.page
      }).then((res) => {
        const { paginate } = res
        this.paginateData = paginate
        this.page = paginate.currentPage
        this.lastPage = paginate.lastPage
        this.loading = false
      })
    },
    getChipsFromQuery (query) {
      Object.keys(query).forEach((item) => {
        if (item !== 'subCategory' && item !== 'category') {
          if (
            typeof query[item] === 'string' &&
            query[item] &&
            !['vendor_id'].includes(item)
          ) {
            if (item !== 'query') {
              this.chipList.push({
                id: query[item],
                name: `${item.charAt(0).toUpperCase() + item.slice(1)} : ${
                  query[item]
                }`,
                key: item,
                type: 'single'
              })
            }
          } else if (Array.isArray(query[item])) {
            query[item].forEach((multiChip) => {
              this.chipList.push({
                id: multiChip,
                name: this.filters
                  .filter(obj => obj.key === item)[0]
                  .options.filter(val => val.id === Number(multiChip))[0].name,
                key: item,
                type: 'multi'
              })
            })
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.productsList {
  .spinner {
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
