<template>
  <div class="shop-item overflow-hidden mb-3">
    <b-row>
      <b-col cols="12" lg="3" class="shop-media">
        <img :src="media" alt="shop media">
      </b-col>
      <b-col
        cols="12"
        lg="9"
        class="shop-content seller-coffee-data position-relative py-4 "
      >
        <h4 v-if="title" class="title">
          {{ title }}
        </h4>
        <div v-if="location" class="location d-flex align-items-center">
          <img
            src="@/assets/images/nearby-shops/map-marker.svg"
            alt="map marker"
          >
          <p class="m-0 mt-1">
            {{ location }}
          </p>
        </div>
        <b-form-rating
          v-if="rate"
          :value="rate"
          color="#ffd008"
          class="product-rate"
          no-border
        />
        <div v-if="tags.length" class="tags">
          <span
            v-for="(tag, id) in tags"
            :key="id"
            class="tag"
            :class="{ feature: tag.isFeature }"
          >
            <b-icon-check-2 v-if="tag.isFeature" class="icon" />
            {{ tag.name }}
          </span>
        </div>
        <p v-if="description" class="description m-0">
          {{ description }}
        </p>
        <c-button
          v-if="mapLink"
          class="show-on-map"
          style="padding-top:1.25rem"
        >
          Show on Map
        </c-button>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { BIconCheck2 } from 'bootstrap-vue'
export default {
  components: { BIconCheck2 },
  props: {
    media: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    rate: {
      type: Number,
      required: true
    },
    mapLink: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
.shop-item {
  border: 1px solid #e3e3e3;
  border-radius: $default-radios;
  .shop-media {
    img {
      aspect-ratio: 16/12;
      @media (max-width: 991px) {
        max-height: 15rem;
      }
    }
  }
}
</style>
