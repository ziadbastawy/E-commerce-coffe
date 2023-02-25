<template>
  <div class="product-counter">
    <b-button class="product-counter-btn" @click="decrementQuantity">
      <b-icon-dash />
    </b-button>
    <span class="product-counter-number"> {{ countValue }}</span>
    <b-button class="product-counter-btn" @click="incrementQuantity">
      <b-icon-plus />
    </b-button>
  </div>
</template>
<script>
import { BIconPlus, BIconDash } from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default {
  name: 'CCounter',
  components: {
    BIconPlus,
    BIconDash
  },
  props: {
    productId: {
      type: [Number, String],
      default: 0
    }
  },
  data () {
    return {
      countValue: 1
    }
  },
  computed: {
    ...mapGetters({ getProduct: 'carts/getSpecificProduct' }),
    product () {
      return this.getProduct(this.productId)
    }
  },
  watch: {
    'product.quantity': {
      handler (val) {
        if (val) {
          this.countValue = val
        }
      },
      immediate: true
    }
    //  'product.quantity' (val) {
    //     this.countValue = val
    //   }
  },
  methods: {
    incrementQuantity () {
      this.countValue += 1
      const payload = {
        id: this.productId,
        newQuantity: this.countValue
      }
      this.$store.dispatch('carts/increaseQuantity', payload)
    },
    decrementQuantity () {
      this.countValue -= 1
      const payload = {
        id: this.productId,
        newQuantity: this.countValue
      }
      if (this.countValue === 0) {
        return this.$store.dispatch('carts/removeProductFromCart', payload)
      }
      this.$store.dispatch('carts/decreaseQuantity', payload)
    }
  }
}
</script>

<style lang="scss" scoped>
.product-counter {
  display: flex;
  align-items: center;

  min-width: 9rem;
  .product-counter-btn {
    width: 2rem;
    height: 2rem;
    padding: 0;
    line-height: 2rem;
    border-radius: 50%;
    background-color: #f2f2f2;
    border: 1px solid transparent;
    color: #606266;
  }
  .product-counter-number {
    color: #606266;
    border: 2px solid #f2f2f2;
    border-radius: 20px;
    margin: 0 0.5rem;
    padding: 2px 1.5rem 0;
    line-height: 25px;
    font-size: $default-font-size-lg;
    font-weight: bold;
  }
}
</style>
