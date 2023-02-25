<template>
  <div>
    <template v-if="!loading">
      <div class="d-flex apper-haeder align-items-start">
        <div class="icon mr-2">
          <img :src="image" alt="title">
        </div>
        <div class="w-100">
          <h6 class="mb-1">
            {{ title }}
          </h6>
          <p>
            {{ body }}
          </p>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="d-flex align-items-center">
        <div class="icon mr-2">
          <b-skeleton v-if="loading" type="avatar" />
        </div>
        <div class="w-100">
          <b-skeleton v-if="loading" width="50%" />
          <b-skeleton v-if="loading" width="95%" height="1.5rem" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    this.loading = false
  }
}
</script>

<style lang="scss" scoped>
.apper-haeder {
  color: #231f20;
  .icon {
    margin-inline-end: 0.5rem;
  }
  img {
    max-width: 2.25rem;
    margin-inline-end: 1rem;
  }
  h6 {
    font-size: 16px;
    font-weight: 800;
  }
  p {
    font-size: 12px;
  }
}
</style>
