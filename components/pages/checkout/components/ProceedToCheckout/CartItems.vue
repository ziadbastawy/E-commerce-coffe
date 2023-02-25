<template>
  <b-col cols="12" class="info p-4 mb-3">
    <h5 class="mb-3">
      {{ $t('checkOut.theItems') }}
    </h5>
    <div class="details">
      <b-row
        v-for="(product, id) in productCarts"
        :key="id"
        jus
        align-h="between"
        align-v="center"
        class="cart-item mb-2 font-weight-bolder text-center px-4"
      >
        <b-col cols="2" class="item-image p-1">
          <img :src="product.img ? product.img : product.image" alt="item">
        </b-col>
        <b-col cols="8" class="item-name">
          {{ product.name }}
        </b-col>
        <b-col cols="2" class="item-quantity">
          x{{ product.quantity }}
        </b-col>
      </b-row>
    </div>
  </b-col>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    productCarts () {
      return this.$store.getters['carts/cartsProducts']
    },
    totalPrice () {
      return this.productCarts.reduce((sum, p) => sum + p.price * p.quantity, 0)
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
        .item-name {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 600;
          font-size: 11pt;
          color: #231f20;
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
