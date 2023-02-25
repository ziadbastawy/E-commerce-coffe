<template>
  <div class="contact-us">
    <b-container>
      <b-row>
        <b-col cols="12" class="mt-5">
          <p class="main-header mb-1">
            {{ $t('staticPages.getInTouche') }}
          </p>
          <p class="want-to-get-in-touch">
            {{ $t('staticPages.wantToGetInTouch') }}
          </p>
        </b-col>
        <b-col cols="12" lg="4" class="mt-3 mb-5">
          <b-img
            class="map-image"
            :src="require('@/assets/images/map.png')"
            alt="map"
          />
          <div class="contact-info mt-4">
            <p class="main-header">
              {{ $t('staticPages.contactInfo') }}
            </p>

            <p class="d-flex">
              <ClockIcon class="contact-icon" />
              <span class="contact-details">
                {{ $t('staticPages.infoDate') }}
              </span>
            </p>
            <p class="d-flex">
              <MailIcon class="contact-icon" />
              <span class="contact-details">
                {{ $t('staticPages.infoMail') }}
              </span>
            </p>
            <p class="d-flex">
              <MapIcon class="contact-icon" />
              <span class="contact-details">
                {{ $t('staticPages.infoStreet') }}
              </span>
            </p>
            <p class="d-flex">
              <MobileIcon class="contact-icon" />
              <span class="contact-details">
                {{ $t('staticPages.infoPhone') }}
              </span>
            </p>
          </div>
        </b-col>
        <b-col cols="12" lg="8" class="mt-3 mb-5">
          <div class="contact-us-form">
            <b-form @submit.prevent="contactCoffePedia">
              <b-form-group
                id="input-group-1"
                :label="$t('staticPages.fullName')"
                label-for="input-1"
                class="full-name"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.full_name"
                  :placeholder="$t('staticPages.fullName')"
                />
                <small
                  v-for="(err, index) in errors.full_name"
                  :key="index"
                  class="text-danger"
                >{{ err }}</small>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                :label="$t('staticPages.email')"
                label-for="input-2"
                class="email"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.email"
                  type="email"
                  :placeholder="$t('staticPages.email')"
                />
                <small
                  v-for="(err, index) in errors.email"
                  :key="index"
                  class="text-danger"
                >{{ err }}</small>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                :label="$t('staticPages.subject')"
                label-for="input-1"
                class="full-name"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.subject"
                  :placeholder="$t('staticPages.subject')"
                />
                <small
                  v-for="(err, index) in errors.subject"
                  :key="index"
                  class="text-danger"
                >{{ err }}</small>
              </b-form-group>
              <label for="textarea-small">{{ $t('staticPages.notes') }}</label>
              <b-form-textarea
                id="textarea-small"
                v-model="form.notes"
                rows="9"
                size="sm"
                :placeholder="$t('staticPages.typeHere')"
              />
              <small
                v-for="(err, index) in errors.notes"
                :key="index"
                class="text-danger"
              >{{ err }}</small>

              <b-button
                type="submit"
                class="mt-3 d-block submit-button"
                variant="primary"
              >
                {{ $t('staticPages.send') }}
              </b-button>
            </b-form>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MailIcon from '@/assets/images/svg-icons/MailIcon'
import ClockIcon from '@/assets/images/svg-icons/ClockIcon'
import MapIcon from '@/assets/images/svg-icons/MapIcon'
import MobileIcon from '@/assets/images/svg-icons/MobileIcon'
import Static from '@/services/static'
export default {
  name: 'ContactUs',
  components: { MailIcon, ClockIcon, MapIcon, MobileIcon },

  data () {
    return {
      form: {
        full_name: '',
        email: '',
        subject: '',
        notes: ''
      },
      errors: {}
    }
  },

  methods: {
    contactCoffePedia () {
      Static.contactUs(this.form)
        .then((res) => {
          this.successMsg(res.msg)
          this.errors = {}
        })
        .catch((error) => {
          console.log(error.response.data)
          this.errors = error.response.data
          const err = Object.values(error.response.data.data.error)
          this.errMsg(err)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
@import './contact-us';
</style>
