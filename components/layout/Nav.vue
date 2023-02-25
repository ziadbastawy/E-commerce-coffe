<template>
  <nav class="sub-nav">
    <b-container>
      <b-nav class="d-flex flex-row-reverse justify-content-sm-start">
        <b-nav-item
          class="nav-lang lang-detector"
          @click="submenuToggle($event, '.lang-menu')"
        >
          <client-only>
            <div class="d-flex align-items-center lang-title">
              <img :src="selectedLang.img" :alt="selectedLang.label">
              <span class="text-white pt-0">{{
                $t(`home.${selectedLang.label}`)
              }}</span>
            </div>
          </client-only>
          <div class="lang-menu">
            <ul class="all-langs">
              <li
                v-for="item in languages"
                :key="item.lang"
                class="lang-item"
                @click="changeLang(item)"
              >
                <div class="d-flex align-items-center lang-title">
                  <img :src="item.img" :alt="item.label">
                  <span>{{ $t(`home.${item.label}`) }}</span>
                </div>
              </li>
            </ul>
          </div>
        </b-nav-item>
        <b-nav-item to="/become-partner" class="nav-partner font-weight-bolder">
          {{ $t('home.becomePartner') }}
        </b-nav-item>
      </b-nav>
    </b-container>
    <div v-if="backdrop" class="backdrop" @click="backdropClose" />
  </nav>
</template>
<script>
export default {
  data () {
    return {
      languages: [
        {
          lang: 'ar',
          label: 'arabic',
          dir: 'rtl',
          isDefault: false,
          img: require('@/assets/images/layout/egypt-flag.png')
        },
        {
          lang: 'en',
          label: 'english',
          dir: 'ltr',
          isDefault: true,
          img: require('@/assets/images/lang-en.png')
        }
      ],
      selectedLang: {},
      backdrop: false
    }
  },
  created () {
    if (process.client) {
      this.assignDefaultLang()
    }
  },
  methods: {
    submenuToggle (e, target) {
      const element = e.currentTarget
      const subMenu = element.querySelector(target)
      subMenu.classList.toggle('active')
      this.backdrop = true
    },
    changeLang (item) {
      this.selectedLang = item
      this.$i18n.setLocale(item.lang)
      location.reload()
    },
    assignDefaultLang () {
      if (
        localStorage.getItem('lang') !== undefined &&
        localStorage.getItem('lang') !== null
      ) {
        this.selectedLang = JSON.parse(localStorage.getItem('lang'))
      } else {
        this.selectedLang = this.languages.filter(
          item => item.lang === this.$i18n.locale
        )[0]
      }
    },
    backdropClose () {
      const subMenu = document.querySelector('.lang-menu')
      subMenu.classList.toggle('active')
      this.backdrop = false
    }
  }
}
</script>
<style lang="scss" scoped>
.sub-nav {
  background-color: #0a4b74;
  .lang-detector,
  .nav-partner {
    .nav-link {
      padding: 0 !important;
      padding-inline-start: 1rem !important;
      padding-top: 0.3rem !important;
      padding-bottom: 0.3rem !important;
    }
  }
  .nav-lang {
    font-size: 12px;
    position: relative;
    .lang-title {
      span {
        margin-inline-start: 0.4rem;
      }
      img {
        width: 1.2rem;
      }
    }
    .lang-menu {
      display: none;
      border: none;
      box-shadow: 0px 0px 5px #0000001a;
      border-radius: 0.5rem;
      top: 100%;
      position: absolute;
      background-color: #fff;
      left: -1rem;
      z-index: 10001;
      padding: 0.5rem 0;
      &::after {
        @include triangle-after(50);
      }
      &.active {
        display: block;
      }
      .all-langs {
        list-style: none;
        padding: 0;
        margin: 0;
        .lang-title {
          span {
            color: black;
            margin-inline-start: 0.4rem;
          }
          img {
            width: 1.2rem;
          }
        }
      }
      .all-langs {
        .lang-item {
          padding: 0.6rem 2rem;
          transition: $default-transition;
          &:hover {
            background-color: rgba(18, 124, 192, 0.1);
            span {
              color: rgb(16, 124, 192);
            }
          }
        }
      }
    }
  }
  .nav-partner {
    font-size: 12px;
    a {
      color: $second-color;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .backdrop {
    background-color: rgba($color: #000000, $alpha: 0.25);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
}
</style>
