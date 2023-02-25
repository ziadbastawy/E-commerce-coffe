<template>
  <div class="seller-data d-flex my-4">
    <div class="avatar">
      <img :src="vendorData.logo" alt="avatar" class="rounded-circle">
    </div>
    <div class="seller-coffee-data">
      <h4 class="title">
        {{ vendorData.company_name }}
      </h4>
      <div class="location d-flex align-items-center">
        <img
          src="@/assets/images/seller-profile/map-marker.svg"
          alt="map marker"
        >
        <p class="m-0 mt-1">
          {{ vendorData.address }}
        </p>
      </div>
      <b-form-rating
        :value="4"
        color="#ffd008"
        class="product-rate"
        no-border
        readonly
      />
      <div class="tags my-2">
        <span v-for="(tag, id) in vendorData.feature" :key="id" class="tag">
          {{ tag }}
        </span>
      </div>
      <p class="description m-0">
        {{ vendorData.description }}
      </p>
    </div>
  </div>
</template>
<script>
// import { BIconCheck2 } from 'bootstrap-vue'
export default {
  components: {},
  props: {
    vendorData: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data () {
    return {
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
  }
}
</script>
<style lang="scss" scoped>
.seller-data {
  .avatar {
    margin-inline-end: 1.5rem;
    img {
      width: 5rem;
      height: 5rem;
    }
  }
}
</style>
