<template>
  <div
    class="shop-by-brands pt-5 pb-5"
    :style="{ 'background-color': background }"
  >
    <b-container>
      <div v-if="title" class="mb-5">
        <h3 v-show="!loading" class="text-center font-weight-bold m-0">
          {{ title }}
        </h3>
        <b-skeleton
          v-if="loading"
          class="my-4 mx-auto"
          width="45%"
          height="3rem"
        />
      </div>
      <c-slider
        class="brands-logos"
        :slides-to-show="4.5"
        :responsive="responsive"
      >
        <template #items>
          <img
            v-for="brandList in brandsData"
            :key="brandList.id"
            :src="brandList.logo"
            :alt="brandList.name"
            @click="goto(brandList.id)"
          >
          <b-skeleton-img v-if="loading" width="100%" />
        </template>
      </c-slider>
    </b-container>
  </div>
</template>
<script>
export default {
  props: {
    brandsData: {
      type: Array,
      default: () => {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      loading: true,
      responsive: [
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
          breakpoint: 767,
          settings: {
            slidesToShow: 2.333,
            arrows: false
          }
        },
        {
          breakpoint: 550,
          settings: {
            arrows: false,
            slidesToShow: 1.3333
          }
        }
      ]
    }
  },
  mounted () {
    this.loading = false
  },
  methods: {
    goto (id) {
      this.$router.push({
        name: 'products',
        query: {
          brand: [id]
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.shop-by-brands {
  position: relative;
  ::v-deep .slick-track {
    display: flex !important;
    align-items: center !important;
    .slick-slide {
      text-align: center;
      // width: 200px !important;
    }
  }
  .brands-logos {
    img {
      object-fit: scale-down;
      max-width: 10rem;
      cursor: pointer;
      transition: $default-transition;
      cursor: pointer;
    }
  }
}
</style>
