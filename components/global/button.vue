<template>
  <b-button
    class="main-button"
    :class="{ link: $attrs.to }"
    v-bind="$attrs"
    @click="$emit('click', $event.target.value)"
  >
    <slot />
  </b-button>
</template>

<script>
export default {
  name: 'CButton',
  props: {
    // link: { type: Boolean, default: false }
  }
}
</script>
