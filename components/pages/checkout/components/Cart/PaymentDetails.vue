<template>
  <b-row class="mt-3 mt-xl-0">
    <b-col cols="12">
      <div class="payment-details-section p-3 mb-4">
        <div
          class="subtotal d-flex justify-content-between pb-2 font-weight-bold"
        >
          <span>{{ $t('checkOut.subtotal') }} : </span>
          <span class="price">{{ getSubTotal }} {{ $t('checkOut.EGP') }} </span>
        </div>
        <div
          v-if="getDiscount"
          class="discount d-flex justify-content-between pb-2 font-weight-bold"
        >
          <span> {{ $t('checkOut.discount') }} : </span>
          <span class="price">{{ getDiscount }} {{ $t('checkOut.EGP') }} </span>
        </div>
        <!-- <div
          class="delivery-charge d-flex justify-content-between pb-2 font-weight-bold"
        >
          <span>Delivery Charge : </span>
          <span class="price">
            {{ getDelivery ? getDelivery + ' EGP' : 'Free' }}
          </span>
        </div> -->
        <hr>
        <div
          class="total-price d-flex justify-content-between pb-2 font-weight-bold"
        >
          <span>{{ $t('checkOut.totalPrice') }} : </span>
          <span
            class="font-weight-bold price"
          >{{ totalPrice }} {{ $t('checkOut.EGP') }}
          </span>
        </div>

        <b-button
          pill
          block
          variant="primary"
          class="p-2 mt-3"
          to="checkout-payment"
        >
          <span class="proceed-to-checkout">
            {{ $t('checkOut.proceedToCheckout') }}
          </span>
        </b-button>
        <b-button
          pill
          block
          to="/products"
          variant="outline-secondary"
          class="p-2 mt-3"
        >
          <span class="continue-shopping">
            {{ $t('checkOut.continueShopping') }}
          </span>
        </b-button>
        <ul class="d-flex justify-content-center mt-4 payment-methods">
          <li v-for="payWithList in payWithLists" :key="payWithList.path">
            <b-img
              :src="require(`@/assets/images/${payWithList.path}`)"
              :alt="payWithList.alt"
            />
          </li>
        </ul>
      </div>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data () {
    return {
      payWithLists: [
        {
          path: 'footer-visa-logo.svg',
          alt: 'visa'
        },
        {
          path: 'footer-mastercard-logo.svg',
          alt: 'mastercard'
        },
        {
          path: 'footer-value-logo.png',
          alt: 'Valu'
        }
      ]
    }
  },
  computed: {
    getSubTotal () {
      return this.$store.getters['carts/getTotalSubCart']
    },
    getDelivery () {
      return this.$store.getters['carts/getDeliveryCharge']
    },
    getDiscount () {
      return this.$store.getters['carts/getDiscount']
    },
    totalPrice () {
      return this.$store.getters['carts/getTotal']
    }
  }
}
</script>

<style lang="scss" scoped>
.payment-details-section {
  background: $cart-background-color;
  border-radius: 5px;
  .total-price span.price {
    color: $main-color;
  }
  .continue-shopping {
    color: #000;
  }
  .continue-shopping,
  .proceed-to-checkout {
    padding-top: 2px;
  }
  .payment-methods {
    list-style: none;
    li {
      margin-right: 10px;
      img {
        max-width: 75px;
      }
    }
  }
}
</style>
