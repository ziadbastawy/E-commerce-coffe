<template>
  <div>
    <SingleProduct :productDetails="productDetails" />
  </div>
</template>

<script>
import ApiServer from '../../services/singleProduct'
import SingleProduct from '~/components/pages/single-product/SingleProduct.vue'
export default {
  components: { SingleProduct },
  async asyncData ({ params }) {
    let productDetails = ''
    await ApiServer.getProductsData(params.id)
      .then((res) => {
        productDetails = res.data
      })
      .catch(() => {})
    return { productDetails }
  }
}
</script>

<style lang="scss" scoped></style>
