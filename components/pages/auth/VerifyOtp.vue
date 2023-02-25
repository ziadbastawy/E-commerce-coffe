<template>
  <div>
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

          <h3 class="second-main-text text-center">
            Verify OTP
          </h3>
          <section class="otp-verification">
            <div class="otp-form my-5">
              <h5>{{ $t('auth.codeSent') }}</h5>
              <form @submit.prevent="validateForm()">
                <b-form-group>
                  <b-form-input
                    id="l-name"
                    v-model="form.code"
                    :state="!isValidated && error.verifyOtp"
                    placeholder="write otp"
                  />
                </b-form-group>
                <span class="text-danger d-block my-3">{{
                  error.verifyOtp || ''
                }}</span>
                <b-button variant="primary" @click="validateForm()">
                  {{ $t('auth.verify') }}
                </b-button>
              </form>
              <div class="my-3 resend" @click="sendCode()">
                {{ $t('auth.notArrive') }}
              </div>
            </div>
          </section>
        </div>
      </template>
    </auth-slot>
  </div>
</template>

<script>
import AuthSlot from './AuthSlot.vue'
import auth from '@/services/auth'

export default {
  components: {
    AuthSlot
  },
  data () {
    return {
      mobile: '',
      form: {
        code: ''
      },
      isValidated: false,
      error: {}
    }
  },

  created () {
    if (process.client) {
      if (!localStorage.getItem('userMobile')) {
        this.$router.push({ name: 'login' })
      }
      this.mobile = localStorage.getItem('userMobile')
    }
    // this.sendCode()
  },

  methods: {
    validateForm () {
      if (this.form.code === '') {
        this.error = { verifyOtp: 'This Field is reqired' }
        this.isValidated = true
        return false
      } else if (this.form.code.length !== 4) {
        this.error = { verifyOtp: 'This Field should be 4 digits' }
        this.isValidated = true
        return false
      }

      this.otpVerification()
      this.isValidated = false
      this.error = {}
    },
    otpVerification () {
      const data = {
        token: +this.form.code,
        mobile: this.mobile
      }
      auth
        .verificationMobile(data)
        .then((res) => {
          this.$router.push({ name: 'login' })
          res.success ? this.successMsg(res.message) : this.errMsg(res.error)
        })
        .catch((error) => {
          const err = error.response.data.error
          this.errMsg(err)
        })
    },
    sendCode () {
      const data = {
        phone_number: this.mobile
      }
      auth
        .resendCodeMobile(data)
        .then((res) => {
          this.successMsg(res.data.msg.message)
        })
        .catch((error) => {
          const err = error.response.data.data.error
          this.errMsg(err.message)
        })
    }
  }
}
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
  .second-main-text {
    font-size: 1.5rem;
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
}
.otp-verification {
  text-align: center;
  h1 {
    color: black;
  }
  .otp-form {
    input {
      max-width: 50%;
      margin: auto;
    }
    .resend {
      transition: all 0.5s ease-in-out;
      cursor: pointer;
      &:hover {
        color: $main-color;
      }
    }
  }
}
</style>
