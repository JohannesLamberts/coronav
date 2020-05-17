<template>
  <md-render-i18n path="antibodyTest.info" tag="div" />
</template>

<script>
import MdRenderI18n from '@/components/md-render-i18n'

export default {
  name: 'PageAntibodyTestInfo',
  components: { MdRenderI18n },
  nuxtI18n: {
    paths: {
      de: '/antikoerpertest/info',
      'de-leicht': 'antikoerpertest/info'
    }
  }
}
</script>
