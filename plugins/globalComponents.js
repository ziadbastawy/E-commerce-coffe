import Vue from 'vue'
import badge from '@/components/global/badge.vue'
import heart from '@/components/global/heart.vue'
import counter from '@/components/global/counter.vue'
import product from '@/components/global/product.vue'
import button from '@/components/global/button.vue'
import slider from '@/components/global/slider.vue'
import breadCrumb from '@/components/global/breadcrumb.vue'
import headerMedia from '@/components/global/headerMedia'
import sideFilter from '@/components/global/sideFilter'

const components = {
  badge,
  product,
  heart,
  counter,
  button,
  slider,
  breadCrumb,
  headerMedia,
  sideFilter
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(component.name, component)
})
