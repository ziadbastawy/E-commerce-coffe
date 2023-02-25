<template>
  <div class="add-background-for-body py-5">
    <b-container>
      <b-row>
        <b-col xl="3" lg="12">
          <ProfileSideBar />
        </b-col>
        <b-col xl="9" lg="12" class="add-min-height">
          <nuxt-child />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProfileSideBar from '~/components/pages/profile/ProfileSideBar.vue'
export default {
  components: { ProfileSideBar },
  middleware: 'auth',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.add-background-for-body {
  background: #f8f8f8;
  .add-min-height {
    min-height: $min-height;
  }
}
</style>
