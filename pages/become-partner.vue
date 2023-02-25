<template>
  <div>
    <BecomePartner />
  </div>
</template>

<script>
import BecomePartner from '@/components/pages/auth/BecomePartner.vue'
export default {
  components: {
    BecomePartner
  },
  layout: 'auth',

  data () {
    return {
      count: 0
    }
  }
}
</script>

<style lang="scss" scoped></style>
