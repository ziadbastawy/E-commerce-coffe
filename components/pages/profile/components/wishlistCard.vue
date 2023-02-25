<template>
  <div>
    <b-card no-body class="mt-4 my-wish-list-card">
      <b-row>
        <b-col lg="2">
          <b-card-img
            v-show="!loading"
            class="product-image m-3"
            :src="wishList.image"
            alt="Image"
          />
          <!-- src="@/assets/images/navbar-cart-item-3.png" -->
        </b-col>
        <b-col lg="10">
          <div class="p-3">
            <h5 v-show="!loading" class="font-weight-bold brand-name">
              {{ wishList.name }}
            </h5>
            <div class="product-prices mb-3 mb-md-0 d-flex align-items-start">
              <p v-show="!loading" class="sale-price mb-1 mt-2 mt-md-0 mr-3">
                {{ wishList.price }} {{ $t('profile.egyptianPound') }}
              </p>

              <p v-show="!loading" class="price mb-1 mt-2 mt-md-0 mr-3">
                {{ wishList.price_before_discount }}
                {{ $t('profile.egyptianPound') }}
              </p>
            </div>
            <div class="action-buttons d-flex mt-2">
              <c-button
                v-if="!addedToCart(wishList.id)"
                class="add-to-basket"
                @click="addToCart()"
              >
                <b-icon-basket-2 />
                <span class=""> {{ $t('profile.addToBasket') }} </span>
              </c-button>
              <div v-else class="added-to-basket">
                <b-icon-cart-check-fill />
                <span class=""> {{ $t('profile.addedToBasket') }} </span>
              </div>
              <c-button
                class="outline ml-1 ml-md-4 remove-to-trash"
                @click="removeFromWishList"
              >
                <b-icon-trash />
              </c-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { BIconCartCheckFill, BIconBasket2, BIconTrash } from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    BIconCartCheckFill,
    BIconTrash,
    BIconBasket2
  },
  props: {
    wishList: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      addedToBasket: false,
      loading: false
    }
  },
  computed: {
    ...mapGetters({ checkInCart: 'carts/addedToCart' }),
    addedToCart () {
      return (id) => {
        return this.checkInCart(id)
      }
    }
  },

  methods: {
    removeFromWishList () {
      const data = {
        product_id: this.wishList.id
      }
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
          this.$store.dispatch('products/toggleProductWishList', data).then((res) => {
            this.successMsg(this.$t('profile.removeDone'))
          })
        }
      })
    },
    addToCart () {
      this.$store.dispatch('carts/addProductToCart', {
        product: this.wishList,
        quantity: 1
      })
    },
    goToCart () {
      this.$router.push('/checkout/cart')
    }
  }
}
</script>

<style lang="scss" scoped>
.my-wish-list-card {
  border-radius: $default-radios;
  .product-image {
    max-height: 5rem;
    display: block;
    object-fit: contain;
    @media (max-width: 767px) {
      max-height: 12rem;
    }
  }
  .brand-name {
    font-size: 1rem;
  }
  .product-prices {
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
  }
  .action-buttons {
    .add-to-basket {
      padding: 0.5rem 2rem !important;
    }
    .added-to-basket {
      border: 2px solid $main-color;
      background: transparent;
      color: $main-color;
      border-radius: 1.5rem;
      padding: 0.3rem 1rem;
      transition: $default-transition;
    }
    .remove-to-trash {
      border-color: red;
      padding: 0 26px;
      transition: $default-transition;
      svg {
        color: red;
        transition: $default-transition;
        margin: 0;
      }
    }
    .remove-to-trash:hover {
      background: red;
      svg {
        color: #fff;
      }
    }
    .remove-to-trash:focus {
      outline: none !important;
      box-shadow: none;
    }
  }
}
html:lang(ar) {
  .added-to-basket,
  .add-to-basket {
    span {
      padding-top: 0;
    }
  }
  .product-prices {
    .sale-price,
    .price {
      margin-right: 0rem !important;
      margin-left: 1rem !important;
    }
  }
  .remove-to-trash {
    margin-left: 0rem !important;
    margin-right: 1.5rem !important;
  }
}
</style>
