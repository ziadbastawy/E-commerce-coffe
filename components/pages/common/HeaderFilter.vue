<template>
  <div class="header-filter">
    <div class="d-flex title mb-3">
      <h4 class="m-0">
        {{ categoryName || $t('products.products') }}
        {{ subCategoryName }}
      </h4>
      <span
        class="font-weight-bold"
      >&nbsp;{{
        `(${$t('globals.quantityItems', {
          quantity
        })})`
      }}</span>
    </div>
    <ul v-if="filters.length" class="filters d-flex flex-wrap my-4">
      <li v-for="(filter, index) in filters" :key="filter.id">
        <span>{{ filter.name }}</span>
        <b-icon-x class="icon" @click="filterItem(filter, index)" />
      </li>
    </ul>
  </div>
</template>
<script>
import { BIconX } from 'bootstrap-vue'
export default {
  components: { BIconX },
  props: {
    categoryName: {
      type: String,
      default: () => ''
    },
    subCategoryName: {
      type: String,
      default: () => ''
    },
    quantity: {
      type: [String, Number],
      default: () => 0
    },
    filters: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  methods: {
    filterItem (filter, index) {
      this.$emit('removeItem', { filter, index })
    }
  }
}
</script>
<style lang="scss" scoped>
.header-filter {
  h4 {
    font-size: 22px;
    font-weight: bolder;
  }
  color: $gray-dark;
  .title {
    span {
      margin-inline-start: 0.5rem;
      line-height: 1.6;
    }
  }
  .filters {
    li {
      display: flex;
      background-color: #e9e7e7;
      padding: 0.25rem 0.75rem;
      margin-bottom: 0.5rem;
      border-radius: 50rem;
      align-items: center;
      margin-inline-end: 0.5rem;
      margin-block-end: 0.5rem;
      .icon {
        margin-inline-start: 0.75rem;
        cursor: pointer;
      }
    }
  }
}
</style>
