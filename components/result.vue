<template>
  <div>
    <h1>{{ $t('results.headline') }}</h1>
    <div>
      {{ responseText }}
      <div v-if="showTestPath">
        <ol>
          <li v-for="step in $t('results.testCase.steps')" :key="step">
            {{ step }}
          </li>
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
    responseText() {
      return this.$t(`result.cases.${this.responseIdent}`)
    },
    responseIdent() {
      const {
        symptoms,
        directContact,
        patientHistoryRisk,
        ageRisk,
        riskArea
      } = this.result
      const hasRisk = patientHistoryRisk || ageRisk

      if (symptoms) {
        if (directContact || riskArea) {
          return hasRisk
            ? '1_symptoms_withContact_risk'
            : '2_symptoms_withContact_noRisk'
        }
        return hasRisk
          ? '3_symtoms_withoutContact_risk'
          : '4_symtoms_withoutContact_noRisk'
      }

      if (directContact) {
        // riskArea does not matter in case of direct contact
        return hasRisk ? '7_directContact_risk' : '8_directContact_noRisk'
      }

      if (riskArea) {
        return hasRisk ? '6_areaContact_risk' : '5_areaContact_noRisk'
      }

      return hasRisk ? '6_noFeatures_risk' : '5_noFeatures_noRisk'
    },
    // TODO: implement path
    showTestPath() {
      return true
    }
  }
}
</script>
