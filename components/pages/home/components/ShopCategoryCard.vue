<template>
  <!--
    1 - background for background color has default value '#4470C1'
    2 - color for text color has default value '#ffd008'
    3 - category is Object contain name, icon, id, children's
   -->
  <nuxt-link :to="link" class="category-link text-decoration-none">
    <b-row
      v-show="!loading"
      class="category-item m-0 position-relative"
      :style="{ 'background-color': background }"
    >
      <b-col
        cols="6"
        class="item-name font-weight-bolder"
        :style="{ color: color }"
      >
        {{ category.name }}
      </b-col>
      <b-col cols="6" class="item-image">
        <img :src="category.icon" alt="category item">
      </b-col>
    </b-row>
    <b-skeleton-img v-if="loading" />
  </nuxt-link>
</template>
<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
      default: () => {}
    },
    color: {
      type: String,
      default: '#ffd008'
    },
    background: {
      type: String,
      default: '#4470C1'
    }
  },
  data () {
    return { loading: true }
  },
  computed: {
    link () {
      // const subCategory = this.category.children.filter(
      //   item => Number(item.order) === 1
      // )[0].id
      return {
        name: 'products',
        query: {
          category: this.category.id
          // subCategory
        }
      }
    }
  },
  mounted () {
    this.loading = false
  }
}
</script>
<style lang="scss" scoped>
.category-link {
  display: block;
  .category-item {
    border-radius: 1rem;
    height: 7.5rem;
    padding: 1rem 0.5rem;
    &::after {
      content: '';
      background-image: url('@/assets/images/shop-category-item-icon.svg');
      width: 35%;
      height: 100%;
      position: absolute;
      left: 0rem;
      top: 0rem;
      background-repeat: no-repeat;
      background-size: contain;
      background-position-x: right;
      z-index: 0;
    }
    .item-name {
      font-size: 16px;
      z-index: 999;
    }
    .item-image {
      z-index: 1;
      @media (max-width: 500px) {
        right: 0rem !important;
      }
      img {
        position: absolute;
        right: 0.6rem;
        top: -1rem;
        object-fit: contain;
        transform: scale(1.3);
        z-index: 1;
        @media (max-width: 576px) {
          right: 2.6rem !important;
        }
      }
    }

    @media (max-width: 576px) {
      .item-image {
        right: -3rem;
      }
    }
  }
}
</style>
