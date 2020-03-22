<template>
  <div>
    <h1>{{ $t('results.headline') }}</h1>
    <div v-if="showResult">
      <div v-if="!hasFilledOut">
        <b-button variant="link" to="/test/disclaimer">
          {{ $t('results.noResult') }}
        </b-button>
      </div>
      <div v-else>
        {{ resultText }}
        <div v-if="test">
          <hotline-search />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HotlineSearch from '../../components/hotline-search'
export default {
  components: { HotlineSearch },
  data() {
    return {
      showResult: false
    }
  },
  computed: {
    hasFilledOut() {
      return (
        ['covid', 'general', 'none'].includes(this.symptoms) &&
        ['yes', 'no'].includes(this.$route.query.risk)
      )
    },
    symptoms() {
      return this.$route.query.symptoms
    },
    test() {
      return this.symptoms === 'covid'
    },
    generalSymptoms() {
      return this.symptoms === 'general'
    },
    risk() {
      return this.$route.query.risk === 'yes'
    },
    resultText() {
      return this.$t(`results.${this.resultIdent}`)
    },
    resultIdent() {
      if (this.test) {
        return this.risk ? 'testRisk' : 'testNoRisk'
      }
      if (this.generalSymptoms) {
        return this.risk ? 'noTestSymptomsRisk' : 'noTestSymptomsNoRisk'
      }
      return this.risk ? 'noTestNoSymptomsRisk' : 'noTestNoSymptomsNoRisk'
    }
  },
  mounted() {
    // query is not available in generated pages
    this.showResult = true
  }
}
</script>
