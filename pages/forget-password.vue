<template>
  <div>
    <ForgetPassword />
  </div>
</template>

<script>
import ForgetPassword from '@/components/pages/auth/ForgetPassword.vue'
export default {
  components: {
    ForgetPassword
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
