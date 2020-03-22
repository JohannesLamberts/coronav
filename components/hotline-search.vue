<template>
  <div>
    Hotline Search
    <b-input v-model="plz" />
    <b-button variant="link">GO</b-button>
  </div>
</template>

<script>
export default {
  name: 'HotlineSearch',
  data() {
    return {
      plz: ''
    }
  }
}
</script>
