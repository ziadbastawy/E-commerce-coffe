<template>
  <div class="checkout my-3">
    <div class="container">
      <div class="content">
        <c-button v-if="step === 0" class="back-home px-0" to="cart">
          <b-icon-chevron-left class="arabic-style" />{{
            $t('checkOut.backToCart')
          }}
        </c-button>
        <c-button
          v-if="step > 0"
          class="back-home px-0 link"
          to="#"
          @click="step--"
        >
          <b-icon-chevron-left class="arabic-style" /> {{ $t('checkOut.back') }}
        </c-button>
        <div class="form-steps d-flex my-5">
          <div
            :class="{ active: step === 0 }"
            class="step d-flex align-items-center"
          >
            <span class="step-number">1</span>
            <span class="step-content">{{ $t('checkOut.deliveryInfo') }}</span>
          </div>
          <div
            :class="{ active: step === 1 }"
            class="step d-flex align-items-center"
          >
            <span class="step-number">2</span>
            <span class="step-content">{{ $t('checkOut.orderSummry') }} </span>
          </div>
          <div
            :class="{ active: step === 2 }"
            class="step d-flex align-items-center"
          >
            <span class="step-number">3</span>
            <span class="step-content">{{ $t('checkOut.paymentInfo') }} </span>
          </div>
        </div>
        <b-row>
          <b-col v-if="step === 0">
            <Address
              :addressIdProp="form.address_id"
              @nextStep="nextStep"
              @optionChecked="optionChecked"
              @address-id="addressId"
            />
          </b-col>
          <b-col v-if="step === 1">
            <Coupon
              :addressId="form.address_id"
              @updateCoupon="updateCoupon"
              @nextStep="nextStep"
              @optionChecked="optionChecked"
            />
          </b-col>
          <b-col v-if="step === 2">
            <Payment
              @collapseUi="collapse"
              @prevStep="prevStep"
              @optionChecked="optionChecked"
              @payment-id="paymentId"
              @make-order="makeOrder"
            />
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
import { BIconChevronLeft } from 'bootstrap-vue'

import Address from './components/ProceedToCheckout/Address.vue'
import Payment from './components/ProceedToCheckout/Payment.vue'
import Coupon from './components/ProceedToCheckout/Coupon.vue'

import ApiCart from '@/services/cart'
export default {
  components: {
    BIconChevronLeft,
    Address,
    Payment,
    Coupon
  },

  data () {
    return {
      collapseval: '',
      paymentCode: '',
      form: {
        address_id: '',
        payment_id: '',
        coupon: ''
      },
      step: 0
    }
  },

  methods: {
    prevStep () {
      this.step -= 1
    },
    nextStep () {
      this.step += 1
    },
    collapse (val) {
      this.collapseval = val
    },
    optionChecked (e) {
      const element = e.currentTarget
      if (!element.classList.contains('checked')) {
        const scrollHeight = element.scrollHeight // ? The actually height.
        const allElements = document.querySelectorAll(
          `.${element.classList[0]}`
        )
        allElements.forEach((x) => {
          x.classList.remove('checked')
          if (!element.classList.contains('address')) {
            x.style.height = '5rem'
          }
        })
        if (!element.classList.contains('address') && this.collapseval) {
          // collapseval for fix any checkbox without collaspe
          element.style.height = `${scrollHeight}px`
        }
      }
      element.classList.add('checked')
    },
    addressId (id) {
      this.form.address_id = id
    },
    paymentId ({ payment_id, paymentCode }) {
      this.paymentCode = paymentCode
      this.form.payment_id = payment_id
    },
    updateCoupon (value) {
      this.form.coupon = value
    },
    makeOrder () {
      ApiCart.makeOrder(this.form)
        .then((res) => {
          this.$store.dispatch('carts/resetCartConfiguration')
          if (this.paymentCode !== 'cashondelivery') {
            const element = document.createElement('a')
            element.setAttribute('href', res.data.cashierUrl)
            document.body.appendChild(element)
            element.click()
          } else {
            this.$router.push({
              name: 'checkout-success',
              query: {
                orderId: res.data.orderId
              }
            })
          }
        })
        .catch((error) => {
          const err = Object.values(error)[2].data.data.error
          this.errMsg(err)
        })
    }
  }
}
</script>
<style lang="scss">
.checkout {
  .content {
    .form-steps {
      flex-wrap: wrap;
      .step {
        padding: 10px 0;
        color: #9d9d9d;
        margin-inline-end: 3rem;
        font-weight: 600;
        .step-number {
          margin-inline-end: 0.5rem;
          width: 2rem;
          height: 2rem;
          line-height: 2rem;
          border-radius: 50%;
          border: 2px solid;
          text-align: center;
        }
        .step-content {
          font-size: 16pt;
        }
        &.active {
          .step-number {
            color: $main-color;
          }
          .step-content {
            color: black;
          }
        }
      }
    }
  }
}
html:lang(ar) {
  .checkout {
    .content {
      .arabic-style {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
