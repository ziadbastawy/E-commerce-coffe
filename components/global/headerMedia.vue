<template>
  <div class="header my-3 position-relative overflow-hidden">
    <div class="header-image h-100 position-relative">
      <img :src="image" alt="header-image">
    </div>
    <div
      class="title m-0 text-white position-absolute h-100 w-100 pt-2"
      align-v="center"
      :class="{ 'no-background': noBackrgound }"
    >
      <h2 class="m-0 text-uppercase">
        {{ title }}
      </h2>
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'CHeaderMedia',
  props: {
    title: { type: String, default: 'aboutus' },
    image: {
      type: String,
      default: require('@/assets/images/about-us/header.jpg')
    },
    noBackrgound: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return { count: 0 }
  }
}
</script>
<style lang="scss" scoped>
.header {
  border-radius: $default-radios * 2;
  height: 13rem;
  .header-image {
    [dir='rtl'] & {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
  }
  .title {
    top: 0;
    padding: 0 4rem;
    background: linear-gradient(
      90deg,
      #382318 0%,
      #382318 32%,
      rgba(56, 35, 24, 0) 43%,
      rgba(56, 35, 24, 0) 48%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    [dir='rtl'] & {
      background: linear-gradient(
        270deg,
        #382318 0%,
        #382318 32%,
        rgba(56, 35, 24, 0) 43%,
        rgba(56, 35, 24, 0) 48%
      );
    }

    h2 {
      width: 50%;
      @media (max-width: 991px) {
        width: 100%;
      }
    }
    @media (max-width: 1499px) {
      padding: 0 2rem;
      background: linear-gradient(
        90deg,
        #382318 0%,
        #382318 45%,
        rgba(56, 35, 24, 0) 61%,
        rgba(56, 35, 24, 0) 70%
      );
    }
    @media (max-width: 991px) {
      text-align: center;
      background: rgba(56, 35, 24, 0.8);
    }
    &.no-background {
      background: none;
    }
  }
}
</style>
