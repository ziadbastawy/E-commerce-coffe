<template>
  <div>
    <login />
  </div>
</template>

<script>
import Login from '@/components/pages/auth/Login.vue'
export default {
  components: {
    Login
  },
  layout: 'auth',
  auth: 'guest',
  middleware: 'auth',
  data () {
    return {
      count: 0
    }
  }
}
</script>

<style lang="scss" scoped></style>
