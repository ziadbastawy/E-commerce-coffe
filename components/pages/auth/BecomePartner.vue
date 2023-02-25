<template>
  <b-row class="no-gutters">
    <b-col class="mb-4 mb-lg-0 first-slot" cols="12" lg="6">
      <div class="d-flex auth-main-image">
        <div class="account-content align-self-center align-self-lg-end my-5">
          <h4 class="white-text font-weight-bold">
            <!-- {{ $t('home.becomePartner') }} -->
            Become a Partner
          </h4>
          <p class="mb-4 main-text">
            Enjoy access to millions of customers and grow your sales
          </p>

          <img
            class="become-partner-image"
            src="../../../assets/images/become-a-vendor-vector.png"
          >
        </div>
      </div>
    </b-col>

    <b-col cols="12" lg="6" class="d-flex align-items-center auth-form">
      <div
        class="place-content-in-center d-flex flex-column justify-content-center align-self-center m-auto my-5 w-75"
      >
        <h4 class="second-main-text my-3 font-weight-bold">
          Your Details
        </h4>

        <b-form @submit.prevent="becomePartner()">
          <b-row>
            <b-col md="6">
              <b-form-group label="First Name">
                <div>
                  <b-form-input
                    v-model="form.firstName"
                    required
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
                    required
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
          <!--
          <b-form-group label="Full Name">
            <div>
              <b-form-input
                v-model="form.fullName"
                required
                placeholder="Full Name"
                autocomplete="full-name"
              />
            </div>
            <small
              v-for="(err, index) in errors.fullName"
              :key="index"
              class="text-danger"
            >
              {{ err }}
            </small>
          </b-form-group>
          -->
          <b-row>
            <b-col md="6">
              <b-form-group label="Phone Number">
                <div>
                  <b-form-input
                    v-model="form.company_phone_number"
                    required
                    placeholder="Phone Number"
                    autocomplete="phone"
                    type="text"
                    pattern="\d*"
                    minlength="11"
                    maxlength="11"
                    oninvalid="this.setCustomValidity('Only numbers are allowed and length must be 11 digit')"
                    oninput="this.setCustomValidity('')"
                  />
                  <small
                    v-for="(err, index) in errors.company_phone_number"
                    :key="index"
                    class="text-danger"
                  >{{ err }}</small>
                </div>
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Email">
                <div>
                  <b-form-input
                    v-model="form.email"
                    required
                    type="email"
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
            </b-col>
          </b-row>
          <!-- Start password  -->
          <b-row>
            <b-col md="6">
              <b-form-group label="Password">
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
            <b-col md="6">
              <b-form-group label="Confirm Password">
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
          <b-row>
            <b-col md="6">
              <b-form-group label="Brand Name">
                <div>
                  <b-form-input
                    v-model="form.company_name"
                    required
                    placeholder="Brand Name"
                    autocomplete="brand-name"
                  />
                </div>
                <small
                  v-for="(err, index) in errors.company_name"
                  :key="index"
                  class="text-danger"
                >
                  {{ err }}
                </small>
              </b-form-group>
            </b-col>

            <b-col md="6">
              <b-form-group label="Website">
                <div>
                  <b-form-input
                    v-model="form.website"
                    required
                    type="url"
                    placeholder="Enter Link"
                  />
                </div>
                <small
                  v-for="(err, index) in errors.website"
                  :key="index"
                  class="text-danger"
                >
                  {{ err }}
                </small>
              </b-form-group>
            </b-col>
          </b-row>

          <b-row>
            <b-col sm="12" class="mb-3">
              <!--  <b-form-group label="Company Description Ar">
                <div>
                  <b-form-input
                    v-model="form.description_ar"
                    required
                    placeholder="Enter Description"
                  />
                </div>
                <small
                  v-for="(err, index) in errors.description_ar"
                  :key="index"
                  class="text-danger"
                >
                  {{ err }}
                </small>
              </b-form-group>

              -->

              <div>
                <label for="description_en">Company Description En</label>

                <b-form-textarea
                  id="description_ar"
                  v-model="form.description_ar"
                  no-resize
                  placeholder="Company Description Ar"
                  rows="4"
                />
              </div>
              <small
                v-for="(err, index) in errors.description_ar"
                :key="index"
                class="text-danger"
              >
                {{ err }}
              </small>
            </b-col>

            <b-col sm="12" class="mb-4">
              <!--  <b-form-group label="Company Description Ar">
                <div>
                  <b-form-input
                    v-model="form.description_ar"
                    required
                    placeholder="Enter Description"
                  />
                </div>
                <small
                  v-for="(err, index) in errors.description_ar"
                  :key="index"
                  class="text-danger"
                >
                  {{ err }}
                </small>
              </b-form-group>

              -->

              <div>
                <label for="description_en">Company Description En</label>

                <b-form-textarea
                  id="description_en"
                  v-model="form.description_en"
                  no-resize
                  placeholder="Company Description En"
                  rows="4"
                />
              </div>
              <small
                v-for="(err, index) in errors.description_en"
                :key="index"
                class="text-danger"
              >
                {{ err }}
              </small>
            </b-col>
            <!-- <b-col md="6">
              <b-form-group label="Company Description En" class="mb-4">
                <div>
                  <b-form-input
                    v-model="form.description_en"
                    required
                    placeholder="Enter Description "
                  />
                </div>
                <small
                  v-for="(err, index) in errors.description_en"
                  :key="index"
                  class="text-danger"
                >
                  {{ err }}
                </small>
              </b-form-group>
            </b-col>
            -->
          </b-row>

          <div class="position-relative mb-4 text-left text-sm-center">
            <!-- <b-icon-arrow-bar-up v-if="!form.file1" class="upload-file-icon" /> -->

            <b-form-file
              v-model="form.commercial_register"
              required
              :state="Boolean(form.commercial_register)"
              placeholder="Upload Company Documents (PDF)"
              drop-placeholder="Drop file here..."
              @change="uploadCompanyFiles"
            />
          </div>

          <div class="position-relative mb-4 text-left text-sm-center">
            <b-form-file
              v-model="form.contract"
              required
              :state="Boolean(form.contract)"
              placeholder="Upload contract"
              drop-placeholder="Drop file here..."
              @change="uploadCompanyFiles"
            />
          </div>

          <div class="position-relative text-left text-sm-center">
            <b-form-file
              v-model="form.tax_card"
              required
              :state="Boolean(form.tax_card)"
              placeholder="Upload tax_card"
              drop-placeholder="Drop file here..."
              @change="uploadCompanyFiles"
            />
          </div>

          <b-button
            class="login-button mb-3 py-2"
            block
            type="submit"
            variant="primary"
          >
            Next
          </b-button>
        </b-form>
      </div>
    </b-col>
  </b-row>
</template>

<script>
// import { BIconArrowBarUp } from 'bootstrap-vue'

import authService from '@/services/auth'
export default {
  components: {
    // BIconArrowBarUp
  },
  data () {
    return {
      errors: {},
      form: {
        firstName: '',
        lastName: '',
        email: '',
        company_phone_number: '',
        password: '',
        password_confirmation: '',
        company_name: '',
        description_ar: '',
        description_en: '',
        commercial_register: null,
        contract: null,
        tax_card: null
      },
      fieldType: 'password'
    }
  },

  methods: {
    onSwitch () {
      this.fieldType = this.fieldType === 'password' ? 'text' : 'password'
    },

    uploadCompanyFiles (e) {
      this.form[e] = e.target.files[0]
    },

    becomePartner () {
      const formData = new FormData()
      const objectItems = this.form
      for (const key in objectItems) {
        formData.append(key, objectItems[key])
      }

      authService
        .vendorRegister(formData)
        .then((res) => {
          this.$swal({
            title: this.$t('auth.thankYouMessage'),
            confirmButtonText: this.$t('auth.okMessage'),
            customClass: {
              confirmButton: 'btn btn-primary',
              cancelButton: 'btn btn-outline-danger mx-3'
            },
            buttonsStyling: false
          })
          this.$router.push('/')
        })
        .catch((error) => {
          this.errors = error.response.data
          const err = Object.values(error.response.data.data.error)
          this.errMsg(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.first-slot {
  padding: 0px !important;

  .main-text {
    font-size: 14px;
    max-width: 70%;
    margin-bottom: 4rem !important;
    @media (max-width: 767px) {
      max-width: 100%;
      margin-bottom: 3rem !important;
    }
  }

  .become-partner-image {
    max-width: 550px;
    margin-left: -5rem;
    @media (max-width: 767px) {
      margin-left: -2rem;
    }
  }
  .auth-main-image {
    background-color: #dae0ff;
    height: 100%;
    padding: 0 0 16em 10em;
    @media (max-width: 1200px) and (min-width: 992px) {
      padding: 0 0 6em 6em;
    }
    @media (max-width: 991px) {
      padding: 0 2em;
    }
    .account-content {
      max-width: 90%;
      @media (max-width: 992px) {
        margin: auto;
      }
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
}

.auth-form {
  min-height: 100vh;
  @media (max-width: 991px) {
    min-height: auto;
  }

  .place-content-in-center {
    h3.second-main-text {
      @media (max-width: 767px) {
        font-size: 1.5rem;
      }
    }

    input {
      padding: 10px 10px 5px;
      font-weight: $font-weight-600;
      &:focus {
        border: 2px solid #107cc0;
        box-shadow: none;
        padding: 10px 10px 5px;
      }
    }

    textarea {
      font-weight: $font-weight-600;
      &:focus {
        border: 2px solid #107cc0;
        box-shadow: none;
        padding: 10px 10px 5px;
      }
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

  .upload-file-icon {
    position: absolute;
    z-index: 99999;
    top: 10px;
    left: 30px;
  }

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
  label {
    margin-bottom: 0 !important;
    padding-bottom: 7px;
  }
}

::v-deep .col-form-label,
label {
  font-size: 12px !important;
  color: #8a8a8a !important;
  font-weight: bold !important;
}

.form-control::placeholder {
  color: #cccccc;
  font-size: 14px;
}

::v-deep .custom-file-input ~ .custom-file-label[data-browse]::after {
  display: none !important;
}

::v-deep .custom-file-input.is-invalid ~ .custom-file-label,
::v-deep .custom-file-input.is-valid ~ .custom-file-label {
  border-color: #007bff !important;
  border: 2px dashed;
  box-shadow: none;
  font-size: 14px;
}

h2#swal2-title {
  color: #007bff;
}
</style>
