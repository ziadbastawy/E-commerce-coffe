<template>
  <div>
    <h3 class="font-weight-bold main-haeder">
      {{ $t('profile.wallet') }}
    </h3>
    <div class="balance-card p-4 mb-4 d-flex justify-content-between">
      <h5 class="font-weight-bold">
        <img :src="walletIcon" class="wallet-icon" alt="wallet-icon">
        <span class="mx-md-2 mx-0">{{ $t('profile.balance') }}</span>
      </h5>
      <div class="text-right">
        <h5 class="font-weight-bold">
          {{ $t('checkOut.EGP') }}s {{ balance }}
        </h5>
        <p class="last-update">
          {{ $t('profile.lastUpdate') }} {{ date }}
        </p>
      </div>
    </div>
    <b-icon-check-circle-fill
      v-if="useWallet"
      class="fill-icon"
      @click="toggleUseWallet"
    />
    <b-icon-check-circle-fill
      v-if="!useWallet"
      class="fill-icon2"
      @click="toggleUseWallet"
    />
    <span class="pt-0"> {{ $t('profile.useMyWallet') }} </span>
  </div>
</template>
<script>
import { BIconCheckCircleFill } from 'bootstrap-vue'
export default {
  components: {
    BIconCheckCircleFill
  },
  data () {
    return {
      useWallet: true,
      walletIcon: require('@/assets/images/profile/wallet-icon.svg'),
      balance: 199,
      date: '09 Oct 2021'
    }
  },
  methods: {
    toggleUseWallet () {
      this.useWallet = !this.useWallet
    }
  }
}
</script>
<style lang="scss" scoped>
.balance-card {
  background: #fff;
  border-radius: $default-radios;
  .wallet-icon {
    max-width: 30px;
    max-height: 30px;
    margin-bottom: 10px;
  }
  .last-update {
    color: $gray;
  }
}

.fill-icon,
.fill-icon2 {
  fill: #27dc4e;
  width: 25px;
  height: 25px;
  vertical-align: top;
  cursor: pointer;
}
.fill-icon2 {
  fill: #000;
}
.main-haeder {
  @media (max-width: 991px) {
    text-align: center;
    margin: 0;
    padding: 10px 0;
  }
}
</style>
