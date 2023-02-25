<template>
  <div v-if="vendorData && vendorData.company_name" class="container">
    <c-headerMedia
      :title="vendorData.company_name"
      no-backrgound
      :image="vendorData.cover_photo"
    />
    <b-row align-v="end">
      <b-col cols="12" lg="6">
        <seller-data :vendor-data="vendorData" />
      </b-col>
      <b-col cols="12" lg="6">
        <seller-rate />
      </b-col>
    </b-row>
    <hr>
    <products-list />
  </div>
</template>
<script>
/* eslint-disable vue/no-unused-components */

import HeaderFilter from '../common/HeaderFilter.vue'
import ProductCategoriesHeader from './ProductCategoriesHeader.vue'
import SellerData from './SellerData.vue'
import SellerRate from './SellerRate.vue'
import productsList from '@/components/pages/products/ProductsList.vue'
// import productsApi from '@/services/products'

export default {
  components: {
    ProductCategoriesHeader,
    SellerData,
    SellerRate,
    HeaderFilter,
    productsList
  },
  props: {
    vendorData: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped></style>
