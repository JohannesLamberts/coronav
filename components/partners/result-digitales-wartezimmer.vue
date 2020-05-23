<template>
  <div>
    <p>
      Sie haben den Fragebogen erfolgreich ausgefüllt. Das digitale Wartezimmer
      unterstützt Sie jetzt im weiteren Verlauf.
    </p>
    <b-btn color="primary" rel="noopener" :href="href">
      Zum digitalen Wartezimmer
    </b-btn>
  </div>
</template>

<script>
import { DIGITALES_WARTEZIMMER } from '@/config/partners'

export default {
  name: 'ResultDigitalesWartezimmer',
  injectModels: ['Partner'],
  props: {
    responseConfig: {
      type: Object,
      required: true
    },
    results: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      DIGITALES_WARTEZIMMER
    }
  },
  computed: {
    href() {
      const url = new URL(DIGITALES_WARTEZIMMER.resultCallbackUrl)
      url.searchParams.set('result_ident', this.responseConfig.ident)
      url.searchParams.set('locale', this.$i18n.locale)
      Object.entries(this.results).forEach(([key, value]) => {
        url.searchParams.set(key, value)
      })
      return url.href
    }
  }
}
</script>
