<template>
  <div class="cart-item mb-1">
    <b-row class="item-container">
      <b-col cols="2" class="item-image">
        <img :src="item.image" alt="">
      </b-col>
      <b-col cols="6" class="item-data">
        <nuxt-link
          class="name"
          :to="{
            name: 'single-product-id',
            params: {
              id: item.id
            }
          }"
        >
          {{ item.name }}
        </nuxt-link>
        <div class="d-flex justify-content-between">
          <span class="price">{{ item.price }} {{ $t('checkOut.EGP') }}</span>
          <span v-if="item.oldPrice != null" class="oldPrice">{{
            item.oldPrice
          }}</span>
        </div>
      </b-col>
      <b-col cols="2" class="item-quantity">
        <span>
          <span class="d-inline-block"> x </span>
          {{ item.quantity }}</span>
      </b-col>
      <b-col cols="2" class="delete-item">
        <button @click="removeItemFromCart">
          <b-icon-trash class="text-danger mt-2 mt-md-0" />
        </button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BIconTrash } from 'bootstrap-vue'
export default {
  components: {
    BIconTrash
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  methods: {
    removeItemFromCart () {
      this.$emit('removeItemFromCart', this.item.id)
    }
  }
}
</script>
<style lang="scss" scoped>
.cart-item {
  text-align: center;
  //   @media (max-width: $medium-screen) {
  //     margin-top: 0.5rem;
  //     text-align: center;
  //     box-shadow: $default-shadow;
  //     border-bottom: 1px solid #dfdfdf;
  //   }
  padding: 1rem;
  border-radius: 0.5rem;
  transition: $default-transition;
  &:hover {
    background-color: rgba(18, 124, 192, 0.1);
  }
  .item-container {
    .item-image {
      img {
        max-width: 64px;
        max-height: 64px;
        object-fit: cover;
      }
    }
    .item-data {
      font-weight: 700;
      .name {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-align: start;
        text-overflow: ellipsis;
        font-weight: 600;
        font-size: 11pt;
        color: $gray-dark;
      }
      .price {
        color: $main-color;
      }
      .oldPrice {
        color: $gray;
        text-decoration: line-through;
        margin-inline-start: 1rem;
      }
    }
    .item-quantity {
      color: $gray-dark;
      font-weight: 600;
    }
    .delete-item {
      button {
        font-size: 16pt;
        border: none;
        background-color: transparent;
      }
    }
  }
}
</style>
