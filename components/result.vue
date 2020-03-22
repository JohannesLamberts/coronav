<template>
  <div>
    <h1>{{ $t('results.headline') }}</h1>
    <div>
      {{ response }}
      <div v-if="showTestPath">
        <ol>
          <li>Rufen Sie ihr lokales Gesundheitsamt an</li>
          <li>Bereiten Sie sich auf die ärztliche Anamnese vor</li>
        </ol>
        <hotline-search />
      </div>
    </div>
  </div>
</template>

<script>
import HotlineSearch from './hotline-search'
export default {
  name: 'QuestionaireResult',
  components: { HotlineSearch },
  props: {
    result: {
      type: Object,
      required: true
    }
  },
  computed: {
    response() {
      const {
        symptoms,
        directContact,
        patientHistoryRisk,
        ageRisk,
        riskArea
      } = this.result
      const hasRisk = patientHistoryRisk || ageRisk

      if (symptoms) {
        return 'undefined'
      }

      if (directContact) {
        // riskArea does not matter in case of direct contact
        return hasRisk ? '7_standard' : '8_standard'
      }

      if (riskArea) {
        return hasRisk ? '6_isolation' : '5_isolation'
      }
      return hasRisk ? '6_standard' : '5_standard'
    },
    // TODO: implement path
    showTestPath() {
      return true
    }
  }
}
</script>
