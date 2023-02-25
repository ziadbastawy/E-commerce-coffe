<template>
  <div class="checkout" :class="!editModeProps ? 'new-address' : ''">
    <div v-if="!editModeProps" class="title mb-3">
      {{ $t('profile.createNewAddress') }}
    </div>
    <form class="form row" @submit.prevent="formSubmitted()">
      <b-col cols="12" class="form-input">
        <label for="name"> {{ $t('profile.addressTitle') }}</label>
        <b-form-input
          id="name"
          v-model="form.name"
          name="name"
          placeholder="Home Address, Work Address"
          required
        />
      </b-col>
      <!-- Governorate -->
      <b-col cols="12" lg="6" class="form-input">
        <label for="governorate">{{ $t('profile.governorate') }}</label>
        <b-form-select
          id="governorate"
          v-model="form.governorate_id"
          required
          name="governorate"
          :options="governorates"
          value-field="id"
          text-field="name"
          @input="getCites"
        />
      </b-col>
      <!-- City -->
      <b-col cols="12" lg="6" class="form-input">
        <label for="city">{{ $t('profile.city') }}</label>
        <b-form-select
          id="city"
          v-model="form.city_id"
          required
          :disabled="!form.governorate_id"
          name="city"
          :options="cities"
          value-field="id"
          text-field="name"
        />
      </b-col>
      <!-- Street -->
      <b-col cols="12" lg="6" class="form-input">
        <label for="first-name">{{ $t('profile.street') }}</label>
        <b-form-input
          id="street"
          v-model="form.street"
          name="street"
          placeholder="Street"
          required
        />
      </b-col>
      <!-- Address Details -->
      <b-col cols="12" class="form-input">
        <label for="address-details">{{ $t('profile.addressDetails') }}</label>
        <b-form-textarea
          id="address-details"
          v-model="form.details"
          placeholder="Type here …"
          rows="3"
        />
      </b-col>
      <b-col cols="6" sm="4" md="3" xl="2" class="d-flex address-buttons">
        <c-button
          class="w-50 mt-4 mr-3"
          style="padding: 0.8rem 1rem; max-width: unset"
          type="submit"
        >
          {{ $t('profile.saveAddress') }}
        </c-button>
        <b-button
          class="cancel-button w-90 mt-4"
          variant="danger"
          @click="cancel"
        >
          {{ $t('profile.cancel') }}
        </b-button>
      </b-col>
    </form>
  </div>
</template>

<script>
import apiAddress from '../../../../services/address'
export default {
  props: {
    editModeProps: {
      type: Boolean,
      default: () => false
    },
    governorates: {
      type: Array,
      default: () => []
    },
    getMyAddresses: {
      type: Function,
      default: () => 1
    },

    getSingleAddress: {
      type: Object,
      default: () => {}
    },
    setAsPrimary: {
      type: Function,
      default: () => 1
    }
  },
  data () {
    return {
      cachedAddress: {
        governorate_id: null,
        city_id: null,
        street: '',
        details: '',
        name: ''
      },
      form: {
        governorate_id: null,
        city_id: null,
        street: '',
        details: '',
        name: ''
      },
      cities: []
    }
  },

  mounted () {
    if (this.editModeProps) {
      /* use assign to clone by avoid cloning by Reference  and make another copy for  getSingleAddress to use it
       */
      this.form = { ...this.getSingleAddress }
    }
  },

  methods: {
    cancel () {
      this.cachedAddress = { ...this.form }
      if (this.editModeProps) {
        /*
        1 - when add data then click cancel .. and return to edit data .. the edited data is exist even i didn't updated it
        2 - assign original object (not copy) to the form
        // this.form = Object.assign({}, this.getSingleAddress)
        */
        this.form = { ...this.getSingleAddress }
      }
      this.$emit('closeWindow')
    },

    getCites () {
      this.$nuxt.$loading.start()
      apiAddress.cites(this.form.governorate_id).then((res) => {
        this.cities = res.data
        this.$nuxt.$loading.finish()
      })
    },
    addAddress () {
      this.$nuxt.$loading.start()
      apiAddress
        .addAddress(this.form)
        .then((res) => {
          this.getMyAddresses()
          this.successMsg(res.data.msg)
          this.cancel()
          this.$nuxt.$loading.finish()
        })
        .catch(() => {
          this.$nuxt.$loading.finish()
        })
    },

    updateAddress () {
      this.$nuxt.$loading.start()
      this.form.address_id = this.getSingleAddress.id
      apiAddress
        .updateAddress(this.form)
        .then((res) => {
          this.successMsg(this.$t('profile.addressUpdatedSuccessfully'))
          this.getMyAddresses()
          this.$root.$emit(
            'bv::toggle::collapse',
            `accordion-${this.getSingleAddress.id}`
          )

          this.$nuxt.$loading.finish()
        })
        .catch(() => {
          this.$nuxt.$loading.finish()
        })
    },

    formSubmitted () {
      delete this.form.city
      delete this.form.governorate
      if (this.editModeProps) {
        this.updateAddress()
      } else {
        this.addAddress()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.new-address {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
}
.main-button {
  padding: 0.5rem 5rem !important;
}
.cancel-button {
  background: $main-color;
  border-radius: 20px;
  padding: 10px 35px 10px 32px;
}
.cancel-button {
  background: red;
}

html:lang(ar) {
  .address-buttons {
    .main-button {
      margin-right: 0rem !important;
      margin-left: 1rem !important;
    }
  }
}
</style>
