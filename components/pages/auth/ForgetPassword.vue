<template>
  <auth-slot>
    <template #first>
      <div class="d-flex auth-main-image">
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
        <p class="back-to-login my-4">
          <nuxt-link :to="'login'">
            <span>&lt; </span> Back To Login
          </nuxt-link>
        </p>
        <h3 class="second-main-text">
          Forget Password
        </h3>
        <p v-if="step == 0">
          Please Enter Your Phone Number
        </p>
        <p v-if="step == 1">
          Enter Code Then Enter Password
        </p>

        <b-form @submit.prevent>
          <b-form-group
            id="input-group-4"
            label="Phone Number "
            label-for="mobile"
          >
            <div>
              <b-form-input
                id="mobile"
                v-model="form.mobile"
                type="text"
                placeholder="Phone Number"
                pattern="\d*"
                minlength="11"
                maxlength="11"
                oninvalid="this.setCustomValidity('Only numbers are allowed and length must be 11 digit')"
                oninput="this.setCustomValidity('')"
                :disabled="step !== 0"
              />
            </div>
          </b-form-group>
          <div v-if="step == 1">
            <b-form-group id="input-group-6" label="Code " label-for="code">
              <b-form-input
                id="code"
                v-model="form.code"
                type="text"
                required
                placeholder="Code"
                pattern="\d*"
                minlength="4"
                maxlength="4"
                oninvalid="this.setCustomValidity('Only numbers are allowed and length must be 4 digit')"
                oninput="this.setCustomValidity('')"
              />
              <small
                v-for="(err, index) in errors.code"
                :key="index"
                class="text-danger d-block"
              >{{ err }}</small>
            </b-form-group>

            <!-- Start password  -->
            <b-row>
              <b-col sm="12">
                <b-form-group id="input-group-1" label="Password">
                  <div class="position-relative">
                    <b-form-input
                      v-model="form.password"
                      required
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
              </b-col>

              <!-- End password  -->

              <!-- Start confirm password  -->
              <b-col sm="12">
                <b-form-group id="input-group-2" label="Confirm Password">
                  <div class="position-relative">
                    <b-form-input
                      v-model="form.password_confirmation"
                      required
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
              </b-col>
            </b-row>
            <!-- End confirm password  -->
          </div>

          <b-button
            class="login-button py-2"
            block
            type="submit"
            variant="primary"
            @click="resendPassword()"
          >
            Send
          </b-button>
        </b-form>
      </div>
    </template>
  </auth-slot>
</template>

<script>
import AuthSlot from './AuthSlot.vue'
import authServices from '@/services/auth'
export default {
  components: {
    AuthSlot
  },
  data () {
    return {
      errors: {},
      step: 0,
      form: {
        mobile: '',
        code: '',
        password: '',
        password_confirmation: ''
      },

      fieldType: 'password'
    }
  },
  methods: {
    onSwitch () {
      this.fieldType = this.fieldType === 'password' ? 'text' : 'password'
    },

    resendPassword () {
      this.errors = {}
      if (this.step === 0) {
        const mobile = {
          mobile: this.form.mobile
        }
        authServices
          .resetPassword(mobile)
          .then((res) => {
            this.successMsg(this.$t('auth.codeSentToYourPhoneNumber'))
            this.step++
          })
          .catch((error) => {
            const err = Object.values(error)[2].data.data.error
            this.errMsg(err)
          })
      } else if (this.step === 1) {
        const newPasswordForm = {
          mobile: this.form.mobile,
          code: this.form.code,
          password: this.form.password,
          password_confirmation: this.form.password_confirmation
        }
        authServices.newPassword(newPasswordForm).then(
          (res) => {
            this.successMsg(res.data.msg)
            this.$router.push('/')
          },
          (err) => {
            if (err.response.data.data?.error) {
              this.errMsg(this.$t('auth.invalidCode'))
            } else {
              this.errors = err.response.data
            }
          }
        )
      }
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
    padding: 2rem;
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
  button.btn.show-password.btn-secondary {
    position: absolute;
    top: 1px;
    right: 10px;
    background: transparent;
    border: none;
    color: #9d9d9d;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  h3.second-main-text {
    @media (max-width: 767px) {
      font-size: 1.5rem;
    }
  }
  .back-to-login {
    a {
      color: #2d3236;
    }
    span {
      font-size: 20px;
      font-weight: $font-weight-600;
    }
  }
  #input-group-4,
  #input-group-6,
  #input-group-1,
  #input-group-2 {
    color: #9d9d9d;
    font-size: 15px;
    font-weight: $font-weight-600;
  }

  input {
    font-weight: $font-weight-600;
    padding-top: 10px;

    &:focus {
      border: 2px solid $primary;
      box-shadow: none;
      padding-top: 10px;
    }
  }

  .login-button {
    background: $primary;
    border-radius: 20px;
    margin-top: 1.5rem;
  }
}
</style>
