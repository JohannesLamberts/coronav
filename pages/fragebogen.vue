<template>
  <questionnaire :config="questionnaire" />
</template>

<script>
import questionnaire from '~/config/questionnaire.yml'
import Questionnaire from '@/components/questionnaire/questionnaire'

export default {
  name: 'Fragebogen',
  components: { Questionnaire },
  data() {
    return {
      questionnaire
    }
  }
}
</script>
