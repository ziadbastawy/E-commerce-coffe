<template>
  <div class="for-background">
    <b-container>
      <b-row>
        <b-col md="12" lg="6" offset-lg="3">
          <div class="thank-you-section p-md-5 py-5 px-2 my-5 text-center">
            <h5 class="font-weight-bold mb-3">
              Your Order has been cancelled
            </h5>
            <img
              class="success-icon"
              src="../../../assets/images/checkout/cancel.svg"
              alt="success-icon"
            >
            <p class="px-lg-5 px-0 font-weight-bold">
              You can re-order your order from here
              <span>
                <c-button to="/profile/order-history">
                  Order history page
                </c-button>
              </span>
            </p>
            <div class="text-center">
              <h5 class="mb-3">
                OR
              </h5>
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
