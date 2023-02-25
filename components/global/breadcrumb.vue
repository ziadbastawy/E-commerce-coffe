<!--
 1- at First call component in your page ex: <CbreadCrumb :bread-crumb-array="yourArray" />
 2- in data proparty call yourArray ex :
 yourArray: [
        {
          text: 'Home',
          to: '/'
        },
        {
          text: 'login',
          active: true
        }
      ]
      active is the last Page
-->
<template>
  <div>
    <b-breadcrumb :items="breadCrumbArray" />
  </div>
</template>

<script>
export default {
  name: 'CbreadCrumb',
  props: {
    breadCrumbArray: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.breadcrumb-item + .breadcrumb-item::before {
  margin-top: 5px;
}
</style>
