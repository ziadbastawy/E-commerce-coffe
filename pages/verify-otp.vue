<template>
  <VerifyOtp />
</template>

<script>
import VerifyOtp from '@/components/pages/auth/VerifyOtp.vue'

export default {
  name: 'OtpVerification',
  components: {
    VerifyOtp
  },
  layout: 'auth',
  middleware: 'auth',
  data () {
    return {}
  },
  auth: 'guest',

  methods: {}
}
</script>

<style lang="scss" scoped></style>
