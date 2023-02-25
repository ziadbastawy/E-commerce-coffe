<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card no-body class="overflow-hidden my-4">
          <b-row no-gutters class="align-items-center offer">
            <b-col md="2" class="product-image p-3">
              <b-card-img
                v-show="!loading"
                :src="offer.productImage"
                alt="Image"
              />
              <b-skeleton-img v-if="loading" />

              <!-- src="@/assets/images/navbar-cart-item-3.png" -->
            </b-col>
            <b-col md="10" class="my-3 px-4">
              <b-row class="pl-4">
                <b-col md="9">
                  <h5 v-show="!loading" class="band-name font-weight-bold">
                    {{ offer.brandName }}
                  </h5>
                  <b-skeleton v-if="loading" height="2rem" width="90%" />
                  <b-form-rating
                    color="#ffd008"
                    class="product-rate"
                    no-border
                  />
                </b-col>
                <b-col md="3">
                  <div
                    class="d-flex flex-column align-items-start align-items-lg-end"
                  >
                    <p v-show="!loading" class="sale-price mb-1 mt-2 mt-md-0">
                      {{ offer.salePrice }}
                    </p>
                    <b-skeleton v-if="loading" height="1rem" width="50%" />

                    <p v-show="!loading" class="price">
                      {{ offer.sale }}
                    </p>
                    <b-skeleton v-if="loading" height="1rem" width="30%" />
                  </div>
                </b-col>
              </b-row>
              <b-row class="mt-3 pl-4">
                <b-col cols="12" lg="4" class="pl-2 mb-4 mb-lg-0">
                  <SellerName :company="offer.companyDetails" />
                </b-col>
                <b-col cols="12" lg="8">
                  <div
                    class="action-buttons d-flex justify-content-start justify-content-lg-end"
                  >
                    <c-counter
                      v-if="addedToCart"
                      class="mr-3 mb-3"
                      @removedFromCart="addedToCart = false"
                    />

                    <c-button
                      v-if="!addedToCart"
                      class="mb-3"
                      @click="addedToCart = true"
                    >
                      <b-icon-basket-2 />
                      <span>Add to basket</span>
                    </c-button>
                    <c-button v-else class="mb-3" @click="goToCart">
                      <b-icon-basket-2 />
                      <span>Go to cart</span>
                    </c-button>

                    <c-button
                      class="outline ml-0 ml-md-4 mb-3 add-to-wish-list"
                      @click="status = !status"
                    >
                      <c-heart class="adjuct-heart-down" :status="status" />
                      <span>Add to Wish list</span>
                    </c-button>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BIconBasket2 } from 'bootstrap-vue'
import SellerName from './SellerName.vue'
export default {
  components: {
    BIconBasket2,
    SellerName
  },
  props: {
    offer: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return { loading: true, addedToCart: false, status: false }
  },
  mounted () {
    this.loading = false
  },
  methods: {
    goToCart () {
      this.$router.push('/checkout/cart')
    }
  }
}
</script>
<style lang="scss" scoped>
.offer {
  color: #000;
  .product-image {
    color: #000;
    img {
      max-height: 15rem;
      object-fit: contain;
      @media (max-width: 767px) {
        max-height: 10rem;
      }
    }
  }
  .band-name {
    @media (max-width: 767px) {
      font-size: 1rem;
    }
  }
  .price {
    font-size: $default-font-size-xl;
    color: $previous-price-gray;
    text-decoration: line-through;
    @media (max-width: 767px) {
      font-size: 1rem;
    }
  }
  .sale-price {
    font-size: $default-font-size-xl;
    color: $main-color;
    font-weight: 900;
    @media (max-width: 767px) {
      font-size: 1rem;
    }
  }
  .action-buttons {
    .main-button {
      padding: 0.5rem 2rem;
      @media (max-width: 767px) {
        padding: 0.5rem 1rem;
      }
      span {
        margin-left: 1rem;
      }
    }
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
}
</style>
