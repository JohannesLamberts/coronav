<template>
  <b-form-group>
    <b-form-input
      v-model="zipCode"
      :placeholder="$t('components.hotlineSearch.labelText')"
      type="text"
      :class="$style.input"
      size="lg"
      @keypress.enter="goToRkiPLZTool"
    />
    <b-button
      type="button"
      size="lg"
      variant="primary"
      @click="goToRkiPLZTool"
      >{{ $t('components.hotlineSearch.buttonText') }}</b-button
    >
  </b-form-group>
</template>

<script>
import URIS from '~/config/external-uris'

export default {
  name: 'HotlineSearch',
  data() {
    return {
      zipCode: ''
    }
  },
  methods: {
    goToRkiPLZTool() {
      const url = URIS.rkiPLZTool + this.zipCode
      window.open(url, '_blank', 'noopener')
    }
  }
}
</script>

<style module>
.input {
  margin-bottom: 1rem;
}
</style>
