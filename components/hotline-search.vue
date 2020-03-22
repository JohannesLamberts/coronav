<template>
  <b-form-group :label="$t('components.hotlineSearch.labelText')">
    <b-form-input
      v-model="zipCode"
      type="text"
      @keypress.enter="goToRkiPLZTool"
    />
    <b-button type="button" @click="goToRkiPLZTool">{{
      $t('components.hotlineSearch.buttonText')
    }}</b-button>
  </b-form-group>
</template>

<script>
import { rkiPLZTool } from 'static/uris.json'

export default {
  name: 'HotlineSearch',
  data() {
    return {
      labelText: 'Postleitzahl eingeben',
      buttonText: 'Hotline suchen',
      zipCode: null
    }
  },
  methods: {
    goToRkiPLZTool() {
      const url = rkiPLZTool + this.zipCode
      window.open(url, '_blank', 'noopener')
    }
  }
}
</script>
