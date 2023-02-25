<template>
  <b-row class="product-cat-header my-5">
    <b-col
      v-for="subCategory in subCategoriesList"
      :key="subCategory.id"
      cols="12"
      sm="6"
      lg="4"
      xl="3"
    >
      <div
        class="subCategoryCard"
        :class="{ active: checkCurrentActiveSubCategory(subCategory.id) }"
      >
        <div class="category" @click="changeCurrentActive(subCategory)">
          <p class="sub-cat-title">
            {{ subCategory.name }}
          </p>
          <img
            :src="subCategory.icon"
            class="sub-cat-media"
            :alt="subCategory.name"
          >
        </div>
      </div>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props: {
    subCategoriesList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentCat: 0
    }
  },
  computed: {
    checkCurrentActiveSubCategory () {
      return (id) => {
        if (Number(this.$route.query.subCategory) === id) {
          return true
        } else {
          return false
        }
      }
    }
  },
  methods: {
    changeCurrentActive ({ id }) {
      const newId = this.currentCat === id ? '' : id
      this.currentCat = newId

      this.$router.push({
        name: 'products',
        query: { ...this.$route.query, subCategory: newId }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col,
.col-auto,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm,
.col-sm-auto,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md,
.col-md-auto,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg,
.col-lg-auto,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl,
.col-xl-auto {
  padding-left: 0.4rem !important;
  padding-right: 0.4rem !important;
}
.product-cat-header {
  .subCategoryCard {
    padding: 0.3rem;
    border-radius: $default-radios * 2;
    border: 2px solid transparent;
    &.active {
      border-color: $main-color;
    }
  }
  .category {
    text-decoration: none;
    width: 100%;
    // padding: 0.3rem 1rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-inline-start: 1rem;
    background-color: $sub-category-card-background;
    border-radius: $default-radios * 2;
    border: 2px solid transparent;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 130px;
    position: relative;
    border: none !important;
    .sub-cat-title {
      font-size: 16px;
      color: $main-color;
      font-weight: bold;
      margin-bottom: 0;
      place-self: flex-start;
      margin-top: 2rem;
    }
    .sub-cat-media {
      border-radius: $default-radios * 2;
    }

    img {
      // max-width: 60%;
      height: 8rem;
      object-fit: contain;
      width: auto;
      position: relative;
      right: -1px;
      bottom: -2px;
    }
    &.active {
      border-color: #cc1010;
    }
  }
}

html:lang(ar) {
  .category {
    .sub-cat-media {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
    img {
      width: auto;
      position: relative;
      right: auto !important;
      left: -1px !important;
    }
  }
}
</style>
