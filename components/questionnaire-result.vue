<template>
  <div>
    <h2 class="h5 mb-3">{{ $t('results.headline') }}</h2>
    <div>
      <b-alert show class="my-4">
        <p>
          <strong>{{ responseText.label }}</strong>
        </p>
        <p v-if="showHotlineSearch">
          <i>{{ $t('results.searchInfo') }}</i>
        </p>
        <p>{{ responseText.result }}</p>
      </b-alert>
      <p>{{ $t('results.todosLabel') }}</p>
      <ul>
        <li v-for="text of responseText.todos" :key="text">{{ text }}</li>
      </ul>
      <div v-if="showHotlineSearch">
        <hotline-search />
      </div>
      <h4 class="h5">
        {{ $t('results.additionalRessources.label') }}
      </h4>
      <ul>
        <li
          v-for="page of $t('results.additionalRessources.pages')"
          :key="page.url"
        >
          <a :href="page.url" target="_blank" rel="noreferrer noopener">
            {{ page.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HotlineSearch from './hotline-search'

export default {
  name: 'QuestionnaireResult',
  components: { HotlineSearch },
  props: {
    choices: {
      type: Object,
      required: true
    }
  },
  computed: {
    responseText() {
      return this.$t(`results.cases.${this.responseIdent}`)
    },
    responseIdent() {
      const { symptoms, directContact, contact, risk } = this.choices
      if (symptoms) {
        if (contact) {
          return risk
            ? '1_symptoms_withContact_risk'
            : '2_symptoms_withContact_noRisk'
        }
        return risk
          ? '3_symptoms_withoutContact_risk'
          : '4_symptoms_withoutContact_noRisk'
      }

      if (directContact) {
        // riskArea does not matter in case of direct contact
        return risk ? '7_directContact_risk' : '8_directContact_noRisk'
      }

      return risk ? '6_noFeatures_risk' : '5_noFeatures_noRisk'
    },
    showHotlineSearch() {
      return [
        '1_symptoms_withContact_risk',
        '2_symptoms_withContact_noRisk',
        '7_directContact_risk',
        '8_directContact_noRisk'
      ].includes(this.responseIdent)
    }
  }
}
</script>
