<template>
  <div class="filtersList mt-0 mt-lg-5">
    <div class="d-flex justify-content-between align-items-start mb-2">
      <h5 class="filters font-weight-bold">
        {{ $t('globals.filters') }}
      </h5>
      <b-button variant="link" class="pt-0 clear-all" @click="resetAll">
        {{ $t('globals.clearAll') }}
      </b-button>
    </div>
    <div>
      <b-card
        v-for="filter in filters.filter(item => item.type !== 'range')"
        :key="filter.key"
        no-body
        class="mb-1 filter-card"
      >
        <!-- Collapse header -->
        <b-card-header
          :id="`filter-header-${filter.key}`"
          v-b-toggle="`filter-${filter.key}`"
          class="filter-header collapsed"
        >
          <p>
            {{ filter.name }}
          </p>
          <span class="when-open"><b-icon-chevron-up /> </span>
          <span class="when-closed"> <b-icon-chevron-down /> </span>
        </b-card-header>

        <!-- Collapse Body -->
        <b-collapse :id="`filter-${filter.key}`" role="tabpanel">
          <b-card-body class="filter-body">
            <template v-if="filter.type === 'multi'">
              <b-form-group>
                <b-form-checkbox-group
                  :id="`checkbox-${filter.key}`"
                  v-model="selected[filter.key]"
                  :name="`filter-${filter.key}`"
                >
                  <b-form-checkbox
                    v-for="option in filter.options"
                    :key="option.id"
                    class="d-block filter-container"
                    :value="option.id"
                    @change="update(filter, option)"
                  >
                    <span class="multi-filter"> {{ option.name }}</span>
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
            </template>
            <template v-else-if="filter.type === 'single'">
              <b-form-group>
                <b-form-radio-group
                  id="radio-group-2"
                  v-model="selected[filter.key]"
                  name="radio-sub-component"
                >
                  <b-form-radio
                    v-for="option in filter.options"
                    :key="option"
                    class="d-block rating-buttons"
                    :value="option"
                    @change="update(filter, option)"
                  >
                    {{ option }}
                  </b-form-radio>
                </b-form-radio-group>
              </b-form-group>
            </template>
            <!-- <template v-else-if="filter.type === 'range'">
              <b-form-group>
                <b-form-input
                  :id="`range-${filter.key}`"
                  v-model.number="selected[filter.key]"
                  type="range"
                  :min="filter.options.min || 0"
                  :max="filter.options.max || 100"
                  @change="update(filter, selected[filter.key])"
                />
              </b-form-group>
              <p>{{ selected[filter.key] }} {{ $t('checkOut.EGP') }}</p>
            </template> -->
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

import { BIconChevronUp, BIconChevronDown } from 'bootstrap-vue'
export default {
  name: 'SideFilter',
  components: {
    BIconChevronUp,
    BIconChevronDown
  },
  props: {
    filters: {
      type: Array,
      default: () => []
    },
    selectedOptions: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      selected: {}
    }
  },
  computed: {},
  watch: {
    selectedOptions (val) {
      this.selected = { ...val }
    }
  },
  mounted () {
    this.updateSelectedFilters(this.selectedOptions)
  },
  methods: {
    update ({ key, type }, option) {
      let chipItem = { ...option, key, type }
      if (type === 'single') {
        chipItem = {
          id: option,
          name: `${key.charAt(0).toUpperCase() + key.slice(1)} : ${option}`,
          key,
          type
        }
      }
      this.$emit('updateFilter', this.selected)
      this.$emit('updateChips', chipItem)
    },
    updateSelectedFilters (val) {
      // for (const item in val) {
      //   if (item !== 'category' && item !== 'subCategory' && process.client) {
      //     setTimeout(() => {
      //       const filterHeaderElement = document.getElementById(
      //         `filter-header-${item}`
      //       )
      //       filterHeaderElement.classList.add('not-collapsed')
      //       filterHeaderElement.classList.remove('collapsed')
      //       filterHeaderElement.setAttribute('aria-expanded', 'true')

      //       const filterElement = document.getElementById(`filter-${item}`)
      //       filterElement.classList.add('show')
      //       filterElement.style.display = 'block'
      //     })
      //   }
      // }
      this.selected = { ...val }
    },
    resetAll () {
      // this.selected = Object.assign({})
      this.$emit('resetAll')
    }
  }
}
</script>
<style lang="scss" scoped>
.filtersList {
  .filters {
    font-size: 22px;
  }
  .clear-all {
    font-size: 14px;
  }
  .filter-card {
    border: none;
    .collapsed > .when-open,
    .not-collapsed > .when-closed {
      display: none;
      transition: $default-transition;
    }
    .filter-header {
      font-size: 14px;
      font-weight: bold;
      background-color: transparent;
      padding: 0.7rem 0;
      border: none;
      display: flex;
      justify-content: space-between;
      p {
        font-weight: bolder;
        margin: 0;
      }
    }
    .filter-body {
      padding: 0;
    }
  }
}
.filter-container {
  margin-bottom: 14px;
  .multi-filter {
    margin-inline-start: 15px;
    display: inline-block;
    color: #231f20;
    font-weight: 400;
    font-size: 18px;
  }
}

.rating-buttons {
  margin-bottom: 14px;
}
</style>
