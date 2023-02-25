<template>
  <div>
    <b-container>
      <div class="py-2 single-product">
        <CbreadCrumb :bread-crumb-array="breadCrumbArray" />
        <b-row>
          <b-col lg="5">
            <div class="recipe-media">
              <div class="main-image mb-2">
                <img :src="showed_imaged" alt="image-details">
              </div>
              <div class="sub-images d-flex flex-wrap">
                <img
                  v-for="(img, index) in productDetails.images"
                  :key="index"
                  :src="img"
                  :class="{ active: index == current }"
                  @click="changePic(img, index)"
                >
              </div>
            </div>
          </b-col>

          <b-col lg="7">
            <div class="single-product-info">
              <c-badge
                v-if="productDetails.discount"
                :content="`${productDetails.discount}% off`"
                class="custom-badge"
              />
              <h3 class="my-2">
                {{ productDetails.name }}
              </h3>
              <b-form-rating
                readonly
                :value="
                  productDetails.rate > 5
                    ? productDetails.rate / 10
                    : productDetails.rate
                "
                color="#ffd008"
                no-border
                class="my-2"
              />
              <div>
                <p class="current-price">
                  {{ productDetails.price }} {{ $t('checkOut.EGP') }}
                </p>
                <p
                  v-if="productDetails.price_before_discount"
                  class="previous-price"
                >
                  {{ productDetails.price_before_discount }}
                  {{ $t('checkOut.EGP') }}
                </p>
              </div>
              <!-- <div class="contain-radio d-flex">
                <div v-for="(item, index) in items" :key="index">
                  <input
                    :id="item.name"
                    name="car_supplier"
                    type="radio"
                    class="radio_input"
                  >
                  <label class="radio_label" :for="item.name">
                    {{ item.name }}
                  </label>
                </div>
              </div> -->
              <div class="add-to-basket">
                <div v-if="addedToCart(productDetails.id)">
                  <p>{{ $t('checkOut.qty') }}</p>
                  <c-counter :productId="productDetails.id" />
                </div>

                <div class="d-flex my-3 flex-wrap gap10">
                  <c-button
                    v-if="!addedToCart(productDetails.id)"
                    class="add-to-basket-button"
                    @click="addToCart()"
                  >
                    <img
                      class="shopping-cart-icon"
                      src="@/assets/images/shopping-cart.svg"
                      alt="shopping cart"
                    >
                    <span class="basic-font font-padding-top">{{
                      $t('singleProduct.AddToBasket')
                    }}</span>
                  </c-button>

                  <div v-else class="added-to-basket">
                    <b-icon-cart-check-fill />
                    <span class="basic-font font-padding-top">{{
                      $t('singleProduct.AddedToBasket')
                    }}</span>
                  </div>

                  <c-button
                    class="outline add-to-wish-list"
                    @click="changeStatus"
                  >
                    <c-heart color="$primary" :productId="productDetails.id" />
                    <span class="basic-font">{{
                      !isAddedToWishList(productDetails.id)
                        ? $t('singleProduct.addToWishlist')
                        : $t('singleProduct.addedToWishlist')
                    }}</span>
                  </c-button>
                </div>
              </div>

              <div v-if="filteredOverview.length" class="Product-overview">
                <h5 class="py-1">
                  {{ $t('singleProduct.ProductOverview') }}
                </h5>
                <b-row>
                  <b-col
                    v-for="(item, index) in filteredOverview"
                    :key="index"
                    lg="6"
                  >
                    <div class="py-2">
                      <p class="header">
                        {{ item.name }}
                      </p>
                      <h6 class="describtion">
                        {{ item.describtion }}
                      </h6>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <div class="sale py-3">
                <h5>{{ $t('singleProduct.AboutSeller') }}</h5>
                <SellerName
                  :company="{
                    id: productDetails.vendor.id,
                    companyImage: productDetails.vendor.logo,
                    companyName: productDetails.vendor.company_name
                  }"
                />
              </div>

              <!-- <div class="other-salers py-3">
                  <h5>Other sellers</h5>
                  <nuxt-link tag="p" to="/offers">
                    <span>3</span> Other offers from EGP 240
                  </nuxt-link>
                </div> -->

              <div class="about-this-item py-3">
                <h5>{{ $t('singleProduct.AboutThisItem') }}</h5>
                <p v-html="productDetails.description">
                  {{ productDetails.description }}
                </p>
              </div>
            </div>
          </b-col>
        </b-row>

        <SliderProduct
          class="section-margin-bottom"
          slider-endpoint="featured"
          :title="$t(`products.relatedProducts`)"
          :hide-contanier="true"
        />

        <SliderProduct
          :hide-contanier="true"
          class="section-margin-bottom"
          slider-endpoint="featured"
          :title="$t(`products.customersWhoBoughtThisItem`)"
        />
      </div>
      <!-- End Car Suppliers -->
    </b-container>
  </div>
</template>

<script>
import { BIconCartCheckFill } from 'bootstrap-vue'
import { mapGetters } from 'vuex'
import SellerName from '@/components/pages/offers/components/SellerName.vue'
export default {
  name: 'SingleProduct',
  components: { BIconCartCheckFill, SellerName },
  props: {
    productDetails: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      status: false,
      current: 0,
      showed_imaged: '',
      breadCrumbArray: [
        {
          text: this.$t('singleProduct.home'),
          to: '/'
        },
        {
          text: this.productDetails.category.name,
          to: `/products?category=${this.productDetails.category.id}`
        },
        {
          text: this.productDetails.name,
          active: true
        }
      ],
      items: [
        {
          name: '12 Ounce (Pack of 6)'
        },
        {
          name: '18 Ounce (Pack of 3)'
        },
        {
          name: '18 Ounce (Pack of 6)'
        },
        {
          name: '18 oz Bag'
        }
      ],
      overViews: []
    }
  },

  computed: {
    ...mapGetters({
      checkInCart: 'carts/addedToCart',
      checkInWishList: 'products/isAddedToWishList'
    }),
    addedToCart () {
      return (id) => {
        return this.checkInCart(id)
      }
    },
    isAddedToWishList () {
      return (id) => {
        return this.checkInWishList(id)
      }
    },
    filteredOverview () {
      return this.overViews.filter(item => !!item.describtion)
    }
  },
  created () {
    this.showed_imaged = this.productDetails.images[0]
    this.overViews = this.overviewLoop()
  },
  methods: {
    checkArray (array) {
      return array.every(item => !Object.values(item).includes(''))
    },
    changePic (img, index) {
      this.showed_imaged = img
      this.current = index
    },
    goToCart () {
      this.$router.push('/checkout/cart')
    },
    overviewLoop () {
      const objArray = []
      const productDetails = this.productDetails.overview
      Object.keys(productDetails).forEach(key => objArray.push({
        name: key,
        describtion: productDetails[key]
      })
      )
      return objArray
    },
    addToCart () {
      this.$store.dispatch('carts/addProductToCart', {
        product: {
          ...this.productDetails,
          image: this.productDetails.images[0]
        },
        quantity: 1
      })
    },
    changeStatus () {
      if (this.isUserLogin) {
        const data = {
          product_id: this.productDetails.id
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
.single-product {
  .main-button {
    padding: 0.5rem 1rem;
    span {
      margin: 0px 5px;
    }
  }
  .added-to-basket {
    border: 2px solid $main-color;
    background: transparent;
    color: $main-color;
    border-radius: 1.5rem;
    padding: 0.5rem 1rem;
    transition: $default-transition;
  }
  /* Start Slider */
  .recipe-media {
    .main-image {
      height: 20rem;
      img {
        border-radius: $default-radios * 3;
        object-fit: contain;
      }
    }
    .sub-images {
      img {
        width: 5rem;
        height: 5rem;
        border: 1px solid #dcdcdc;
        padding: 0.3rem;
        border-radius: $default-radios * 2;
        margin-inline-end: 1.3rem;
        margin-block-start: 1rem;
        cursor: pointer;
        object-fit: contain;
        &.active {
          border-color: $main-color;
          box-shadow: 0 0 7px rgba($color: $main-color, $alpha: 0.4);
        }
      }
    }
  }
  /* End Slider */
  .single-product-info {
    .custom-badge {
      margin: 0.5rem 0;
    }
    h3 {
      @media (max-width: $x-small-screen) {
        font-size: 1.4rem;
      }
      font-weight: 700;
    }
    .form-control {
      height: 1.5rem;
    }
    .current-price {
      font-size: 1.3rem;
      color: $main-color;
      font-weight: 900;
      margin-bottom: 0.5rem;
    }
    .previous-price {
      font-size: 1rem;
      color: $previous-price-gray;
      text-decoration: line-through;
    }
    .contain-radio {
      flex-wrap: wrap;
      .radio_input {
        display: none;
      }
      .radio_label {
        margin-right: 10px;
        cursor: pointer;
        display: inline-block;
        padding: 10px 15px;
        color: #231f20;
        border-radius: 5px;
        border: 1px solid #e3e3e3;
        transition: all 0.5s ease-in-out;
        box-shadow: 0px 0px 5px -1px transparent;
      }
      .radio_input:checked + .radio_label {
        color: #107cc0;
        border: 1px solid #107cc0;
        box-shadow: 0px 0px 5px -1px #107cc0;
      }
    }
    .add-to-basket {
      .gap10 {
        gap: 10px !important;
      }
      .add-to-basket-button {
        padding: 0.7rem 1.5rem !important;
      }
      p {
        color: $previous-price-gray;
        margin-top: 1rem;
      }
    }
    .Product-overview {
      border-top: 1px solid #ccc;
      padding: 20px 0;
      h5 {
        font-weight: 700;
      }
      .header {
        color: #979293;
        font-size: 0.9rem;
        text-transform: capitalize;
      }
    }
  }
}
.sale {
  border-top: 1px solid #ccc;
}
.other-salers {
  border-top: 1px solid #ccc;

  p {
    color: #107cc0;
    cursor: pointer;
  }

  span {
    background-color: #ddf0fc;
    width: 2rem;
    height: 2rem;
    line-height: 1rem;
    padding: 10px;
    border-radius: 50%;
  }
}
.about-this-item {
  border-top: 1px solid #ccc;
  @media (max-width: 767px) {
    margin-left: 1rem;
  }
  h5 {
    font-weight: 700;
  }
  ul {
    list-style-type: square;
  }
}
html:lang(ar) {
  .single-product {
    .form-control {
      justify-content: end;
    }
  }
}
</style>
