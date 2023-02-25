<template>
  <span
    v-if="content"
    class="cof-badge"
    :style="{ 'background-color': background, color: color }"
  >
    {{ content }}
  </span>
</template>
<script>
export default {
  name: 'CBadge',
  props: {
    color: {
      type: String,
      default: '#231f20'
    },
    background: {
      type: String,
      default: '#ffd008'
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.cof-badge {
  padding: 0.4rem 1rem;
  display: inline-block;
  margin: 0.25rem;
  margin-inline-end: auto;
  border-radius: 10rem 0rem 10rem 10rem;
}
</style>
