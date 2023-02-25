<template>
  <div>
    <offers-list />
  </div>
</template>

<script>
import offersList from '~/components/pages/offers/OffersList.vue'
export default {
  name: 'Offers',
  components: {
    offersList
  }
}
</script>
