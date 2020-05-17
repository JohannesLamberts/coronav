<template>
  <div>
    <md-render-i18n path="antibodyTest.index" tag="div" />
    <b-btn :to="localePath('antibody-test-info')">
      {{ $t('moreInformation') }}
    </b-btn>
  </div>
</template>

<script>
import MdRenderI18n from '@/components/md-render-i18n'

export default {
  name: 'PageAntibodyTest',
  components: { MdRenderI18n },
  nuxtI18n: {
    paths: {
      de: '/antikoerpertest',
      'de-leicht': 'antikoerpertest'
    }
  }
}
</script>
