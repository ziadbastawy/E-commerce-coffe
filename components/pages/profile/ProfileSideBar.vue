<template>
  <div>
    <ul class="profile-side-bar overflow-hidden mb-2 bg-white">
      <li v-for="(item, index) in sideBarList" :key="index">
        <nuxt-link :to="{ name: item.routeName }">
          <component :is="item.componentName" /> {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
    <b-button
      variant="outline-danger"
      block
      class="mb-2 log-out-button text-left"
      @click="logout()"
    >
      <span
        class="logout-text font-weight-bold"
      ><b-icon-power /> {{ $t('home.navLogout') }}
      </span>
    </b-button>
  </div>
</template>

<script>
import {
  BIconHeartFill,
  BIconGearFill,
  BIconWalletFill,
  BIconCalendar3Fill,
  BIconPower
} from 'bootstrap-vue'

export default {
  components: {
    BIconHeartFill,
    BIconGearFill,
    BIconWalletFill,
    BIconCalendar3Fill,
    BIconPower
  },
  data () {
    return {}
  },
  computed: {
    sideBarList () {
      return [
        {
          routeName: 'profile-order-history',
          componentName: 'b-icon-calendar-3-fill',
          title: this.$t('profile.orderHistory')
        },
        {
          routeName: 'profile-my-wish-list',
          componentName: 'b-icon-heart-fill',
          title: this.$t('profile.myWishlist')
        },
        {
          routeName: 'profile-address-book',
          componentName: 'b-icon-calendar-3-fill',
          title: this.$t('profile.addressBook')
        },
        // {
        //   routeName: 'profile-wallet',
        //   componentName: 'b-icon-wallet-fill',
        //   title: this.$t('profile.wallet')
        // },
        {
          routeName: 'profile-account-setting',
          componentName: 'b-icon-gear-fill',
          title: this.$t('profile.accountSetting')
        }
      ]
    }
  },
  methods: {
    async logout () {
      await this.$auth.logout().then(() => {
        this.$router.push('/')
        this.$store.dispatch('carts/resetCartConfiguration')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
ul.profile-side-bar {
  border-radius: $default-radios;
  li {
    border-bottom: 4px solid #f8f8f8;
    a {
      color: #231f20;
      font-weight: 600;
      padding: 15px 30px;
      width: 100%;
      font-size: 15px;
      :hover {
        text-decoration: none;
      }
    }
  }
}

.b-icon.bi {
  margin-inline-end: 10px;
  font-size: 20px;
}

ul.profile-side-bar li:hover {
  background: $main-color;
}

ul.profile-side-bar li:hover a {
  color: #ffff;
  text-decoration: none;
}

.log-out-button {
  border: none;
  border-radius: 5px;
  background: #fff;
  padding: 15px 30px;
  :hover {
    background: #e23333;
  }
  .logout-text {
    padding-top: 2px;
    color: #e23333;
  }
}

html:lang(ar) {
  .log-out-button {
    text-align: right !important;
  }
}

.log-out-button:hover {
  background: #e23333;
}

.log-out-button:hover span {
  color: #fff;
}

svg.bi-power.b-icon.bi {
  transform: rotate(90deg);
  margin-bottom: 1px;
}

a.nuxt-link-exact-active {
  background: $main-color;
  color: #fff !important;
}
</style>
