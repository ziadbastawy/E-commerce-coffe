<template>
  <div>
    <b-row class="no-gutters">
      <b-col class="mb-4 mb-lg-0 first-slot" cols="12" lg="6">
        <slot name="first" />
      </b-col>
      <b-col cols="12" lg="6" class="d-flex align-items-center auth-form">
        <slot name="second" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.first-slot {
  padding: 0px !important;
}
.auth-form {
  min-height: 100vh;
  @media (max-width: 991px) {
    min-height: auto;
  }
}
</style>
