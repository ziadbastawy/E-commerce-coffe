<template>
  <auth-slot>
    <template #first>
      <div class="d-flex auth-main-image">
        <div class="account-content align-self-center align-self-lg-end my-5">
          <p>have an account</p>
          <h2 class="mb-4 main-text">
            Login to your account
          </h2>
          <b-button
            pill
            to="/login"
            variant="outline-secondary"
            class="create-account-button-style"
          >
            Login
          </b-button>
        </div>
      </div>
    </template>

    <template #second>
      <div
        class="place-content-in-center d-flex flex-column justify-content-center align-self-center m-auto my-5 w-75"
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
          Create Account
        </h3>

        <b-form @submit.prevent="signUp()">
          <b-row>
            <b-col md="6">
              <b-form-group label="First Name">
                <div>
                  <b-form-input
                    v-model="form.firstName"
                    placeholder="First Name"
                    autocomplete="first-name"
                  />
                </div>
                <small
                  v-for="(err, index) in errors.firstName"
                  :key="index"
                  class="text-danger"
                >{{ err }}</small>
              </b-form-group>
            </b-col>
            <b-col md="6">
              <b-form-group label="Last Name">
                <div>
                  <b-form-input
                    v-model="form.lastName"
                    placeholder="Last Name"
                    autocomplete="last-name"
                  />
                </div>
                <small
                  v-for="(err, index) in errors.lastName"
                  :key="index"
                  class="text-danger"
                >{{ err }}</small>
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-group label="Email">
            <div>
              <b-form-input
                v-model="form.email"
                placeholder="Email Address"
                autocomplete="email"
              />
              <small
                v-for="(err, index) in errors.email"
                :key="index"
                class="text-danger"
              >{{ err }}</small>
            </div>
          </b-form-group>
          <b-form-group label="Mobile">
            <div>
              <b-form-input
                v-model="form.mobile"
                placeholder="Mobile Number"
                autocomplete="phone"
                type="text"
              />
              <small
                v-for="(err, index) in errors.mobile"
                :key="index"
                class="text-danger"
              >{{ err }}</small>
            </div>
          </b-form-group>

          <!-- Start password  -->
          <b-form-group label="Password">
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
          <!-- End password  -->

          <!-- Start confirm password  -->
          <b-form-group label="Confirm Password">
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
                v-model="form.password_confirmation"
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
              v-for="(err, index) in errors.password_confirmation"
              :key="index"
              class="text-danger"
            >{{ err }}</small>
          </b-form-group>
          <!-- End confirm password  -->

          <b-button
            class="login-button mb-3 py-2"
            block
            type="submit"
            variant="primary"
          >
            Create Account
          </b-button>
          <div class="remember-me-section d-flex">
            <b-form-checkbox id="checkbox-1" name="checkbox-1" required>
              By Creating account, you accept our
              <nuxt-link to="/terms-and-conditions">
                Terms and conditions
              </nuxt-link>
              and
              <nuxt-link to="/privacy-policy">
                privacy policy
              </nuxt-link>
            </b-form-checkbox>
          </div>
        </b-form>
      </div>
    </template>
  </auth-slot>
</template>

<script>
// import facebookLogin from 'facebook-login-vuejs'
import AuthSlot from './AuthSlot.vue'
import authServies from '@/services/auth'
export default {
  components: {
    // facebookLogin
    AuthSlot
  },
  data () {
    return {
      errors: {},
      form: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        password_confirmation: '',
        mobile: ''
      },
      fieldType: 'password'
    }
  },
  methods: {
    signUp () {
      authServies
        .singup(this.form)
        .then((res) => {
          this.successMsg(this.$t('auth.accountHasBeenCreated'))
          localStorage.setItem('userMobile', this.form.mobile)
          this.$router.push('/verify-otp')
        })
        .catch((error) => {
          this.errors = error.response.data
          const err = Object.values(error.response.data.data.error)
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
  padding: 0 0 8em 5em;
  @media (max-width: 991px) {
    padding: 0 5em;
  }
  .account-content {
    max-width: 90%;
    color: #fff;
    h2.main-text {
      @media (max-width: 767px) {
        font-size: 1.5rem;
      }
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
        padding: 0 50px;
        display: inline;
      }
    }
  }

  #input-group-2,
  #input-group-3,
  #input-group-4,
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
  #input-6,
  #input-2,
  #input-6:focus,
  #input-2:focus {
    padding: 10px 10px 5px 10px;
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
  .login-button {
    background: #107cc0;
    border-radius: 20px;
    margin-top: 1.5rem;
  }
}
.danger {
  color: red;
}
</style>
