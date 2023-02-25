<template>
  <div class="slider">
    <VueSlickCarousel
      v-bind="{
        dots,
        arrows: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow,
        responsive
      }"
    >
      <slot name="items" />

      <template #prevArrow>
        <div class="custom-arrow d-none d-sm-flex justify-content-center">
          <img src="@/assets/images/arrow-prev.svg" alt="arrow prev">
        </div>
      </template>

      <template #nextArrow>
        <div class="custom-arrow d-none d-sm-flex justify-content-center">
          <img src="@/assets/images/arrow-next.svg" alt="arrow next">
        </div>
      </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'CSlider',
  components: {
    VueSlickCarousel
  },
  props: {
    slidesToShow: {
      type: Number,
      default: () => {
        return 4
      }
    },
    responsive: {
      type: Array,
      default: () => {
        return [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 3.5,
              arrows: false
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2.5,
              arrows: false
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1.3333,
              arrows: false
            }
          }
        ]
      }
    },
    dots: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss">
.slick-prev,
.slick-next {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  opacity: 1;
  background-color: #ebeaea;
  transition: $default-transition;
  z-index: 9;
  &.slick-disabled {
    opacity: 0.3;
  }
  img {
    object-fit: contain;
    width: 0.5rem;
  }
}
.slick-prev:before,
.slick-next:before {
  content: none !important;
}

html:lang(ar) {
  .slick-prev,
  .slick-next {
    img {
      transform: rotate(180deg) !important;
    }
  }
}

.slick-prev:hover,
.slick-prev:focus,
.slick-next:hover,
.slick-next:focus {
  opacity: 1;
  background-color: #ebeaea;
}
</style>
