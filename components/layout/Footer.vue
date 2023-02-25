<template>
  <footer>
    <b-container>
      <b-row>
        <b-col cols="12" class="mt-4 mb-5">
          <nuxt-link :to="'/'" class="w-100">
            <b-img
              class="footer-logo"
              src="@/assets/images/footer-logo.svg"
              alt="dummy-footer"
            />
          </nuxt-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          cols="12"
          sm="6"
          md="4"
          lg="8"
          order-sm="2"
          order-md="1"
        >
          <strong>
            {{ $t('home.footerAbout') }}
          </strong>
          <ul>
            <li v-for="aboutList in aboutLists" :key="aboutList.name">
              <nuxt-link :to="aboutList.path">
                {{ aboutList.name }}
              </nuxt-link>
            </li>
          </ul>
        </b-col>
        <!-- <b-col
          cols="12"
          sm="6"
          md="8"
          lg="4"
          order-sm="1"
          order-md="2"
        >
          <strong>
            {{ $t('home.footerCategories') }}
          </strong>
          <ul class="row">
            <li
              v-for="categoryList in categoryLists"
              :key="categoryList.name"
              class="col-12 col-md-6"
            >
              <nuxt-link :to="categoryList.url">
                {{ categoryList.name }}
              </nuxt-link>
            </li>
          </ul>
        </b-col> -->
        <!--  <b-col
          cols="12"
          sm="6"
          md="4"
          lg="2"
          order-sm="3"
          order-md="3"
        >
          <strong>
            {{ $t('home.footerBlog') }}
          </strong>
          <ul>
            <li v-for="blogList in blogLists" :key="blogList.name">
              <nuxt-link :to="blogList.url">
                {{ blogList.name }}
              </nuxt-link>
            </li>
          </ul>
        </b-col>
        -->
        <b-col
          cols="12"
          md="8"
          lg="4"
          order-sm="4"
          order-md="4"
          class="mt-3 mt-md-0"
        >
          <strong>
            {{ $t('home.footerSubscribe') }}
          </strong>
          <form
            class="subscribe-input d-flex justify-content-between rounded-pill py-1 px-3 align-items-center my-3"
            @submit.prevent
          >
            <input
              v-model="form.email"
              type="text"
              class="subscribe-area bg-transparent border-0 w-100 pt-2"
              :placeholder="$t('home.footerWriteEmail')"
            >
            <button
              type="submit"
              class="bg-transparent border-0"
              @click="sendMail"
            >
              <img
                src="@/assets/images/footer-subscribe-submit-icon1.png"
                alt="subcripe icon"
              >
            </button>
          </form>
          <strong class="mt-4 d-block">
            {{ $t('home.footerFollowUs') }}
          </strong>
          <ul class="social-icons d-flex mb-3">
            <li v-for="imageList in imageLists" :key="imageList.path">
              <a :href="imageList.url" target="_blank">
                <b-img
                  :src="require(`@/assets/images/${imageList.path}`)"
                  :alt="imageList.alt"
                />
              </a>
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <ul class="pay-with-logos d-flex justify-content-center">
            <li v-for="payWithList in payWithLists" :key="payWithList.path">
              <span>
                <b-img
                  :src="require(`@/assets/images/${payWithList.path}`)"
                  :alt="payWithList.alt"
                />
              </span>
            </li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <hr class="dividing-line my-2">
          <div class="copy-rights">
            <p class="my-2 text-center">
              {{ $t('home.footerCopyRights') }}
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script>
import Subscribe from '@/services/home'
export default {
  data () {
    return {
      form: {
        email: ''
      },
      imageLists: [
        {
          path: 'footer-facebook-icon.svg',
          alt: 'facebook',
          url: 'https://www.facebook.com/'
        },
        {
          path: 'footer-instgram-icon.svg',
          alt: 'instgram',
          url: 'https://www.instagram.com/'
        },
        {
          path: 'footer-twitter-icon.svg',
          alt: 'twitter',
          url: 'https://twitter.com/'
        },
        {
          path: 'footer-youtube-icon.svg',
          alt: 'youtube',
          url: 'https://www.youtube.com/'
        }
      ],
      payWithLists: [
        {
          path: 'footer-visa-logo.svg',
          alt: 'visa'
        },
        {
          path: 'footer-mastercard-logo.svg',
          alt: 'mastercard'
        },
        {
          path: 'footer-value-logo.png',
          alt: 'valu'
        }
      ]
    }
  },
  computed: {
    aboutLists () {
      return [
        { name: this.$t('home.footerAboutUs'), path: '/about-us' },
        { name: this.$t('home.footerContactUs'), path: '/contact-us' },
        { name: this.$t('home.footerPrivacyPolicy'), path: '/privacy-policy' },
        {
          name: this.$t('home.footerTermsOfUse'),
          path: '/terms-and-conditions'
        }
      ]
    }
    // categoryLists () {
    //   return [
    //     { name: 'Coffe Beans', url: '#' },
    //     { name: 'Capsules', url: '#' },
    //     { name: 'Grand Cafe', url: '#' },
    //     { name: 'Turkish Cafe', url: '#' },
    //     { name: 'Equipment', url: '#' },
    //     { name: 'Coffee', url: '#' },
    //     { name: 'Accessories', url: '#' },
    //     { name: 'Specialty Coffe', url: '#' }
    //   ]
    // },
    // blogLists () {
    //   return [
    //     { name: this.$t('home.footerArticles'), url: '#' },
    //     { name: this.$t('home.footerVideos'), url: '#' },
    //     { name: this.$t('home.footerRecipes'), url: '#' }
    //   ]
    // }
  },
  methods: {
    sendMail () {
      Subscribe.subscribeByEmail(this.form)
        .then((res) => {
          this.successMsg(res.msg)
        })
        .catch((err) => {
          this.errMsg(err.response.data.email[0])
        })
    }
  }
}
</script>
<style lang="scss" scoped>
footer {
  background: $second-color;
  color: $gray-dark;
  .footer-logo {
    max-width: 12.5rem;
  }
  strong {
    font-size: 12px;
    margin-bottom: 1rem;
    display: block;
  }

  ul {
    li {
      margin-bottom: 0.3rem;
      a {
        color: $gray-dark;
        font-size: 12px;
        // display: block;
      }
    }
  }
  ul.social-icons a {
    height: 1.25rem;
    margin-inline-end: 1.25rem;
  }
  .pay-with-logos {
    align-items: center;
    span {
      color: $gray-dark;
      font-size: 12px;
      display: block;
      margin-inline-end: 0.6rem;
      img {
        max-width: 3rem;
      }
    }
  }
  .dividing-line {
    border-top: 0.5px solid #929dad;
    opacity: 50%;
  }
  .copy-rights {
    p {
      font-size: 10px;
    }
  }
  // subscribe input
  .subscribe-input {
    border: 1px solid #332f30;
    height: 34px;
    img {
      max-width: 1rem;
    }
    .subscribe-area {
      line-height: 0;
      padding-top: 2px !important;
      &::placeholder {
        font-size: 10px;
        color: rgba(0, 0, 0, 0.5);
        padding: 3rem 0;
      }
    }
    .subscribe-area:focus {
      outline: none;
    }
  }
}
</style>
