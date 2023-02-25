import Vue from 'vue'

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__global_mixin__) {
  Vue.__global_mixin__ = true
  Vue.mixin({
    data () {
      return {}
    },
    computed: {
      isUserLogin () {
        return this.$store.state.auth.loggedIn
      }
    },
    methods: {
      successMsg (text) {
        this.$swal({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          icon: 'success',
          title: text
        })
      },
      errMsg (text) {
        this.$swal({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          icon: 'error',
          title: text
        })
      }
    }
  }) // Set up your mixin then
}

