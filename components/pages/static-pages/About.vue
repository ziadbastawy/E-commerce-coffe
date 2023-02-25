<template>
  <div class="about-us">
    <div class="container">
      <!-- {{ aboutUsItems }} -->
      <div class="content">
        <c-headerMedia :title="$t('staticPages.aboutCofePedia')" />
        <div class="info">
          <section class="info-about">
            <h6 class="title font-weight-bold">
              {{ $t('staticPages.whoWeAre') }}
            </h6>
            <p class="description">
              {{ aboutUsItems.details.description }}
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    aboutUs: {
      type: Object,
      require: false,
      default: () => {}
    }
  },
  data () {
    return {
      aboutUsItems: {}
    }
  },

  created () {
    this.aboutUsItems = { ...this.aboutUs }
  },

  method: {}
}
</script>
<style lang="scss" scoped>
@import './about';
</style>
