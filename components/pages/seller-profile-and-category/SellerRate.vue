<template>
  <div class="seller-rate d-flex align-items-center my-4">
    <div class="total-rate">
      <p
        class="total m-0 mx-auto d-flex align-items-center justify-content-center rounded-pill pt-1"
      >
        4.6
      </p>
      <b-form-rating
        :value="4"
        color="#ffd008"
        class="product-rate"
        no-border
      />
    </div>
    <div class="rate-degrees w-100">
      <div
        v-for="(index, id) in 5"
        :key="id"
        class="degree d-flex align-items-center"
      >
        <span>{{ 6 - index }} Stars</span>
        <b-progress
          :value="6 - index"
          max="5"
          class="stars w-75"
          height="0.75rem"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return { count: 0 }
  }
}
</script>
<style lang="scss">
.seller-rate {
  .total-rate {
    margin-inline-end: 2.25rem;
    .total {
      color: $gray-dark;
      width: 6rem;
      height: 6rem;
      background-color: #ededed;
      font-size: 14pt;
    }
  }
  .rate-degrees {
    .degree {
      span {
        width: 5rem;
      }
      .stars {
        background-color: #d6d6d6;
        border-radius: 50rem;
        .progress-bar {
          background-color: #f7b500;
          border-radius: 50rem;
        }
      }
    }
  }
}
</style>
