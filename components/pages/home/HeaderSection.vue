<template>
  <b-container>
    <div class="homepage-header mb-5">
      <!-- Start Over View Images -->
      <div class="over-view-images">
        <b-row class="d-none d-md-flex top-offers">
          <b-col
            v-for="ad in topHeader"
            :key="ad.id"
            lg="3"
            md="6"
            class="mb-lg-4 my-2 mb-lg-0"
          >
            <div class="offer">
              <a :href="ad.url" target="_blank" class="pt-0 w-100">
                <b-img
                  v-show="!loading"
                  :src="ad.image"
                  fluid
                  :alt="ad.name"
                  draggable="false"
                />
              </a>
              <b-skeleton-img v-if="loading" />
            </div>
          </b-col>
        </b-row>
      </div>
      <!-- End Over View Images -->

      <!-- Start Carusal  -->
      <b-row>
        <b-col cols="12" lg="8">
          <b-carousel
            id="header-carousel"
            v-model="slide"
            :interval="0"
            controls
            indicators
            img-width="1024"
            img-height="700"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <div v-show="!loading">
              <b-carousel-slide v-for="slider in sliderData" :key="slider.id">
                <template #img>
                  <!--
                  <div class="carousel-content">
                    <h1 class="mb-0">
                      {{ slider.title }}
                    </h1>
                    <p class="sub-head">
                      {{ slider.brif }}
                    </p>
                    <p class="description">
                      {{ slider.description }}
                    </p>
                     <nuxt-link to="/profile" class="prevent-from-change">
                      <c-button class="dark px-5">
                        Shop Now!
                      </c-button>
                    </nuxt-link>
                  </div>
                  -->
                  <div @click="goTo(slider)">
                    <img
                      class="slider-img"
                      :src="slider.image"
                      :alt="slider.title"
                    >
                  </div>
                </template>
              </b-carousel-slide>
            </div>
            <b-skeleton-img v-if="loading" />
          </b-carousel>
        </b-col>

        <!-- End Carusal  -->
        <b-col
          cols="12"
          lg="4"
          class="side-offers d-flex flex-column justify-content-between"
        >
          <div v-for="item in besideSlider" :key="item.id" class="offer">
            <div
              v-show="!loading"
              :to="'/products'"
              class="w-100"
              @click="goTo(item)"
            >
              <b-img :src="item.image" draggable="false" />
            </div>
            <b-skeleton-img v-if="loading" />
          </div>
        </b-col>
      </b-row>

      <!-- Start Apper Heder

      <b-row class="mt-5">
        <b-col
          v-for="item in homeShippingStepsData"
          :key="item.id"
          cols="12"
          sm="6"
          lg="3"
        >
          <upper-haeder
            :title="item.title"
            :body="item.description"
            :image="item.icon"
          />
        </b-col>
      </b-row>
       End Apper Hader -->
    </div>
  </b-container>
</template>

<script>
// import UpperHaeder from './UpperHaeder.vue'
export default {
  components: {
    // UpperHaeder
  },
  props: {
    homeShippingStepsData: {
      type: Array,
      default: () => {
        return []
      }
    },
    topHeader: {
      type: Array,
      default: () => {
        return []
      }
    },
    besideSlider: {
      type: Array,
      default: () => {
        return []
      }
    },
    sliderData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      loading: true,
      slide: 0,
      sliding: null
    }
  },
  mounted () {
    this.loading = false
  },
  methods: {
    goTo (slider) {
      if (slider.product_id) {
        this.$router.push({
          name: 'single-product-id',
          params: { id: slider.product_id }
        })
      } else {
        this.$router.push({
          name: 'products',
          query: {
            category: slider.category_id,
            subCategory: slider.sub_category_id
          }
        })
      }
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style lang="scss">
.homepage-header {
  margin: 1.5rem 0;
  .carousel-item {
    max-height: 400px;
    @media (max-width: 1500px) {
      // min-height: 400px;
    }
    @media (min-width: 992px) and (max-width: 1200px) {
      // min-height: 330px;
    }

    img {
      // max-height: 400px;
      @media (max-width: 1500px) {
        // min-height: 400px;
      }
      @media (min-width: 992px) and (max-width: 1200px) {
        // min-height: 330px;
      }
    }
  }
  .slider-img {
    cursor: pointer;
  }
  .top-offers {
    .offer {
      border-radius: 0.4rem;
      max-height: 6rem;
      overflow: hidden;
      // img {
      //   height: 67px;
      //   width: 255px;
      // }
    }
  }
  .side-offers {
    .offer {
      border-radius: 0.6rem;
      overflow: hidden;
      max-height: 192px;
      cursor: pointer;

      @media (max-width: 991px) {
        max-height: fit-content;
        margin-block-start: 1.5rem;
      }
    }
  }
  .carousel-inner {
    border-radius: 11px;
    @media (max-width: 991px) {
      margin-top: 30px !important;
    }
  }
  .carousel-content {
    position: absolute;
    color: #fff;
    height: 60%;
    top: 20%;
    left: 6rem;
    width: 50%;
    .prevent-from-change:hover {
      color: #fff;
      text-decoration: none;
    }
    h1 {
      font-size: 3rem;
      @media (max-width: 1199px) {
        font-size: 2rem;
      }
    }
    .sub-head {
      font-size: 1.5rem;
      @media (max-width: 1199px) {
        font-size: 1.2rem;
      }
    }
    .description {
      margin: 1.5rem 0;
      font-size: 1rem;
      @media (max-width: 1199px) {
        font-size: 0.8rem;
      }
      @media (max-width: $small-screen) {
        margin: 1rem 0;
        font-size: 0.8rem;
      }
      @media (max-width: 430px) {
        display: none;
      }
    }
    @media (max-width: $small-screen) {
      h1 {
        font-size: 1.3rem;
      }
      .sub-head {
        font-size: 1rem;
      }
    }
    @media (max-width: 576px) {
      height: 80%;
      top: 10%;
      left: 2rem;
      width: 70%;
    }
  }
  .carousel-indicators .active {
    width: 30px;
  }
  .carousel-indicators li {
    transition: all ease-out 0.3s;
    border-radius: 5rem;
    border: none;
    margin: 0.25rem;
    height: 10px;
    width: 10px;
  }
  .carousel-control-prev {
    left: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 1;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    top: calc((100% - 4rem) / 2);
    @media (max-width: 576px) {
      display: none;
    }
  }
  .carousel-control-next {
    right: 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 1;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    top: calc((100% - 4rem) / 2);
    @media (max-width: 576px) {
      display: none;
    }
  }

  .main-button.dark {
    @media (max-width: $small-screen) {
      padding: 0.4rem 1rem !important;
    }
  }
}
</style>
