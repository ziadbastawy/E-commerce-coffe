<template>
  <div>
    <h5 class="title mb-4">
      {{ $t('checkOut.paymentInfo') }}
    </h5>
    <b-row>
      <b-col cols="12" lg="8" order="2" class="payment-method" order-lg="1">
        <form class="options">
          <!-- Premium Card -->
          <div
            v-for="payment in payments"
            :key="payment.id"
            class="option position-relative mb-4 p-4"
            @click="optionChecked"
          >
            <div class="d-flex align-items-center mb-4">
              <div
                class="custom-control custom-radio b-custom-control-lg address-radio"
              >
                <input
                  id="customRadio1"
                  v-model="payment_id"
                  :value="payment.id"
                  type="radio"
                  name="customRadio"
                  class="custom-control-input"
                >
                <label class="custom-control-label" for="customRadio1" />
              </div>
              <div
                class="header d-flex justify-content-between align-items-center w-100"
              >
                <h5 class="title m-0">
                  {{ payment.name }}
                </h5>
                <div v-if="payment.logo" class="info m-0">
                  <img :src="payment.logo" :alt="payment.name + ' logo'">
                </div>
              </div>
            </div>
          </div>
          <b-row>
            <b-col cols="6" sm="4" md="3" xl="2">
              <c-button
                class="w-100 mt-4"
                style="padding: 0.8rem 1rem; max-width: unset"
                @click="submitPayment"
              >
                {{ $t('checkOut.submit') }}
              </c-button>
            </b-col>
          </b-row>
        </form>
      </b-col>
      <b-col cols="12" lg="4" class="side-info" order="1" order-lg="2">
        <b-row>
          <CartDetails :showDelivery="true" />
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import ApiCart from '@/services/cart'
import CartDetails from '@/components/pages/checkout/components/ProceedToCheckout/CartDetails.vue'
export default {
  components: { CartDetails },
  data () {
    return {
      payment_id: '',
      payments: [],
      selected: null,
      month: [
        { value: null, text: 'MM', disabled: true },
        { value: 1, text: '01' },
        { value: 2, text: '02' },
        { value: 3, text: '03' },
        { value: 4, text: '04' },
        { value: 5, text: '05' },
        { value: 6, text: '06' },
        { value: 7, text: '07' },
        { value: 8, text: '08' },
        { value: 9, text: '09' },
        { value: 10, text: '10' },
        { value: 11, text: '11' },
        { value: 12, text: '12' }
      ],
      year: [
        { value: null, text: 'YY', disabled: true },
        { value: 2021, text: '2021' },
        { value: 2022, text: '2022' },
        { value: 2023, text: '2023' },
        { value: 2024, text: '2024' },
        { value: 2025, text: '2025' },
        { value: 2026, text: '2026' },
        { value: 2027, text: '2027' },
        { value: 2028, text: '2028' },
        { value: 2029, text: '2029' },
        { value: 2030, text: '2030' }
      ]
    }
  },

  mounted () {
    this.getPayments()
  },
  methods: {
    getPayments () {
      ApiCart.getpayments().then((res) => {
        this.payments = res.data
      })
    },
    optionChecked (e) {
      this.$emit('optionChecked', e)
    },
    submitPayment () {
      if (this.payment_id) {
        const selectedPayment = this.payments.filter(
          item => item.id === this.payment_id
        )[0]
        this.$emit('payment-id', {
          payment_id: this.payment_id,
          paymentCode: selectedPayment.code
        })
        this.$emit('make-order')
      } else {
        this.errMsg(this.$t('checkOut.youShouldSelectPayment'))
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.payment-method {
  padding-inline-end: 1.5rem !important;
}
</style>
