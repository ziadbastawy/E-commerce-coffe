<template>
  <auth-slot>
    <template #first>
      <div class="d-flex auth-main-image justify-content-center">
        <div class="account-content align-self-center align-self-lg-end">
          <p>Don’t have an account</p>
          <h2 class="main-text">
            Create an account and enjoy a lot of benefits
          </h2>
          <ul class="remove-list-styles">
            <li>
              <img src="@/assets/images/auth/bi-check2.svg">
              <span> Place your orders faster</span>
            </li>
            <li>
              <img src="@/assets/images/auth/bi-check2.svg">
              <span> Track Your shipments</span>
            </li>
            <li>
              <img src="@/assets/images/auth/bi-check2.svg">
              <span> Create Your Own address book</span>
            </li>
          </ul>
          <b-button
            pill
            to="/sign-up"
            variant="outline-secondary"
            class="create-account-button-style"
          >
            Create account
          </b-button>
        </div>
      </div>
    </template>

    <template #second>
      <div
        class="place-content-in-center d-flex flex-column justify-content-center align-self-center m-auto py-4 w-75"
      >
        <div class="logo-in-login">
          <nuxt-link to="/">
            <b-img
              class="pb-4"
              src="@/assets/images/footer-logo.svg"
              alt="login-logo"
            />
          </nuxt-link>
        </div>

        <h3 class="second-main-text">
          Login
        </h3>

        <!--
        <div class="login-with-facebook">
          <facebook-login
            class="button"
            app-id="326022817735322"
            @login="onLogin"
            @logout="onLogout"
            @sdk-loaded="sdkLoaded"
          />
        </div>

        <div class="text-with-separator py-4">
          <h6><span>Or login with</span></h6>
        </div>-->

        <b-form @submit.prevent="submitForm">
          <b-form-group label="Mobile Number">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#9d9d9d"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              <b-form-input
                v-model="form.mobile"
                class="phone-input"
                autocomplete="mobileNumber"
                placeholder="Mobile Number"
                type="text"
                pattern="\d*"
                minlength="11"
                maxlength="11"
                oninvalid="this.setCustomValidity('Only numbers are allowed and length must be 11 digit')"
                oninput="this.setCustomValidity('')"
              />
            </div>
            <small
              v-for="(err, index) in errors.mobile"
              :key="index"
              class="text-danger"
            >{{ err }}</small>
          </b-form-group>

          <b-form-group>
            <b-form-group label="Password ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#9d9d9d"
                  class="bi bi-lock-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
                  />
                </svg>
                <b-form-input
                  v-model="form.password"
                  autocomplete="current-password"
                  :type="fieldType"
                  placeholder="Your Password"
                />
                <b-button
                  class="show-password"
                  type="button"
                  @click.prevent="onSwitch"
                >
                  <img
                    v-if="fieldType == 'text'"
                    src="@/assets/images/auth/bi-eye-slash-fill.svg"
                  >
                  <img v-else src="@/assets/images/auth/bi-eye-fill.svg">
                </b-button>
              </div>
              <small
                v-for="(err, index) in errors.password"
                :key="index"
                class="text-danger"
              >{{ err }}</small>
            </b-form-group>
            <div class="remember-me-section d-flex">
              <b-form-checkbox id="checkbox-1" name="checkbox-1">
                Remember me
              </b-form-checkbox>
              <NuxtLink to="/forget-password">
                Forget Password?
              </NuxtLink>
            </div>
            <b-button
              type="submit"
              class="login-button py-2"
              block
              variant="primary"
            >
              Login
            </b-button>
          </b-form-group>
        </b-form>
      </div>
    </template>
  </auth-slot>
</template>

<script>
// import facebookLogin from 'facebook-login-vuejs'
import AuthSlot from './AuthSlot.vue'
// import serverApi from '@/services/home'

export default {
  components: {
    // facebookLogin
    AuthSlot
  },
  data () {
    return {
      form: {
        password: '',
        mobile: ''
      },

      fieldType: 'password',
      errors: {}
    }
  },
  methods: {
    submitForm () {
      this.$auth
        .loginWith('local', { data: this.form })
        .then(async (res) => {
          await this.$store.dispatch('carts/getCartFromApi', true)
          if (this.$route.query?.routeBack) {
            this.$router.push({
              name: this.$route.query.routeBack,
              params: { ...JSON.parse(this.$route.query.routeParams) }
            })
          } else {
            this.$router.push('/')
          }
        })
        .catch((error) => {
          const err = error.response.data.data.error
          this.errMsg(err)
        })
    },
    onSwitch () {
      this.fieldType = this.fieldType === 'password' ? 'text' : 'password'
    }
  }
}
/*
Vue.component('MyComponent', {
  components: {
    facebookLogin
  }
}) */
</script>

<style lang="scss" scoped>
.auth-main-image {
  background-image: url('@/assets/images/auth-background-image.jpg');
  @include auth-background-image;
  @media (max-width: 991px) {
    padding: 2rem;
  }
  .account-content {
    max-width: 80%;
    color: #fff;
    margin-block-end: 8rem;
    @media (max-width: 991px) {
      margin-block-end: 0;
    }
    h2.main-text {
      @media (max-width: 767px) {
        font-size: 1.5rem;
      }
    }
  }
  .remove-list-styles {
    padding: 0;
    list-style-type: none;
    margin-bottom: 2.2rem;
    li img {
      max-width: 20px;
    }
  }

  .create-account-button-style {
    @include create-account-button-style;
  }
}

.logo-in-login {
  a {
    max-width: 220px;
    display: block;
  }
}
.place-content-in-center {
  h3.second-main-text {
    @media (max-width: 767px) {
      font-size: 1.5rem;
    }
  }
  .text-with-separator {
    text-align: center;
    h6 {
      width: 100%;
      text-align: center;
      border-bottom: 2px solid #dee2e6;
      line-height: 0em;
      margin: 10px 0 20px;
      span {
        background: #fff;
        padding: 0 10px;
        display: inline;
      }
    }
  }

  label {
    color: #9d9d9d;
    font-size: 15px;
    font-weight: $font-weight-600;
  }

  input {
    padding: 10px 40px 5px;
    font-weight: $font-weight-600;
    &:focus {
      border: 2px solid #107cc0;
      box-shadow: none;
      padding: 10px 40px 5px;
    }
  }
  .phone-input {
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  .form-group div {
    position: relative !important;

    svg {
      position: absolute;
      top: 30%;
      left: 3%;
    }
  }

  button.btn.show-password.btn-secondary {
    position: absolute;
    top: 3%;
    right: 10px;
    background: transparent;
    border: none;
    color: #9d9d9d;
    &:focus {
      outline: none;
      box-shadow: none;
    }
    /*img {
      position: absolute;
      top: 30%;
      left: 3%;
    }*/
  }

  .remember-me-section {
    width: 100%;
    justify-content: space-between;
    .custom-control.custom-checkbox,
    a {
      font-weight: $font-weight-600;
    }
    a {
      color: $red-heart;
    }
  }
  .login-button {
    background: #107cc0;
    border-radius: 20px;
    margin-top: 1.5rem;
  }
}
</style>
