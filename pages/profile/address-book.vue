<template>
  <div>
    <AddressBook />
  </div>
</template>

<script>
import AddressBook from '~/components/pages/profile/AddressBook.vue'
export default {
  components: {
    AddressBook
  },
  middleware: 'auth'
}
</script>

<style lang="scss" scoped></style>
