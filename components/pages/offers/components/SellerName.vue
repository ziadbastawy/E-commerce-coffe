<template>
  <!--
      props:examble  {
          CompanyImage: 'starbuck-logo.png',
          CompanyName: 'Starbucks'
        }
 -->
  <div class="seller-company-container d-flex">
    <div class="seller-brand-image">
      <b-img :src="company.companyImage" />
    </div>
    <div class="company-data">
      <p class="seller-name mb-2">
        {{ $t('products.sellerName') }}
      </p>
      <nuxt-link
        tag="a"
        class="company-name font-weight-bold"
        :to="{ name: 'seller-profile-id', params: { id: company.id } }"
      >
        {{ company.companyName }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SellerName',
  props: {
    company: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.seller-brand-image {
  max-width: 80px;
  margin-inline-end: 15px;
}
.company-data {
  align-self: center;
  .seller-name {
    color: $gray;
  }
  .company-name {
    color: $primary;
  }
}
</style>
