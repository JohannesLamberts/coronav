<template>
  <questionnaire :config="questionnaire" />
</template>

<script>
import questionnaire from '@/config/questionnaire.yml'
import Questionnaire from '@/components/questionnaire/questionnaire'

export default {
  name: 'ShouldIGetTested',
  components: { Questionnaire },
  nuxtI18n: {
    paths: {
      de: '/fragebogen/soll-ich-mich-auf-covid-19-testen-lassen',
      'de-leicht': '/fragebogen/soll-ich-mich-auf-covid-19-testen-lassen'
    }
  },
  data() {
    return {
      questionnaire
    }
  }
}
</script>
