<template>
  <div>
    <md-render-i18n path="vaccination.index" tag="div" />
    <b-btn :to="localePath('vaccination-info')">
      {{ $t('moreInformation') }}
    </b-btn>
  </div>
</template>

<script>
import MdRenderI18n from '@/components/md-render-i18n'

export default {
  name: 'PageVaccination',
  components: { MdRenderI18n },
  nuxtI18n: {
    paths: {
      de: '/impfung',
      'de-leicht': 'impfung'
    }
  }
}
</script>
