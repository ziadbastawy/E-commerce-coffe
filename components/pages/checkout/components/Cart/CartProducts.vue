<template>
  <b-row>
    <b-col>
      <b-card
        no-body
        class="overflow-hidden cart-product"
        :class="{ 'mt-5': index > 0 }"
      >
        <b-row no-gutters class="align-items-center mb-2">
          <b-col
            cols="4"
            lg="1"
            class="cart-product-image mx-auto mb-3 mx-lg-0 mb-lg-0"
          >
            <b-card-img
              v-show="!loading"
              :src="productsCart.img ? productsCart.img : productsCart.image"
              alt="Image"
            />
            <b-skeleton-img v-if="loading" />
          </b-col>
          <b-col cols="12" lg="6">
            <h6
              v-show="!loading"
              class="font-weight-bold mb-0 text-center text-lg-left"
            >
              {{ productsCart.name ? productsCart.name : productsCart.title }}
              <ul
                class="list-style-none d-flex my-2 add-remove-item justify-content-around justify-content-lg-between"
              >
                <li>
                  <b-button
                    b-button
                    variant="outline-primary"
                    class="d-flex add-item m-0 p-2 font-weight-bold"
                    @click="changeStatus"
                  >
                    <c-heart
                      color="$primary"
                      :productId="productsCart.id"
                      style="margin-top: -0.25rem; margin-inline-end: 0.25rem"
                    />
                    {{
                      !isAddedToWishList(productsCart.id)
                        ? $t('checkOut.moveToWishList')
                        : $t('checkOut.removeFromWishlist')
                    }}
                  </b-button>
                </li>
                <li>|</li>
                <li>
                  <b-button
                    b-button
                    variant="outline-primary"
                    class="d-flex remove-item m-0 p-2 font-weight-bold"
                    @click="removeItem"
                  >
                    <b-icon-trash class="text-danger" />
                    {{ $t('checkOut.removeItem') }}
                  </b-button>
                </li>
              </ul>
            </h6>
            <b-skeleton v-if="loading" height="2rem" width="90%" />
          </b-col>
          <b-col cols="6" lg="3" order="2" order-lg="1">
            <c-counter
              v-if="!loading"
              :productId="productsCart.id"
              @removedFromCart="removeItem"
            />
            <b-skeleton v-if="loading" height="1rem" width="30%" />
          </b-col>
          <b-col cols="6" lg="2" order="1" order-lg="2">
            <div
              class="d-flex flex-column text-center align-items-start align-items-lg-center"
            >
              <p v-show="!loading" class="sale-price mb-0 w-100">
                {{
                  productsCart.price
                    ? productsCart.price
                    : productsCart.price_after_discount
                }}
                {{ $t('checkOut.EGP') }}
              </p>
              <b-skeleton v-if="loading" height="1rem" width="50%" />

              <p
                v-show="!loading"
                v-if="productsCart.price_before_discount"
                class="price w-100 mb-0"
              >
                {{ productsCart.price_before_discount }}
                {{ $t('checkOut.EGP') }}
              </p>
              <b-skeleton v-if="loading" height="1rem" width="30%" />
            </div>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { BIconTrash } from 'bootstrap-vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    BIconTrash
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    productsCart: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return { loading: true }
  },

  computed: {
    ...mapGetters({ checkInWishList: 'products/isAddedToWishList' }),
    isAddedToWishList () {
      return (id) => {
        return this.checkInWishList(id)
      }
    }
  },

  mounted () {
    this.loading = false
  },

  methods: {
    removeItem () {
      // this.$emit('onRemoveFromArray', this.productsCart.id)

      this.$swal({
        title: this.$t('profile.titleSwal'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: this.$t('profile.confirmButtonText'),
        cancelButtonText: this.$t('profile.cancelButtonText'),
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger mx-3'
        },
        buttonsStyling: false
      }).then((result) => {
        if (result.isConfirmed) {
          this.$nuxt.$loading.start()
          this.$store
            .dispatch('carts/removeProductFromCart', this.productsCart)
            .then(() => {
              this.successMsg(this.$t('profile.removeDone'))
              this.$nuxt.$loading.finish()
            })
            .catch(() => {
              this.$nuxt.$loading.finish()
            })
        }
      })
    },
    changeStatus () {
      if (this.isUserLogin) {
        const data = {
          product_id: this.productsCart.id
        }
        this.$store.dispatch('products/toggleProductWishList', data)
      } else {
        this.errMsg(this.$t('auth.youShouldLoginFirst'))
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.cart-product {
  border: none;
  @media (max-width: $medium-screen) {
    border-bottom: 1px solid rgb(184, 184, 184);
  }
  .cart-product-image {
    @media (max-width: $medium-screen) {
      text-align: center;
    }
    color: #000;
    img {
      max-width: 5rem;
      object-fit: contain;
      @media (max-width: $medium-screen) {
        max-width: 15rem;
        max-height: 15rem;
      }
      @media (max-width: $small-screen) {
        max-width: 12rem;
        max-height: 12rem;
      }
    }
  }
  .list-style-none li button {
    @media (max-width: 767px) {
      font-size: 0.9rem;
      text-align: left;
    }
  }
  .add-remove-item {
    @media (max-width: $medium-screen) {
      justify-content: center;
    }
    color: $main-color;
    border: none !important;
    :hover {
      background: none;
      color: $main-color;
      text-decoration: underline;
    }
    li {
      // margin: 20px 20px 0px 20px;
      button {
        color: $main-color;
        border: none !important;

        :hover {
          background: none;
          color: $main-color;
          text-decoration: underline;
        }
      }
      button:focus {
        box-shadow: none;
      }
    }
    .b-icon.bi {
      margin-right: 5px;
    }
  }
  .price {
    font-size: 14px;
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
}
</style>
