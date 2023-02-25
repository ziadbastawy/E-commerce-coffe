<template>
  <b-col cols="12" class="info p-4 mb-3">
    <h5 class="mb-3">
      {{ $t('checkOut.cartDetails') }}
    </h5>
    <div class="details">
      <div class="price-item d-flex justify-content-between mb-2">
        <span>
          {{ $t('checkOut.cartItems') }} ( {{ productCarts.length }}
          {{ $t('checkOut.items') }} )</span>
        <span> {{ getSubTotal }} {{ $t('checkOut.EGP') }}</span>
      </div>
      <div
        v-if="showDelivery"
        class="price-item d-flex justify-content-between mb-2"
      >
        <span> {{ $t('checkOut.deliveryCharge') }}</span>
        <span>
          {{
            getDelivery
              ? getDelivery + ' ' + $t('checkOut.EGP')
              : $t('checkOut.notAssigned')
          }}</span>
      </div>
      <div
        v-if="getDiscount > 0"
        class="price-item d-flex justify-content-between mb-2 text-success"
      >
        <span> {{ $t('checkOut.discount') }}</span>
        <span> {{ getDiscount + ' ' + $t('checkOut.EGP') }}</span>
      </div>
    </div>
    <hr>
    <div class="total-price d-flex justify-content-between">
      <span> {{ $t('checkOut.totalPrice') }}:</span>
      <span class="price"> {{ totalPrice }} {{ $t('checkOut.EGP') }}</span>
    </div>
  </b-col>
</template>
<script>
export default {
  props: {
    showDelivery: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return { count: 0 }
  },
  computed: {
    productCarts () {
      return this.$store.getters['carts/cartsProducts']
    },
    getSubTotal () {
      return this.$store.getters['carts/getTotalSubCart']
    },
    getDelivery () {
      return this.$store.getters['carts/getDeliveryCharge']
    },
    totalPrice () {
      return this.$store.getters['carts/getTotal']
    },
    getDiscount () {
      return this.$store.getters['carts/getDiscount']
    }
  }
}
</script>
<style lang="scss" scoped>
.side-info {
  color: $gray-dark;
  .info {
    background-color: #f8f8f8;
    border-radius: $default-radios;
    .details {
      .cart-item {
        .item-image {
          background-color: white;
          border-radius: $default-radios;
          height: 5rem;
          img {
            object-fit: contain;
          }
        }
      }
    }
    .total-price {
      font-size: 14pt;
      .price {
        color: $main-color;
      }
    }
  }
}
</style>
