<template>
  <div>
    <h4 class="font-weight-bold main-header">
      {{ $t('profile.accountSetting') }}
    </h4>
    <div class="bg-white account-sitting p-3">
      <div class="d-flex justify-content-between mb-3">
        <h5 class="font-weight-bold">
          {{ $t('profile.personalInfo') }}
        </h5>
        <p
          v-if="!editMode"
          class="edit-info font-weight-bold"
          @click="switchToInput"
        >
          {{ $t('profile.edit') }}
        </p>
      </div>
      <div
        class="flex-column flex-md-row mb-4 d-flex align-items-md-center align-items-start"
      >
        <!-- <b-avatar class="avatar mr-4 mb-4" /> -->
        <b-img
          :src="profilePicture"
          alt="test"
          class="mr-3 mr-3 mb-3 mb-md-0 profile-pic"
          style=""
        />
        <!-- <h1>{{ cachedUser.avatar || 'Null' }}</h1> -->
        <div class="name-and-email">
          <p class="name font-weight-bold mb-2">
            {{ cachedUser.first_name }}
            {{ cachedUser.last_name }}
          </p>
          <p class="email font-weight-bold mb-0">
            {{ cachedUser.email }}
          </p>
        </div>
      </div>
      <div v-if="!editMode" class="static-form px-0 px-md-2">
        <div class="d-flex">
          <div class="first-name">
            <label class="font-weight-bold">
              {{ $t('profile.firstName') }}
            </label>
            <p class="font-weight-bold">
              {{ form.first_name }}
            </p>
          </div>
          <div class="last-name">
            <label class="font-weight-bold">
              {{ $t('profile.lastName') }}
            </label>
            <p class="font-weight-bold">
              {{ form.last_name }}
            </p>
          </div>
        </div>
        <div class="email-address">
          <label class="font-weight-bold">
            {{ $t('profile.emailAddress') }}</label>
          <p class="font-weight-bold">
            {{ form.email }}
          </p>
        </div>
        <div class="password">
          <label class="font-weight-bold"> {{ $t('profile.password') }}</label>
          <p class="font-weight-bold">
            ************
          </p>
        </div>
      </div>
      <div v-else class="dynamic-form px-0 px-md-2">
        <b-form
          v-if="show"
          enctype="multipart/form-data"
          @submit.prevent="onSubmit"
        >
          <b-form-group>
            <input
              id="profilePicture"
              name="profilePicture"
              type="file"
              hidden
              class="mt-0 mb-3"
              accept="image/*"
              @change="changeProfilePic"
              @click="switchToInput"
            >
            <label for="profilePicture" class="pl-2 mt-1 mb-3 font-weight-bold">
              {{ $t('profile.addPhoto') }}
            </label>
          </b-form-group>
          <b-form-group
            id="input-group-1"
            :label="$t('profile.firstName')"
            label-for="input-1"
            class="first-name"
          >
            <b-form-input
              id="input-1"
              v-model="form.first_name"
              placeholder="Enter name"
              required
            />
          </b-form-group>
          <b-form-group
            id="input-group-2"
            :label="$t('profile.lastName')"
            label-for="input-2"
            class="last-name"
          >
            <b-form-input
              id="input-2"
              v-model="form.last_name"
              placeholder="Enter name"
              required
            />
          </b-form-group>
          <b-form-group
            id="input-group-3"
            :label="$t('profile.emailAddress')"
            label-for="input-3"
            class="email-address"
          >
            <b-form-input
              id="input-3"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            />
          </b-form-group>
          <b-form-group
            id="input-group-4"
            class="password"
            :label="$t('profile.password')"
            label-for="text-password"
          >
            <div>
              <b-form-input
                id="text-password"
                v-model="form.password"
                :type="passFieldType"
                placeholder="Set Your New Password Here"
                aria-describedby="password-help-block"
              />
              <b-button
                class="show-password"
                type="button"
                @click.prevent="onSwitch"
              >
                <img
                  v-if="passFieldType == 'text'"
                  src="@/assets/images/auth/bi-eye-slash-fill.svg"
                >
                <img v-else src="@/assets/images/auth/bi-eye-fill.svg">
              </b-button>
            </div>
          </b-form-group>
          <b-button type="submit" class="submit-button" variant="primary">
            {{ $t('profile.submit') }}
          </b-button>
          <b-button
            class="mt-md-0 cancel-button"
            variant="danger"
            @click="cancel"
          >
            {{ $t('profile.cancel') }}
          </b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import authService from '@/services/profile'

export default {
  data () {
    return {
      editMode: false,
      cachedUser: {
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        avatar: ''
      },
      form: {
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        avatar: ''
      },
      profilePicture: '',
      passFieldType: 'password',
      show: true
    }
  },
  created () {
    const { email, first_name, last_name, password } = {
      ...this.$auth.user
    }
    this.profilePicture = this.$auth.user.avatar ? this.$auth.user.avatar : require('@/assets/images/profile/user-profile-icon.jpg')
    this.form = { email, first_name, last_name, password }
    this.cachedUser = { ...this.form }
    this.cachedUser.avatar =
      this.$auth.user.avatar ||
      require('@/assets/images/profile/user-profile-icon.jpg')
  },
  mounted () {},
  methods: {
    switchToInput () {
      this.editMode = true
    },
    async onSubmit () {
      this.$nuxt.$loading.start()
      await authService
        .updateProfile(this.formData())
        .then((res) => {
          this.$nuxt.$loading.finish()
          this.editMode = false
          this.cachedUser = { ...this.form }
          this.cachedUser.avatar = this.profilePicture
          this.$auth.setUser(res.data.data)
          this.cachedUser.password = ''

          this.successMsg(res.data.msg)
        })
        .catch((err) => {
          this.errMsg(err.response.data.email[0])

          this.$nuxt.$loading.finish()
        })
      this.cancel()
    },
    onSwitch () {
      this.passFieldType =
        this.passFieldType === 'password' ? 'text' : 'password'
    },
    changeProfilePic (event) {
      const imgFile = event.target.files[0]
      this.form.avatar = imgFile
      this.profilePicture = URL.createObjectURL(imgFile)
    },

    cancel () {
      if (this.form.avatar) {
        this.profilePicture = this.cachedUser.avatar
      }
      this.form = { ...this.cachedUser }
      this.editMode = false
      this.passFieldType = 'password'
    },

    formData () {
      const formData = new FormData()
      formData.append('firstName', this.form.first_name)
      formData.append('lastName', this.form.last_name)
      formData.append('email', this.form.email)

      if (this.form.password) {
        formData.append('password', this.form.password)
      }

      if (
        this.form.avatar !== undefined &&
        typeof this.form.avatar !== 'string'
      ) {
        formData.append('profilePicture', this.form.avatar)
      }
      return formData
    }
  }
}
</script>

<style lang="scss" scoped>
.account-sitting {
  border-radius: $default-radios;
  .edit-info {
    color: $main-color;
    cursor: pointer;
  }
  .profile-pic {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }
  .name-and-email {
    .name {
      color: $gray-dark;
    }
    .email {
      color: $gray;
      font-size: 14px;
    }
  }
  .add-photo {
    color: $main-color;
    cursor: pointer;
  }
  .static-form {
    .first-name,
    .last-name {
      width: 50%;
    }
    label {
      color: $gray;
      font-size: 14px;
    }
  }

  .dynamic-form {
    .first-name,
    .last-name,
    .email-address,
    .password {
      color: $gray;
      font-weight: bold;
      font-size: 14px;
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
    }
    .submit-button,
    .cancel-button {
      background: $main-color;
      border-radius: 20px;
      padding: 10px 35px;
    }
    .cancel-button {
      background: red;
    }
  }
}
#profilePicture + label {
  display: inline-block;
  color: $main-color;
  cursor: pointer;
}
.main-header {
  @media (max-width: 991px) {
    text-align: center;
    margin: 0;
    padding: 10px 0;
  }
}

html:lang(ar) {
  .profile-pic {
    margin-right: 0rem !important;
    margin-left: 1rem !important;
  }
  .show-password {
    left: 10px;
    right: auto !important;
  }
}
</style>
