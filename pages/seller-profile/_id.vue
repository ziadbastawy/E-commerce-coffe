<template>
  <seller-profile :vendor-data="vendorData" />
</template>
<script>
import SellerProfile from '~/components/pages/seller-profile-and-category/SellerProfile.vue'
import productsApi from '@/services/products'

export default {
  components: { SellerProfile },
  async asyncData ({ params }) {
    let vendorData = {}
    await productsApi
      .vendorData(params.id)
      .then((res) => {
        vendorData = { ...res.data }
      })
      .catch(() => {

      })
    return { vendorData }
  }
}
</script>
<style lang="scss" scoped></style>
