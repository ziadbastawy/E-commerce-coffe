<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="overflow-hidden mt-4 my-wish-list-card">
      <b-card-header
        header-tag="header"
        class="p-0 accordion-header"
        role="tab"
      >
        <b-button
          v-b-toggle="`accordion-${id}`"
          block
          class="accordion pr-5 pl-3 bg-white"
          @click="showHideDetails"
        >
          <div class="d-flex justify-content-between">
            <div>
              <div class="d-flex order-with-label">
                <h5 class="font-weight-bold pt-2 mb-0 order-id mr-3">
                  {{ $t('profile.orderId') }} : {{ orderItem.id }}
                </h5>
                <c-badge
                  :content="orderItem.status"
                  color="#fff"
                  :background="`#${orderItem.status_color}`"
                />
              </div>
              <span
                class="d-block pt-3 font-weight-bold text-left view-hide-details"
              >
                {{
                  viewDetails
                    ? $t('profile.hideDetails')
                    : $t('profile.ViewDetails')
                }}
              </span>
            </div>
            <p class="date-of-order font-weight-bold pt-2 mb-0">
              {{ orderItem.date }}
            </p>
          </div>
        </b-button>
      </b-card-header>
      <b-collapse
        :id="`accordion-${id}`"
        class="accordion-content"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <b-row>
            <b-col cols="12" md="6">
              <p class="order-info-title font-weight-bold">
                {{ $t('profile.deliveryTo') }}
              </p>
              <p class="font-weight-bold pr-lg-5 pr-1 delivery-address">
                {{ orderItem.address.governorate }}
                {{ $t('profile.governorate') }}
                ,
                {{ orderItem.address.city }} {{ $t('profile.city') }} ,
                {{ orderItem.address.street }}
              </p>
            </b-col>
            <b-col cols="12" md="6">
              <p class="order-info-title font-weight-bold">
                {{ $t('profile.paymentMethod') }}
              </p>
              <div class="payment-method">
                <div
                  class="font-weight-bold d-flex justify-content-between mb-2"
                >
                  {{ orderItem.payment_method }}
                </div>
                <div
                  class="font-weight-bold gray-color d-flex justify-content-between"
                >
                  <p>
                    {{ $t('profile.subtotal') }}
                  </p>
                  <p>{{ orderItem.sub_total }}</p>
                </div>
                <div
                  class="font-weight-bold gray-color d-flex justify-content-between"
                >
                  <p>
                    {{ $t('profile.COD') }}
                  </p>
                  <p>{{ orderItem.delivery_charge }}</p>
                </div>
                <div class="font-weight-bold d-flex justify-content-between">
                  <p>
                    {{ $t('profile.total') }}
                  </p>
                  <p>{{ orderItem.total_price }}</p>
                </div>
              </div>
              <div
                class="d-flex justify-content-center reorder-btn"
                @click="makeReorder()"
              >
                <button>{{ $t('profile.reorder') }}</button>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
        <b-card-body
          v-for="(item, index) in orderItem.items"
          :key="index"
          class="add-border-top"
        >
          <b-row>
            <b-col cols="12" md="5">
              <div class="product-item d-flex align-items-center">
                <img
                  :src="item.image"
                  alt="product"
                  class="mr-2 product-image"
                >
                <h6 class="font-weight-bold">
                  {{ item.name }}
                </h6>
              </div>
            </b-col>
            <b-col cols="12" md="3">
              <p class="">
                <span class="d-md-none font-weight-bold">
                  {{ $t('profile.quantity') }} :
                </span>
                x {{ item.quantity }}
              </p>
            </b-col>
            <b-col cols="12" md="4">
              <div class="seller-name d-flex d-md-block align-items-baseline">
                <p class="font-weight-bold mb-md-2 mb-0">
                  {{ $t('profile.seller') }}
                  <span class="d-md-none mr-2"> : </span>
                </p>
                <p class="brand-name font-weight-bold mb-0">
                  {{ item.vendor.company_name }}
                </p>
              </div>
            </b-col>
          </b-row>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    orderItem: {
      type: Object,
      require: false,
      default: () => ({})
    },

    id: {
      type: [String, Number],
      default: '1'
    }
  },
  data () {
    return {
      orderItems: [],
      viewDetails: false
    }
  },

  created () {},
  methods: {
    maskCreditCard (number) {
      const str = String(number)
      const lastFourDigits = str.slice(-4)
      return lastFourDigits.padStart(str.length, '*')
    },
    showHideDetails () {
      this.viewDetails = !this.viewDetails
    },
    makeReorder () {
      this.$emit('makeReorder', this.orderItem.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-wish-list-card {
  border: none;
  .accordion-header {
    background: transparent;
    :focus {
      box-shadow: none;
    }
    .order-id {
      line-height: 1.5;
    }
    .accordion {
      border: none;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      .order-id {
        color: #000;
        @media (max-width: 767px) {
          font-size: 1rem;
        }
      }
      .order-with-label {
        flex-direction: row;
        align-items: start;
        margin-left: 0;
      }
      .view-hide-details {
        color: $primary;
        @media (max-width: 767px) {
          font-size: 1rem;
        }
      }
      .date-of-order {
        color: $gray;
        @media (max-width: 767px) {
          font-size: 1rem;
        }
      }
    }
  }
  .order-info-title {
    color: $gray;
    font-size: 14px;
  }
  .personal-info p {
    color: $gray-dark;
  }
  .payment-method {
    padding-inline-end: 50px;
    img {
      max-width: 50px;
    }
    .visa-number-color {
      color: #f3ae16;
    }
    .gray-color {
      color: $gray;
    }
  }
  .reorder-btn button {
    color: white;
    background-color: #107cc0;
    outline: auto;
    padding: 1rem 2rem;
    border-radius: 12px;
    &:active {
      background-color: #085686;
    }
  }
}
.add-border-top {
  border-top: 1px solid $gray;
  .product-item {
    .product-image {
      max-width: 20%;
    }
    h6 {
      line-height: 1.8;
    }
  }
  .seller-name {
    .brand-name {
      color: $primary;
    }
  }
}

html:lang(ar) {
  .accordion-header {
    .accordion {
      padding-right: 1rem !important;
      padding-left: 3rem !important;
    }
  }

  .view-hide-details {
    text-align: right !important;
  }
  .order-with-label h5 {
    margin-right: 0 !important;
    margin-left: 1rem !important;
  }
  .delivery-address {
    padding-right: 0 !important;
    padding-left: 3rem !important;
  }
  .product-item {
    .product-image {
      margin-right: 0 !important;
      margin-left: 0.5rem !important;
    }
  }
}
</style>
