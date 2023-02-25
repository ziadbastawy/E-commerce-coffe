<template>
  <div class="container">
    <c-headerMedia
      title="Coffee shops nearby you"
      :image="require('@/assets/images/nearby-shops/header.jpg')"
      class="mb-5 mt-4"
    >
      <b-form class="d-flex search-shops mt-3 w-100">
        <b-form-input
          id="search"
          class="search"
          type="text"
          placeholder="Search …"
        />
        <b-form-select v-model="selected" class="areas" :options="options" />
        <button
          type="submit"
          class="d-flex search-submit align-items-center text-white"
        >
          <span class="pt-1">Search</span>
          <b-icon-search />
        </button>
      </b-form>
    </c-headerMedia>
    <b-row class="shops-content">
      <b-col cols="12" lg="3">
        Filter
      </b-col>
      <b-col cols="12" lg="9">
        <header-filter :filters="filters" @removeItem="removeItem" />
        <shop-item
          v-for="(item, id) in shops"
          :key="id"
          :media="item.media"
          :title="item.title"
          :location="item.location"
          :description="item.description"
          :rate="item.rate"
          :map-link="item.mapLink"
          :tags="item.tags"
        />
        <div
          class="load-more d-flex justify-content-center align-items-center my-5"
        >
          <img src="@/assets/images/nearby-shops/loading.svg" alt="loading">
          <span>Load More</span>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { BIconSearch } from 'bootstrap-vue'
import HeaderFilter from '../common/HeaderFilter.vue'
import ShopItem from './ShopItem.vue'
export default {
  components: { BIconSearch, ShopItem, HeaderFilter },
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Select area' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ],
      shops: [
        {
          media: require('@/assets/images/nearby-shops/shop-1.jpg'),
          title: 'Starbucks Coffe',
          location: 'City Square Mall, Cairo Governorate',
          description:
            'Start playing for a chance to win over 2.2 Million prizes inclduing free drinks, exclusive merchandise and a Bose Speaker! Sign in or join Starbucks Rewards to play and get exclusive member benefits.',
          rate: 4,
          mapLink: '#',
          tags: [
            {
              name: 'Takeaway',
              isFeature: false
            },
            {
              name: 'Outdoor dinning',
              isFeature: true
            },
            {
              name: 'Delivery',
              isFeature: true
            }
          ]
        },
        {
          media: require('@/assets/images/nearby-shops/shop-2.jpg'),
          title: 'Cafe Greco',
          location: 'City Square Mall, Cairo Governorate',
          description:
            'Since we opened back in 2009, Uncle Benny\'s Donut & Bagel has had one mission: showing the people of San Francisco what a donut truly made with love tastes like. ',
          rate: 4,
          mapLink: '#',
          tags: [
            {
              name: 'Coffee & Tea',
              isFeature: false
            },
            {
              name: 'Dounts ',
              isFeature: false
            },
            {
              name: 'Outdoor dinning',
              isFeature: true
            },
            {
              name: 'Delivery',
              isFeature: true
            }
          ]
        },
        {
          media: require('@/assets/images/nearby-shops/shop-3.jpg'),
          title: 'Espresso Lab',
          location: 'City Square Mall, Cairo Governorate',
          description:
            'Since we opened back in 2009, Uncle Benny\'s Donut & Bagel has had one mission: showing the people of San Francisco what a donut truly made with love tastes like. ',
          rate: 4,
          mapLink: '#',
          tags: [
            {
              name: 'Coffee & Tea',
              isFeature: false
            },
            {
              name: 'Dounts ',
              isFeature: false
            },
            {
              name: 'Outdoor dinning',
              isFeature: true
            },
            {
              name: 'Delivery',
              isFeature: true
            }
          ]
        },
        {
          media: require('@/assets/images/nearby-shops/shop-4.jpg'),
          title: 'Uncle Benny\'s Donut and Bagel',
          location: 'City Square Mall, Cairo Governorate',
          description:
            'Since we opened back in 2009, Uncle Benny\'s Donut & Bagel has had one mission: showing the people of San Francisco what a donut truly made with love tastes like. ',
          rate: 4,
          mapLink: '#',
          tags: [
            {
              name: 'Coffee & Tea',
              isFeature: false
            },
            {
              name: 'Dounts ',
              isFeature: false
            },
            {
              name: 'Outdoor dinning',
              isFeature: true
            },
            {
              name: 'Delivery',
              isFeature: true
            }
          ]
        },
        {
          media: require('@/assets/images/nearby-shops/shop-5.jpg'),
          title: 'Il Mulino Bakery & Restaurant',
          location: 'City Square Mall, Cairo Governorate',
          description:
            'Since we opened back in 2009, Uncle Benny\'s Donut & Bagel has had one mission: showing the people of San Francisco what a donut truly made with love tastes like. ',
          rate: 4,
          mapLink: '#',
          tags: [
            {
              name: 'Coffee & Tea',
              isFeature: false
            },
            {
              name: 'Dounts ',
              isFeature: false
            },
            {
              name: 'Outdoor dinning',
              isFeature: true
            },
            {
              name: 'Delivery',
              isFeature: true
            }
          ]
        },
        {
          media: require('@/assets/images/nearby-shops/shop-6.jpg'),
          title: 'Home Coffee Roasters',
          location: 'City Square Mall, Cairo Governorate',
          description:
            'Since we opened back in 2009, Uncle Benny\'s Donut & Bagel has had one mission: showing the people of San Francisco what a donut truly made with love tastes like. ',
          rate: 4,
          mapLink: '#',
          tags: [
            {
              name: 'Coffee & Tea',
              isFeature: false
            },
            {
              name: 'Dounts ',
              isFeature: false
            },
            {
              name: 'Outdoor dinning',
              isFeature: true
            },
            {
              name: 'Delivery',
              isFeature: true
            }
          ]
        },
        {
          media: require('@/assets/images/nearby-shops/shop-7.jpg'),
          title: 'Ralph’s German Bakery',
          location: 'City Square Mall, Cairo Governorate',
          description:
            'Since we opened back in 2009, Uncle Benny\'s Donut & Bagel has had one mission: showing the people of San Francisco what a donut truly made with love tastes like. ',
          rate: 4,
          mapLink: '#',
          tags: [
            {
              name: 'Coffee & Tea',
              isFeature: false
            },
            {
              name: 'Dounts ',
              isFeature: false
            },
            {
              name: 'Outdoor dinning',
              isFeature: true
            },
            {
              name: 'Delivery',
              isFeature: true
            }
          ]
        }
      ],
      filters: ['Coffee & Tea', 'Cafes']
    }
  },
  methods: {
    removeItem (index) {
      this.filters.splice(index, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
.search-shops {
  .search,
  .areas {
    margin-inline-end: 2rem;
    height: 45px;
    padding-top: 0.5rem;
  }
  .areas {
    width: 30%;
  }
  .search-submit {
    background-color: #107cc0;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    span {
      margin-inline-end: 0.5rem;
    }
  }
  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: space-between;
    .search {
      margin-inline-end: 0;
      margin-bottom: 0.5rem;
    }
    .areas {
      margin-inline-end: 0;
      width: 70%;
    }
  }
  @media (max-width: 767px) {
    .search,
    .areas {
      width: 45%;
      margin-bottom: 0.5rem;
    }
    .search-submit {
      margin: 0 auto;
    }
  }
}
</style>
