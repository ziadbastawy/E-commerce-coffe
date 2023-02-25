<template>
  <div>
    <AboutUs :aboutUs="aboutUs" />
    <OurBrands :brandsData="brandsData" />
  </div>
</template>
<script>
import StaticPages from '../services/static'

import ApiServer from '../services/home'

import OurBrands from '~/components/pages/home/OurBrands.vue'

import AboutUs from '~/components/pages/static-pages/About'
export default {
  components: {
    AboutUs,
    OurBrands
  },
  async asyncData () {
    let aboutUs = {}
    let brandsData = ''
    await StaticPages.aboutUsPage()
      .then((res) => {
        aboutUs = res.data
      })
      .catch(() => {})
    await ApiServer.getBrandsLogosData()
      .then((res) => {
        brandsData = res.data.data
      })
      .catch(() => {})
    return {
      aboutUs,
      brandsData
    }
  }
}
</script>
<style lang="scss" scoped></style>
