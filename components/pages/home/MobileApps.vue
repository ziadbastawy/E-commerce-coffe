<template>
  <div class="mobile-apps position-relative">
    <b-container>
      <b-row class="content position-relative align-items-center">
        <b-col cols="12" md="7" class="apps-content">
          <h2 v-show="!loading" class="text-head">
            {{ $t('home.downloadApp') }}
          </h2>
          <b-skeleton v-if="loading" height="3rem" width="85%" />

          <p v-show="!loading" class="text-description">
            {{ $t('home.downloadAppDescription') }}
          </p>
          <b-skeleton v-if="loading" height="1.5rem" width="70%" />
          <div
            class="apps-links d-flex justify-content-center justify-content-md-start"
          >
            <a v-if="apple" :href="apple" target="_blank" class="app-link">
              <img
                v-show="!loading"
                src="@/assets/images/app-apple-store.svg"
                alt="Application link on apple store"
              >
              <b-skeleton-img v-if="loading" width="100%" height="100%" />
            </a>
            <a v-if="play" :href="play" target="_blank" class="app-link">
              <img
                v-show="!loading"
                src="@/assets/images/app-google-play.svg"
                alt="Application link on google store"
              >
              <b-skeleton-img v-if="loading" width="100%" height="100%" />
            </a>
            <a
              v-if="appGallery"
              target="_blank"
              :href="appGallery"
              class="app-link"
              style="width: 160px"
            >
              <AppGallery v-show="!loading" class="w-100 h-100" />
              <b-skeleton-img v-if="loading" width="100%" height="100%" />
            </a>
          </div>
        </b-col>
        <b-col cols="12" md="5" class="d-none d-md-block apps-screens">
          <div class="screens">
            <img
              src="@/assets/images/app-screens.png"
              alt="mobile application screens"
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import AppGallery from '~/assets/images/svg-icons/AppGallery.vue'

export default {
  components: { AppGallery },
  props: {
    apple: {
      type: String,
      default: () => {
        return 'https://apps.apple.com/gb/app/cofepedia/id1628509254'
      }
    },
    play: {
      type: String,
      default: () => {
        return 'https://play.google.com/store/apps/details?id=com.cofepedia.app&hl=en'
      }
    },
    appGallery: {
      type: String,
      default: () => {
        return 'https://appgallery.huawei.com/app/C106412889'
      }
    }
  },
  data () {
    return { loading: true }
  },
  mounted () {
    this.loading = false
  }
}
</script>
<style lang="scss" scoped>
.mobile-apps {
  margin-top: 4rem;
  @media (max-width: 770px) {
    padding: 2rem 0;
  }
  .content {
    z-index: 3;
  }
  &::before {
    content: '';
    background-image: url('@/assets/images/apps-section-background.jpg');
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    z-index: 1;
  }

  .apps-content {
    color: #fff;
    @media (max-width: 768px) {
      text-align: center;
    }
    .text-head {
      font-size: 38px;
      @media (min-width: 975px) {
        width: 50%;
      }
      @media (max-width: 1220px) {
        font-size: 30px;
      }
      @media (min-width: 769px) {
        width: 70%;
      }
    }
    .text-description {
      font-size: 14px;
      width: 77%;
      @media (max-width: 896px) {
        width: 100%;
      }
    }
    .apps-links {
      margin-inline-start: -0.3rem;
      .app-link {
        margin-inline-end: 0.5rem;
        height: 3rem;
        width: 9rem;
        overflow: hidden;
        border-radius: 0.4rem;
        img {
          object-fit: contain;
        }
      }
    }
  }
  .apps-screens {
    top: -2rem;
    @media (max-width: 1220px) {
      top: -1.5rem;
    }
  }
}
</style>
