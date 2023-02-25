<template>
  <b-navbar toggleable="lg" class="navbar py-2">
    <b-container class="nav-content p-0 justify-content-start">
      <b-navbar-toggle class="nav-toggle border-0" target="nav-collapse">
        <img src="@/assets/images/nav-toggle-icon.svg" alt="nav-toggle icon">
      </b-navbar-toggle>
      <b-navbar-brand to="/" class="navbar-brand">
        <img src="@/assets/images/coffepedia-logo.svg">
      </b-navbar-brand>
      <ul class="ml-auto position-relative arabic-cart list-unstyled">
        <li class="navbar-item cart-item outside">
          <div
            class="cart-icon"
            @click="
              submenuToggle($event, 'click', '#menu-outside-nav', true, true)
              cartActive = backdrop = !cartActive
            "
          >
            <img src="@/assets/images/shopping-cart.svg" alt="shopping cart">
            <span v-if="productCarts.length" class="cart-notify" />
          </div>
          <div
            id="menu-outside-nav"
            class="menu-cart"
            :class="{ active: cartActive }"
          >
            <div v-if="productCarts.length" class="cart-item">
              <NavCart
                v-for="(product, id) in productCarts"
                :key="id"
                :item="{
                  image: product.img ? product.img : product.image,
                  name: product.name ? product.name : product.title,
                  price: product.price
                    ? product.price
                    : product.price_after_discount,
                  oldPrice: product.price_before_discount,
                  quantity: product.quantity,
                  id: product.id
                }"
                @removeItemFromCart="removeItemFromCart"
              />
              <hr style="margin: 0.5rem 0">
              <div class="actions">
                <div
                  class="d-flex total-price font-weight-bold justify-content-between my-3"
                >
                  <span class="head"> {{ $t('checkOut.totalPrice') }} </span>
                  <span class="price">
                    {{ totalPrice }} {{ $t('checkOut.EGP') }}
                  </span>
                </div>
                <b-link
                  class="main-button mb-3"
                  :to="{ name: 'checkout-checkout-payment' }"
                  style="max-width: 100%"
                  @click="
                    submenuToggle(
                      $event,
                      'click',
                      '#menu-inside-nav',
                      true,
                      true
                    )
                    cartActive = backdrop = false
                  "
                >
                  {{ $t('checkOut.proceedToCheckout') }}
                </b-link>
                <b-link
                  class="cart-link font-weight-bold"
                  :to="{ name: 'checkout-cart' }"
                  @click="
                    submenuToggle(
                      $event,
                      'click',
                      '#menu-inside-nav',
                      true,
                      true
                    )
                    cartActive = backdrop = false
                  "
                >
                  {{ $t('checkOut.viewCart') }}
                </b-link>
              </div>
            </div>
            <div
              v-if="!productCarts.length"
              class="no-items text-muted text-center"
            >
              {{ $t('home.emptyCart') }}
            </div>
          </div>
        </li>
      </ul>
      <b-collapse id="nav-collapse" class="" is-nav>
        <b-navbar-nav
          class="navbar-body menu-items-body mr-auto align-items-lg-center flex-wrap flex-column flex-lg-row px-3 px-lg-0"
        >
          <b-nav-item-dropdown
            v-for="(item, itemId) in navCategories"
            :key="itemId"
            :text="item.name"
            left
            class="navbar-menu move-right-arabic"
            menu-class="menu-items custom-sub-menu"
            toggle-class="navbar-link"
          >
            <span
              class="menu-item"
              @mouseenter="submenuToggle($event, '', '.sub-menu')"
              @mouseleave="submenuToggle($event, '', '.sub-menu')"
              @click="submenuToggle($event, 'click', '.sub-menu')"
            >
              <b-nav-item
                v-for="(subItem, subItemId) in item.children"
                :key="subItemId"
                class="sub-item"
                link-classes="sub-link"
                :to="categoryLink(item.id, subItem.id)"
              >
                {{ subItem.name }}
              </b-nav-item>
              <ul class="sub-menu list-unstyled" />
            </span>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="navbar-body align-items-lg-center px-3 px-lg-0">
          <form
            :class="{ 'form-opened': searchOpened }"
            @submit.prevent="submitSearch"
          >
            <li
              class="navbar-item mb-3 mb-lg-0 search-form d-flex align-items-center"
            >
              <b-form-input
                v-model="searchValue"
                :placeholder="$t('home.searchAnyWhere')"
                class="search"
                :class="{ show: searchOpened }"
              />
              <img
                v-show="!searchOpened"
                src="@/assets/images/search-icon.svg"
                alt="search icon"
                class="icon"
                @click="search"
              >
              <img
                v-show="searchOpened"
                src="@/assets/images/search-icon-black.svg"
                alt="search icon"
                class="icon"
                @click="search"
              >
            </li>
          </form>
          <li class="navbar-item cart-item inside flex-column">
            <div
              class="cart-icon"
              @click="
                submenuToggle($event, 'click', '#menu-inside-nav', true, true)
                cartActive = backdrop = !cartActive
              "
            >
              <img
                src="@/assets/images/shopping-cart.svg"
                alt="shopping cart"
              >
              <span v-if="productCarts.length" class="cart-notify" />
            </div>
            <div
              id="menu-inside-nav"
              class="menu-cart"
              :class="{ active: cartActive }"
            >
              <div v-if="productCarts.length" class="cart-items">
                <NavCart
                  v-for="(product, index) in productCarts"
                  :key="index"
                  :item="{
                    image: product.image,
                    name: product.name ? product.name : product.title,
                    price: product.price
                      ? product.price
                      : product.price_after_discount,
                    oldPrice: product.price_before_discount,
                    quantity: product.quantity,
                    id: product.id
                  }"
                  @removeItemFromCart="removeItemFromCart"
                />
                <hr style="margin: 0.5rem 0">
                <div class="actions">
                  <div
                    class="d-flex total-price font-weight-bold justify-content-between my-3"
                  >
                    <span class="head"> {{ $t('checkOut.totalPrice') }} </span>
                    <span
                      class="price"
                    >{{ totalPrice }} {{ $t('checkOut.EGP') }}</span>
                  </div>
                  <b-link
                    class="main-button mb-3"
                    :to="{ name: 'checkout-checkout-payment' }"
                    style="max-width: 100%"
                    @click="
                      submenuToggle(
                        $event,
                        'click',
                        '#menu-inside-nav',
                        true,
                        true
                      )
                      cartActive = backdrop = false
                    "
                  >
                    {{ $t('checkOut.proceedToCheckout') }}
                  </b-link>
                  <b-link
                    class="cart-link font-weight-bold"
                    :to="{ name: 'checkout-cart' }"
                    @click="
                      submenuToggle(
                        $event,
                        'click',
                        '#menu-inside-nav',
                        true,
                        true
                      )
                      cartActive = backdrop = false
                    "
                  >
                    {{ $t('checkOut.viewCart') }}
                  </b-link>
                </div>
              </div>
              <div
                v-if="!productCarts.length"
                class="no-items text-muted text-center"
              >
                {{ $t('home.emptyCart') }}
              </div>
            </div>
          </li>
          <client-only>
            <b-nav-item
              v-if="!$auth.user"
              class="navbar-item m-0 text-center mt-3 mt-lg-0"
              :to="{
                name: 'login',
                query: {
                  routeBack: $route.name,
                  routeParams: JSON.stringify($route.params)
                }
              }"
              link-classes="navbar-link login-link p-2 rounded-pill px-3"
            >
              {{ $t('home.loginRegister') }}
            </b-nav-item>
            <li v-else class="nav-item user-profile">
              <div class="d-flex">
                <div class="avatar">
                  <b-avatar variant="info" :src="userAvatar" />
                </div>
                <div
                  class="profile d-flex flex-column text-white justify-content-center"
                >
                  <div class="profile-options">
                    <b-dropdown
                      :text="
                        userInfo
                          ? $t('profile.hello') +
                            ' ' +
                            userInfo.name.split(' ')[0]
                          : ''
                      "
                      class="profile-dropdown"
                      menu-class="profile-custom-dropdown"
                    >
                      <b-dropdown-item to="/profile/order-history">
                        {{ $t('home.navOrderHistory') }}
                      </b-dropdown-item>
                      <b-dropdown-item to="/profile/my-wish-list">
                        {{ $t('home.navWishlist') }}
                      </b-dropdown-item>
                      <b-dropdown-item to="/profile/address-book">
                        {{ $t('home.navAddressBook') }}
                      </b-dropdown-item>
                      <b-dropdown-item to="/profile/account-setting">
                        {{ $t('home.navAccountSettings') }}
                      </b-dropdown-item>
                      <b-dropdown-item @click="logout()">
                        {{ $t('home.navLogout') }}
                      </b-dropdown-item>
                    </b-dropdown>
                  </div>
                </div>
              </div>
            </li>
          </client-only>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
    <div v-if="backdrop" class="backdrop" @click="backdropClose" />
  </b-navbar>
</template>
<script>
import NavCart from './NavCart.vue'
export default {
  components: {
    NavCart
  },
  data () {
    return {
      searchOpened: false,
      backdrop: false,
      cartActive: false,
      opened: false,
      searchValue: ''
    }
  },
  computed: {
    navItems () {
      return [
        { name: this.$t('home.coffeeShops'), link: '/coffe-shops/' },
        { name: this.$t('home.blog'), link: '/blog/articles' },
        { name: this.$t('home.recipes'), link: '/recipes' },
        { name: this.$t('home.aboutUs'), link: '/about-us' }
      ]
    },
    navCategories () {
      return this.$store.getters.getCategories
    },
    productCarts () {
      return this.$store.getters['carts/cartsProducts']
    },
    totalPrice () {
      return this.$store.getters['carts/getTotalSubCart']
    },
    userInfo () {
      return this.$auth.user
    },
    userAvatar () {
      return this.$store.state.auth?.user?.avatar || ''
    }
  },
  methods: {
    async logout () {
      await this.$auth.logout().then(() => {
        this.$router.push('/')
        this.$store.dispatch('carts/resetCartConfiguration')
        this.$store.commit('products/RESET_WISH_LIST_DATA')
      })
    },
    submenuToggle (e, handler, target, fullWidth, specificTarget) {
      const currentWidth = window.innerWidth
      const smallScreen =
        handler === 'click' ? currentWidth < 992 : currentWidth > 992
      if (smallScreen || fullWidth) {
        const element = e.currentTarget
        const allSubMenus = document.querySelectorAll('.sub-menu')
        allSubMenus.forEach(x => x.classList.remove('active'))
        const subMenu = specificTarget ? document.querySelector(target) : element.querySelector(target)
        subMenu.classList.toggle('active')
      }
    },
    removeItemFromCart (id) {
      this.$store.dispatch('carts/removeProductFromCart', { id })
    },
    categoryLink (categoryId, subCategoryId) {
      return `/products?category=${categoryId}&subCategory=${subCategoryId}`
    },
    search () {
      this.searchOpened = !this.searchOpened
    },
    submitSearch () {
      if (this.$route.name === 'seller-profile-id') {
        this.$router.push({
          query: {
            ...this.$route.query,
            query: this.searchValue
          }
        })
      } else {
        this.$router.push({
          name: 'products',
          query: {
            ...this.$route.query,
            query: this.searchValue
          }
        })
      }
    },
    backdropClose () {
      this.cartActive = this.backdrop = false
    }
  }
}
</script>
<style lang="scss" scoped>
@media (min-width: 992px) {
  .form-opened {
    width: 13rem;
    display: flex;
    justify-content: end;
  }
}
::v-deep {
  @media (max-width: 991px) {
    .profile {
      width: 50%;
      .profile-dropdown {
        display: block;
        .profile-custom-dropdown {
          background-color: #0a4b74;
          background-color: #fff;
          display: block;
          visibility: hidden;
          padding: 0;
          margin: 0rem;
          max-height: 0px;
          transition: max-height 0.25s ease-out;
          overflow: hidden;

          &.show {
            top: 2rem;
            visibility: visible;
            max-height: 20rem;
            transition: max-height 0.5s ease-in;
            padding: 0.5rem 0;
            margin: 0.5rem 0;
          }
          .dropdown-item {
            color: #0a4b74;
            font-size: 13px;
            padding: 0.4rem 1.2rem;
            transition: $default-transition;
          }
        }
      }
    }
  }
}

.search-form {
  .icon {
    width: 18px !important;
    height: 18px !important;
  }
  @media (max-width: 991px) {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .search {
    margin-inline-end: -1.7rem;
    background-color: transparent;
    color: #000;
    padding: 0.5rem 1.75rem 0.25rem 0.5rem;
    transition: $default-transition;
    border-radius: 0.25rem;
    border: none;

    @media (max-width: 991px) {
      background-color: #fff;
      font-weight: bold;
    }
    @media (min-width: 992px) {
      max-width: 0rem;
      font-size: 13px;
      &.show {
        background-color: #fff;
        color: #000;
        font-weight: bold;
        max-width: 12rem;
      }
    }
    .icon {
      width: 18px !important;
      height: 18px !important;
    }
    &::placeholder {
      transition: $default-transition;
      color: rgba(0, 0, 0, 0.5);
    }
    &:focus {
      border-color: $second-color;
      box-shadow: none;
    }
  }
  .icon {
    width: 1.55rem;
    cursor: pointer;
  }
}
::v-deep .custom-sub-menu {
  display: block;
  visibility: hidden;
  padding: 0;
  margin: 0;
  max-height: 0px;
  transition: max-height 0.25s ease-out;
  overflow: hidden;
  box-shadow: 0 4px 6px 0 rgba(184, 184, 184, 0.5);
  @media (max-width: 991px) {
    box-shadow: none;
  }
  background-color: #fff;
  &.show {
    top: 2rem;
    visibility: visible;
    max-height: 20rem;
    transition: max-height 0.4s ease-in;
    margin: 0.4rem 0;
    padding: 0.5rem 0;
  }
  &::after {
    border-bottom-color: #fff;
  }
  .nav-link {
    padding: 0.5rem 1rem;
    color: #241f20;
    &:hover {
      background-color: rgba($color: $main-color, $alpha: 0.1);
      transition: $default-transition;
    }
  }
  a.nav-link.nuxt-link-exact-active.nuxt-link-active.sub-link {
    background: #107cc0;
    border: 1px solid #fff;
    color: #fff;
  }
}

.navbar {
  .backdrop {
    background-color: rgba($color: #000000, $alpha: 0.25);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .nav-content {
    position: relative;
    z-index: 900;
  }
  background-color: $main-color;
  .navbar-brand {
    color: $second-color;
    margin-inline-end: 0.5rem;
    @media (max-width: 1050px) and (min-width: 992px) {
      margin-inline-end: 1rem;
    }

    img {
      width: 181px !important;
    }
    @media (max-width: 767px) {
      img {
        width: auto;
        max-width: 181px;
      }
      margin-inline-end: 2rem;
    }
    @media (max-width: 400px) {
      img {
        max-width: 140px;
      }
      margin-inline-start: 0rem !important;
    }
  }
  .menu-items-body {
    width: 70%;
    justify-content: space-evenly;
  }
  .navbar-body {
    .navbar-menu {
      font-size: 13px;
      .nav-link {
        @media (max-width: 1250px) and (min-width: 992px) {
          padding-left: 0.3rem !important;
          padding-right: 0.3rem !important;
        }
      }

      .menu-items {
        .menu-item {
          display: block;
          font-size: 13px;
          position: relative;
          .item-title {
            display: flex;
            padding: 0.5rem 1rem;
            cursor: pointer;
            transition: all ease-out 0.3s;
            align-items: center;
            justify-content: space-between;
            &:hover {
              color: $main-color;
              background-color: rgba(18, 124, 192, 0.1);
            }
          }
          .sub-menu {
            &.active {
              display: block;
            }
            display: none;
            position: absolute;
            left: 100%;
            top: 6%;
            box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
            min-width: 13rem;
            border-radius: 0.5rem;
            list-style: none;
            padding: 0;
            margin: 0;
            background-color: #fff;
            z-index: 1000;

            @media (max-width: 991px) {
              position: relative;
              left: 0;
              top: 0;
              box-shadow: none;
              padding: 0rem 1rem;
            }
            .sub-item {
              color: #000;
              .sub-link {
                padding: 0.5rem 1rem;
                transition: all ease-out 0.3s;
                &:hover {
                  color: $main-color;
                  background-color: rgba(18, 124, 192, 0.1);
                }
              }
            }
          }
        }
      }
    }
    .navbar-item {
      position: relative;
      margin-inline-end: 1rem;
      @media (max-width: 1250px) and (min-width: 992px) {
        margin-inline-end: 0.3rem;
      }

      .navbar-link {
        color: #fff;
        transition: $default-transition;
        font-size: 13px;
        &:hover {
          color: $second-color;
        }
      }
    }
    .main-menu-items {
      margin: 0 10px !important;
    }
  }

  .nav-icon {
    color: #fff;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  .login-link {
    background-color: $gray-dark;
    white-space: nowrap;
  }
  .menu-cart {
    display: none;
    color: rgb(255, 255, 255);
    border: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    top: 3.3rem;
    position: absolute;
    width: 25rem;
    padding: 1rem;
    right: -2rem;
    background-color: #fff;
    z-index: 1000;
    &.active {
      display: block;
    }
    &::after {
      @include triangle-after(88.5);
    }
    @media (max-width: 991px) {
      width: 29rem;
      top: 3.3rem;
      right: -0.5rem;

      &::after {
        @include triangle-after(96);
      }
    }
    @media (max-width: 450px) {
      width: 22rem;
    }
  }
  .cart-item {
    top: -2px;
    .cart-icon {
      cursor: pointer;
      img {
        width: 20px;
      }
      @media (max-width: 992px) {
        img {
          width: 25px;
        }
      }
      .cart-notify {
        position: absolute;
        width: 0.7rem;
        height: 0.7rem;
        background-color: $second-color;
        border-radius: 50%;
        top: -0.1rem;
        right: -0.4rem;
      }
    }
    &.inside {
      @media (max-width: 991px) {
        display: none;
      }
    }
    &.outside {
      @media (min-width: 992px) {
        display: none;
      }
    }
  }
  .actions {
    .total-price {
      font-size: 13pt;
      .head {
        color: $gray-dark;
      }
      .price {
        color: $main-color;
        font-weight: 900;
      }
    }
  }
  .nav-toggle {
    margin-inline-end: 0.7rem;
    img {
      width: 2rem;
    }
  }
  .user-profile {
    .profile {
      margin-inline-start: 1rem;
    }
    span {
      padding-top: 0;
    }
  }
  .cart-link {
    color: $primary;
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
  }
}
html:lang(ar) {
  .menu-cart {
    left: -2rem;
    right: unset;

    &::after {
      @include triangle-after(11);
    }
    @media (max-width: 991px) {
      left: -0.5rem;
      right: unset;
      &::after {
        @include triangle-after(4);
      }
    }
  }
  .arabic-cart {
    margin-right: auto !important;
    margin-left: 0 !important;
  }

  .navbar-body:first-of-type {
    margin-right: 0 !important;
    margin-left: auto !important;

    .item-title {
      svg {
        transform: rotate(180deg);
      }
    }
    .sub-menu {
      left: auto !important;
      right: 100%;
      text-align: right;
    }
    .nav-item.sub-item {
      text-align: right;
    }
  }
}
::v-deep .profile-options {
  .profile-dropdown {
    .dropdown-toggle {
      // display: none;
      font-size: 13px !important;
    }
    .dropdown-menu {
      font-size: 13px !important;
    }
    .nuxt-link-exact-active.nuxt-link-active {
      background: #107cc0;
      border: 1px solid #fff;
      color: #fff;
    }
  }
}
</style>
