<template>
  <div>
    <b-row>
      <b-col lg="6">
        <h4 class="font-weight-bold main-header">
          {{ $t('profile.addressBook') }}
        </h4>
      </b-col>
      <b-col lg="6">
        <a
          v-if="!createMode && addresses.length"
          class="font-weight-bold text-right new-add-address"
          @click="createMode = !createMode"
        >
          + {{ $t('profile.addNewAddress') }}
        </a>
      </b-col>
    </b-row>
    <!-- for create -->
    <AdressForm
      v-if="createMode"
      :edit-mode-props="editModeProps"
      :governorates="governorates"
      :getMyAddresses="getMyAddresses"
      @closeWindow="closed()"
    />
    <div v-if="loading" class="mt-3">
      <b-skeleton
        v-for="index in 3"
        :key="index"
        width="100%"
        class="my-4"
        height="6rem"
      />
    </div>
    <div v-if="addresses.length && !loading">
      <div
        v-for="(address, index) in addresses"
        :key="index"
        class="card-boxes my-3"
      >
        <div class="p-4">
          <div class="primary-address d-flex mb-2">
            <h5 class="title">
              {{ address.name }}
            </h5>
            <c-badge
              v-if="address.primary === 1"
              :content="$t('profile.primary')"
            />
            <b-dropdown
              offset="-100"
              size="lg"
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
              class="dropdown"
            >
              <template #button-content>
                <b-icon-three-dots-vertical />
              </template>
              <b-dropdown-item
                v-if="address.primary !== 1"
                @click="setAsPrimary(address)"
              >
                {{ $t('profile.setAsPrimary') }}
              </b-dropdown-item>
              <b-dropdown-item
                :ref="`address-toggle-${address.id}`"
                @click="addressToggle(address.id)"
              >
                {{ $t('profile.edit') }}
              </b-dropdown-item>
              <b-dropdown-item
                class="delete-address-button"
                @click="deleteAddress(address.id)"
              >
                {{ $t('profile.delete') }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
          <p class="info m-0">
            {{ address.governorate }} {{ $t('profile.governorate') }} ,
            {{ address.city }} {{ $t('profile.city') }} ,
            {{ address.street }}
          </p>
        </div>
        <b-collapse
          :id="`accordion-${address.id}`"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card>
            <!-- for Update -->
            <AdressForm
              :getSingleAddress="address"
              :edit-mode-props="!editModeProps"
              :governorates="governorates"
              :getMyAddresses="getMyAddresses"
              @closeWindow="closed(address)"
            />
          </b-card>
        </b-collapse>
      </div>
    </div>
    <div
      v-else-if="!addresses.length && !addNewAddress && !loading"
      class="empty-address-book bg-white p-4 w-100 text-center"
    >
      <EmptyAddressBook />
      <h6 class="font-weight-bold mt-5">
        {{ $t('profile.emptyAddressBook') }}
      </h6>
      <p class="">
        {{ $t('profile.pleaseAddAddressList') }}
      </p>
      <a
        class="font-weight-bold add-new-address-if-empty-address"
        @click="addNewAddressInEmptyCase"
      >
        {{ $t('profile.addNewAddress') }}
      </a>
    </div>
  </div>
</template>

<script>
import { BIconThreeDotsVertical } from 'bootstrap-vue'
import apiAddress from '../../../../services/address'
import AdressForm from '@/components/pages/profile/components/AdressForm.vue'
import EmptyAddressBook from '~/assets/images/svg-icons/EmptyAddressBook.vue'

export default {
  components: {
    EmptyAddressBook,
    AdressForm,
    BIconThreeDotsVertical
  },
  data () {
    return {
      editMode: null,
      editModeProps: false,
      createMode: false,
      governorates: [],
      addresses: [],
      addNewAddress: false,
      loading: true,
      firstTimeLoading: false
    }
  },
  mounted () {
    this.getMyAddresses()
    this.getGovernorate()
  },
  methods: {
    setAsPrimary ({ city_id, governorate_id, name, street, details, id }) {
      this.$nuxt.$loading.start()
      const payload = {
        city_id,
        governorate_id,
        name,
        street,
        details,
        address_id: id,
        primary: 1
      }
      apiAddress.updateAddress(payload).then(() => {
        this.successMsg(this.$t('profile.addressUpdatedSuccessfully'))
        this.getMyAddresses()
        this.$nuxt.$loading.finish()
      })
    },
    closed (address) {
      this.addNewAddress = false

      if (address) {
        this.$root.$emit('bv::toggle::collapse', `accordion-${address.id}`)
        this.$refs[`address-toggle-${address.id}`][0].$el.style.display =
          'block'
      } else {
        this.createMode = false
      }
    },
    addressToggle (id) {
      Object.keys(this.$refs).forEach(
        address => (this.$refs[address][0].$el.style.display = 'block')
      )
      this.$refs[`address-toggle-${id}`][0].$el.style.display = 'none'
      this.$root.$emit('bv::toggle::collapse', `accordion-${id}`)
    },

    deleteAddress (id) {
      const payload = { address_id: id }
      this.$swal({
        title: this.$t('profile.titleSwal'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: this.$t('profile.confirmButtonText'),
        cancelButtonText: this.$t('profile.cancelButtonText'),
        customClass: {
          confirmButton: 'btn btn-primary',
          cancelButton: 'btn btn-outline-danger mx-3'
        },
        buttonsStyling: false
      }).then((result) => {
        if (result.isConfirmed) {
          this.$nuxt.$loading.start()
          apiAddress
            .deleteAddress(payload)
            .then(() => {
              this.successMsg(this.$t('profile.addressDeletedSuccessfully'))
              this.getMyAddresses()
              delete this.$refs[`address-toggle-${id}`]
              this.$nuxt.$loading.finish()
            })
            .catch(() => {
              this.$nuxt.$loading.finish()
            })
        }
      })
    },

    getGovernorate () {
      apiAddress.governorates().then((res) => {
        this.governorates = res.data
      })
    },

    getMyAddresses () {
      // check condition to add loader in first load
      // if (this.firstTimeLoading) {
      // }
      this.loading = true

      apiAddress.myAddresses().then((res) => {
        // check condition to add loader in first load
        // this.firstTimeLoading = false

        this.addresses = res.data
        this.loading = false
      })
    },

    addNewAddressInEmptyCase () {
      // check condition to add loader in first load
      // this.firstTimeLoading = true

      this.createMode = !this.createMode
      this.addNewAddress = true
    }
  }
}
</script>
<style lang="scss" scoped>
.main-header {
  @media (max-width: 991px) {
    text-align: center;
    margin: 0;
    padding: 10px 0;
  }
}
.new-add-address {
  @media (max-width: 991px) {
    text-align: center !important;
  }
  font-size: 1.1em;
  display: block;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}
.card-boxes {
  background-color: #fff;
  position: relative;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  box-shadow: 0px 0px 5px -1px #e3e3e3;
  .primary-address {
    align-items: center;
    h5 {
      color: #231f20;
      margin: 0;
    }
    p {
      color: #606266;
    }
  }
  .dropdown {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .cof-badge {
    padding: 0.2rem 1rem;
    margin: 0 1.25rem;
  }
}

.empty-address-book {
  padding-top: 12rem !important;
  padding-bottom: 12rem !important;
  border-radius: $default-radios;

  .add-new-address-if-empty-address {
    cursor: pointer;
    color: $main-color;
  }
}

::v-deep .delete-address-button {
  a {
    color: red;
  }
}

html:lang(ar) {
  .dropdown {
    position: absolute;
    right: auto !important;
    left: 10px;
    top: 10px;
  }
  .new-add-address {
    text-align: left !important;
    @media (max-width: 991px) {
      text-align: center !important;
    }
  }
}
</style>
