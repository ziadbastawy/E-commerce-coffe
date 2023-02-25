<template>
  <div>
    <Heart
      v-if="!isAddedToWishList(productId)"
      :scale="scale"
      class="inactive"
      :style="`color: ${color} ;`"
      @click.native.stop="changeStatus"
    />
    <HeartFull
      v-else
      :scale="scale"
      colorFill="#E02020"
      class="active"
      @click.native.stop="changeStatus"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Heart from '~/assets/images/heart-icon.vue'
import HeartFull from '~/assets/images/heart-icon-full.vue'
export default {
  name: 'CHeart',
  components: {
    Heart,
    HeartFull
  },
  props: {
    productId: {
      type: [Number, String],
      required: true,
      default: ''
    },
    color: {
      type: String,
      default: '#000'
    },
    scale: {
      type: [String, Number],
      default: 1
    }
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({ checkInWishList: 'products/isAddedToWishList' }),
    isAddedToWishList () {
      return (id) => {
        return this.checkInWishList(id)
      }
    }
  },
  watch: {},
  methods: {
    changeStatus () {
      if (this.isUserLogin) {
        const data = {
          product_id: this.productId
        }
        this.$store.dispatch('products/toggleProductWishList', data)
      } else {
        this.errMsg(this.$t('auth.youShouldLoginFirst'))
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.inactive {
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all ease-out 0.2s;
  }
}
.active {
  &:hover {
    cursor: pointer;
    transform: scale(0.8);
    transition: all ease-out 0.2s;
  }
}
</style>
