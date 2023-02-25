<template>
  <div>
    <h5 class="title mb-4">
      {{
        addresses.length > 0
          ? $t('checkOut.fromAddressBook')
          : $t('checkOut.createYourAddress')
      }}
    </h5>
    <b-row>
      <b-col cols="12" lg="8" class="mb-3" order="2" order-lg="1">
        <div class="saved-places">
          <form class="options">
            <div
              v-for="address in addresses"
              :key="address.id"
              class="option address position-relative d-flex align-items-center p-4 mb-4"
              @click="optionChecked"
            >
              <div
                class="custom-control custom-radio b-custom-control-lg address-radio"
              >
                <input
                  id="customRadio1"
                  v-model="address_id"
                  :value="address.id"
                  type="radio"
                  name="customRadio"
                  class="custom-control-input"
                >
                <label class="custom-control-label" for="customRadio1" />
              </div>
              <div class="header">
                <h5 class="title">
                  {{ address.name }}
                </h5>
                <p class="info m-0">
                  {{ address.governorate }} {{ $t('checkOut.governorate') }} ,
                  {{ address.city }} {{ $t('checkOut.city') }} ,
                  {{ address.street }}
                </p>
              </div>
            </div>
          </form>
        </div>
        <hr v-if="addresses.length > 0">
        <div class="new-address">
          <div v-if="addresses.length > 0" class="title mb-3">
            {{ $t('checkOut.orEnterAddress') }}
          </div>
          <form class="form row">
            <b-col cols="12" class="form-input">
              <label for="first-name">
                {{ $t('checkOut.addressTitle') }}
              </label>
              <b-form-input
                id="name"
                v-model="form.name"
                required
                name="name"
                :placeholder="`${$t('checkOut.homeWorkAddress')}`"
              />
            </b-col>
            <!-- Governorate -->
            <b-col cols="12" lg="6" class="form-input">
              <label for="governorate">{{ $t('checkOut.governorate') }}</label>
              <b-form-select
                id="governorate"
                v-model="form.governorate_id"
                required
                name="governorate"
                :options="governorates"
                value-field="id"
                text-field="name"
                :state="address_id ? null : form.governorate_id ? null : false"
                @input="getCites"
              />
            </b-col>
            <!-- City -->
            <b-col cols="12" lg="6" class="form-input">
              <label for="city">{{ $t('checkOut.city') }}</label>
              <b-form-select
                id="city"
                v-model="form.city_id"
                required
                :disabled="!form.governorate_id"
                name="city"
                :options="cities"
                value-field="id"
                text-field="name"
                :state="address_id ? null : form.city_id ? null : false"
              />
            </b-col>
            <!-- Street -->
            <b-col cols="12" lg="6" class="form-input">
              <label for="first-name"> {{ $t('checkOut.street') }}</label>
              <b-form-input
                id="street"
                v-model="form.street"
                name="street"
                :state="address_id ? null : form.street ? null : false"
                :placeholder="`${$t('checkOut.street')}`"
              />
            </b-col>
            <!-- Address Details -->
            <b-col cols="12" class="form-input">
              <label
                for="address-details"
              >{{ $t('checkOut.addressDetails') }}
              </label>
              <b-form-textarea
                id="address-details"
                v-model="form.details"
                :placeholder="`${$t('checkOut.typeHere')}`"
                rows="3"
              />
            </b-col>
            <b-col cols="6" sm="4" md="3" xl="2">
              <c-button
                class="w-100 mt-4"
                style="padding: 0.8rem 1rem; max-width: unset"
                @click="nextStep"
              >
                {{ $t('checkOut.continue') }}
              </c-button>
            </b-col>
          </form>
        </div>
      </b-col>
      <b-col cols="12" lg="4" class="side-info" order="1" order-lg="2">
        <b-row>
          <CartDetails />
          <CartItems />
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import ApiAddress from '@/services/address'
import CartDetails from '@/components/pages/checkout/components/ProceedToCheckout/CartDetails.vue'
import CartItems from '@/components/pages/checkout/components/ProceedToCheckout/CartItems.vue'
export default {
  components: { CartDetails, CartItems },
  props: {
    addressIdProp: {
      required: false,
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      address_id: '',
      addresses: [],
      form: {
        governorate_id: null,
        city_id: null,
        street: '',
        details: '',
        name: ''
      },
      governorates: [],
      cities: []
    }
  },
  mounted () {
    if (this.addressIdProp) {
      this.address_id = this.addressIdProp
    }
    this.getAllAddresses()
    this.getGovernorate()
  },
  methods: {
    getGovernorate () {
      ApiAddress.governorates().then((res) => {
        this.governorates = res.data
      })
    },
    getCites () {
      this.address_id = ''
      ApiAddress.cites(this.form.governorate_id).then((res) => {
        this.cities = res.data
      })
    },
    addAddress () {
      ApiAddress.addAddress(this.form).then((res) => {
        this.address_id = res.data.data.address_id
        this.$emit('nextStep')
        this.$emit('address-id', this.address_id)

        this.successMsg(res.data.msg)
        this.getAllAddresses()
        this.form = {
          governorate_id: null,
          city_id: null,
          street: '',
          details: ''
        }
      })
    },
    getAllAddresses () {
      ApiAddress.myAddresses().then((res) => {
        this.addresses = res.data
        res.data.forEach((element) => {
          if (element.primary === 1) {
            this.address_id = element.id
          }
        })
      })
    },
    nextStep () {
      // if (this.address_id) {
      //   this.$emit('nextStep')
      //   this.$emit('address-id', this.address_id)
      // }

      if (this.address_id) {
        this.$emit('nextStep')
        this.$emit('address-id', this.address_id)
      } else if (
        this.form.governorate_id &&
        this.form.city_id &&
        this.form.street
      ) {
        return this.addAddress()
      } else {
        return this.errMsg(this.$t('profile.youShouldToSelectAddress'))
      }
      // if (this.form.governorate_id) {
      //   this.addAddress()
      // } else if (this.addresses.length <= 0) {
      //   this.errMsg('You should to Create your address')
      // } else if (!this.address_id) {
      //   this.errMsg('You should to select your address')
      // }
    },
    optionChecked (e) {
      this.$emit('optionChecked', e)
    },
    isValidated () {
      if (this.address_id) {
        return true
      } else if (
        this.form.governorate_id &&
        this.form.city_id &&
        this.form.street
      ) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
