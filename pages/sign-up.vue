<template>
  <div>
    <SignUp />
  </div>
</template>

<script>
import SignUp from '@/components/pages/auth/SignUp.vue'
export default {
  components: {
    SignUp
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
