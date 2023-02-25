<template>
  <div>
    <MyWishList />
  </div>
</template>

<script>
import MyWishList from '~/components/pages/profile/MyWishList.vue'
export default {
  components: {
    MyWishList
  },
  middleware: 'auth'
}
</script>

<style lang="scss" scoped></style>
