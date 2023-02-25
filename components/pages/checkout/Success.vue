<template>
  <div class="for-background">
    <b-container>
      <b-row class="justify-content-center">
        <b-col md="12" lg="6">
          <div
            class="thank-you-section p-md-5 py-5 px-2 my-5 text-center justify-content-center"
          >
            <h3 class="font-weight-bold">
              {{ $t('checkOut.thankYou') }}
            </h3>
            <h5 class="font-weight-bold mb-3">
              {{ $t('checkOut.yourOrderPlacedSuccessfully') }}
            </h5>
            <img
              class="success-icon"
              src="../../../assets/images/cart/success-icon.svg"
              alt="success-icon"
            >
            <h5 class="font-weight-bold mb-3">
              {{ $t('checkOut.orderId') }} - {{ orderId }}
            </h5>
            <p class="px-lg-5 px-0 font-weight-bold">
              {{ $t('checkOut.youWillReceiveAnSMSWithYourOrderDetails') }}
            </p>
            <div class="text-center">
              <!-- <b-button
                pill
                variant="primary"
                class="mb-3 d-block"
                @click="goTo('/profile/order-history/')"
              >
                <span class="track-your-order">Track Your Order</span>
              </b-button> -->
              <b-button
                pill
                variant="outline-secondary"
                class="mb-3 d-block"
                @click="goTo('/')"
              >
                <span class="continue-shopping">
                  {{ $t('checkOut.continueShopping') }}
                </span>
              </b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'Success',
  data () {
    return {
      orderId: Number(this.$route.query.orderId, 10)
    }
  },
  methods: {
    goTo (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss" scoped>
.for-background {
  padding: 4rem 0;
  background: $cart-background-color;
  .thank-you-section {
    background: #fff;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 50px;
    @media (max-width: 767px) {
      margin: 1rem 0px;
    }
    .success-icon {
      max-width: 130px;
      margin-bottom: 30px;
    }
    button {
      padding: 12px 20px 10px 20px;
      width: 300px;
      margin: auto;
      @media (max-width: 767px) {
        max-width: fit-content;
      }
    }
  }
}
</style>
