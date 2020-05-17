<template>
  <md-render-i18n path="vaccination.info" />
</template>

<script>
import MdRenderI18n from '@/components/md-render-i18n'

export default {
  name: 'PageVaccinationInfo',
  components: { MdRenderI18n },
  nuxtI18n: {
    paths: {
      de: '/impfung/info',
      'de-leicht': 'impfung/info'
    }
  }
}
</script>
