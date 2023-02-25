<template>
  <b-row class="order-info">
    <b-col cols="12" lg="6" class="side-info">
      <CartDetails :showDelivery="true" />
      <div class="coupon-section p-4 mb-4">
        <h5 class="font-weight-bold">
          {{ $t('checkOut.haveCoupon') }}
        </h5>
        <form class="coupon-input d-flex" @submit.prevent="submitCoupon">
          <input
            v-model="coupon"
            type="text"
            class="no-outlines"
            :placeholder="$t(`checkOut.couponCode`)"
          >
          <button type="submit">
            {{ $t('checkOut.apply') }}
          </button>
        </form>
      </div>
    </b-col>
    <b-col cols="12" lg="6" class="side-info">
      <CartItems />
    </b-col>
    <b-col cols="12">
      <div class="d-flex justify-content-end">
        <button class="next-btn" @click="nextStep">
          {{ $t('checkOut.next') }}
        </button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import CartDetails from './CartDetails.vue'
import CartItems from './CartItems.vue'
import Api from '@/services/cart'
export default {
  components: { CartDetails, CartItems },
  props: {
    addressId: {
      type: [Number, String],
      required: true,
      default: ''
    }
  },
  data () {
    return {
      coupon: ''
    }
  },
  mounted () {
    this.orderSummary()
  },
  methods: {
    nextStep () {
      // if (this.address_id) {
      //   this.$emit('nextStep')
      //   this.$emit('address-id', this.address_id)
      // }
      if (this.coupon) {
        this.$emit('updateCoupon', this.coupon)
      }
      this.$emit('nextStep')

      // if (this.address_id) {
      //   this.$emit('address-id', this.address_id)
      // } else if (
      //   this.form.governorate_id &&
      //   this.form.city_id &&
      //   this.form.area_id &&
      //   this.form.street
      // ) {
      //   return this.addAddress()
      // } else {
      //   return this.errMsg(
      //     'You should to select address or fill required data first'
      //   )
      // }
      // if (this.form.governorate_id) {
      //   this.addAddress()
      // } else if (this.addresses.length <= 0) {
      //   this.errMsg('You should to Create your address')
      // } else if (!this.address_id) {
      //   this.errMsg('You should to select your address')
      // }
    },
    submitCoupon () {
      Api.applyCoupon({ coupon: this.coupon }).then(
        (res) => {
          this.successMsg(this.$t('checkOut.couponAddedSuccessfully'))
          this.orderSummary()
        },
        () => {
          this.errMsg(this.$t('checkOut.invalidCoupon'))
          this.coupon = ''
        }
      )
    },
    orderSummary () {
      const data = {
        coupon: this.coupon,
        address_id: this.addressId
      }
      this.$store.dispatch('carts/getOrderSummary', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.order-info {
  .coupon-section {
    background: $cart-background-color;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    input.no-outlines {
      border: none;
      width: 100%;
      padding: 12px 10px 10px 10px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .no-outlines:focus {
      outline: none;
    }
  }

  button {
    background-color: $main-color;
    border: none;
    color: #fff;
    padding: 12px 20px 10px 20px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .next-btn {
    border-radius: 5px;
  }
}
</style>
