<template>
  <b-row>
    <b-col cols="12">
      <div class="mt-5">
        <h3 class="font-weight-bold">
          {{ $t('checkOut.myCart') }}
        </h3>
      </div>
      <div class="mt-5 empty-cart p-4 mb-5">
        <b-row class="align-items-center">
          <b-col class="p-4" lg="2" md="3">
            <div class="cart-icon-holder p-1">
              <b-img
                class="p-2 cart-logo-icon"
                src="@/assets/images/cart/basket.svg"
              />
            </div>
          </b-col>
          <b-col lg="10" md="9">
            <div class="py-5 empty-cart-conent">
              <h3 class="font-weight-bold">
                {{ $t('checkOut.emptyCart') }}
              </h3>
              <p class="font-weight-bold mb-0">
                {{ $t('checkOut.noItemsInCart') }}
              </p>
              <div v-if="!isUserLogin">
                <b-button
                  pill
                  to="/login"
                  variant="primary"
                  class="py-2 mr-3 px-4 mb-3 mb-md-0"
                >
                  <span class="login-to-your-account">
                    {{ $t('checkOut.logToAccount') }}
                  </span>
                </b-button>
                <b-button
                  pill
                  to="/sign-up"
                  variant="outline-secondary"
                  class="add-bg-color px-5 py-2"
                >
                  <span class="create-account">
                    {{ $t('checkOut.createAccount') }}
                  </span>
                </b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      numbersOfSlider: 5
    }
  }
}
</script>

<style lang="scss" scoped>
.empty-cart {
  background: #f3fcfe;
  border-radius: 10px;
  .cart-icon-holder {
    .cart-logo-icon {
      -o-object-fit: contain;
      object-fit: contain;
    }
  }

  .add-bg-color {
    background: #fff;
    color: #000 !important;
    border: 1px solid #00000030;
  }
  .login-to-your-account,
  .create-account {
    padding-top: 2px;
  }
  .create-account {
    color: #231f20;
  }
  .empty-cart-conent {
    h3,
    p {
      color: #231f20;
    }
  }
}

@media (max-width: 768px) {
  .empty-cart {
    text-align: center;
    img {
      width: 50%;
      height: 50%;
    }
    .empty-cart-conent {
      text-align: center;
    }
  }
}
</style>
