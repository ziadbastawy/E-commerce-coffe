<template>
  <div class="big-section">
    <!-- eslint-disable-next-line vue/attribute-hyphenation -->
    <HeaderSection
      :top-header="topHeader"
      :beside-slider="besideSlider"
      :slider-data="sliderData"
      :home-shipping-steps-data="homeShippingStepsData"
    />
    <ShopByCategory class="section-margin-bottom" />
    <SliderProduct
      class="section-margin-bottom"
      :title="$t('home.featuredProducts')"
      slider-endpoint="featured"
    />
    <SaleCards :inPage="inPage" class="section-margin-bottom" />
    <SliderProduct
      class="section-margin-bottom"
      :title="$t('home.topRatedProducts')"
      slider-endpoint="topRated"
    />
    <SliderProduct
      class="section-margin-bottom"
      :title="$t('home.mostRecentProducts')"
      slider-endpoint="mostRecent"
    />
    <CoffeeApps class="" />
    <!-- <Blog /> -->
    <!-- eslint-disable-next-line vue/attribute-hyphenation -->
    <OurBrands
      :brandsData="brandsData"
      :title="$t(`home.shopByBrands`)"
      background="#fafafa"
    />
  </div>
</template>

<script>
import ApiServer from '../services/home'
import HeaderSection from '~/components/pages/home/HeaderSection.vue'
import ShopByCategory from '@/components/pages/home/ShopByCategory.vue'
import SliderProduct from '~/components/global/SliderProduct.vue'
import SaleCards from '~/components/pages/home/SaleCards.vue'
import CoffeeApps from '@/components/pages/home/MobileApps.vue'
// import Blog from '~/components/pages/home/OurBlog.vue'
import OurBrands from '@/components/pages/home/OurBrands.vue'
export default {
  name: 'Home',
  components: {
    HeaderSection,
    ShopByCategory,
    SliderProduct,
    SaleCards,
    CoffeeApps,
    // Blog,
    OurBrands
  },
  async asyncData () {
    let topHeader = ''
    let inPage = ''
    let besideSlider = ''
    let sliderData = ''
    let brandsData = ''
    let homeShippingStepsData = ''
    await ApiServer.getAdsData()
      .then((res) => {
        topHeader = res.data.top_header
        inPage = res.data.in_page
        besideSlider = res.data.beside_slider
      })
      .catch(() => {})
    await ApiServer.getSliderData()
      .then((res) => {
        sliderData = res.data
      })
      .catch(() => {})
    await ApiServer.getBrandsLogosData()
      .then((res) => {
        brandsData = res.data.data
      })
      .catch(() => {})
    await ApiServer.getHomeShippingStepsData()
      .then((res) => {
        homeShippingStepsData = res.data
      })
      .catch(() => {})

    return {
      topHeader,
      inPage,
      besideSlider,
      sliderData,
      brandsData,
      homeShippingStepsData
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
