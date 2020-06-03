<template>
  <b-form-group>
    <b-form-input
      v-model="zipCode"
      :placeholder="$t('components.hotlineSearch.labelText')"
      type="text"
      :class="$style.input"
      @keypress.enter="goToRkiPLZTool"
    />
    <b-button
      type="button"
      variant="primary"
      :href="to"
      target="_blank"
      rel="noreferrer noopener"
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
  computed: {
    to() {
      return URIS.rkiPLZTool + this.zipCode
    }
  }
}
</script>

<style module>
.input {
  margin-bottom: 1rem;
}
</style>
