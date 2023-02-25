<template>
  <div v-if="loading" class="loading-page">
    <spring-spinner :animation-duration="2000" :size="80" :color="'#007bff'" />
  </div>
</template>

<script>
import 'epic-spinners/dist/lib/epic-spinners.min.css'
import { SpringSpinner } from 'epic-spinners/dist/lib/epic-spinners.min.js'

export default {
  name: 'Spinners',
  components: {
    SpringSpinner
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  padding-top: 200px;
  z-index: 999999;
  .spring-spinner {
    margin: auto;
  }
}
</style>
