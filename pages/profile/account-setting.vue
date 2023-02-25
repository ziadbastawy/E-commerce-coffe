<template>
  <div>
    <AccountSetting />
  </div>
</template>

<script>
import AccountSetting from '~/components/pages/profile/AccountSetting.vue'
export default {
  components: {
    AccountSetting
  },
  middleware: 'auth'
}
</script>

<style lang="scss" scoped></style>
