<template>
  <div>
    <h1>Ergebnis</h1>
    {{ resultIdent }}
    <div v-if="test">
      <div v-if="risk">
        Sie sollten einen Test machen und gehören zur Risikogruppe. -> PLZ,
        Teststellen, Hotlines.
      </div>
      <div v-else>
        Sie sollten einen Test machen und gehören nicht zur Risikogruppe. ->
        PLZ, Teststellen, Hotlines.
      </div>
      <hotline-search />
    </div>
    <div v-if="result === 'symptoms_no_test_risk'">
      Sie müssen keinen Test machen, aber gehören zur Risikogruppe. -> Zum Arzt
      wegen Symptomen (normale Erkältung), Selbstisolation.
    </div>
    <div v-if="result === 'symptoms_no_test_no_risk'">
      Ihre Symptome sprechen nicht für einen Test, sie gehören nicht zur
      Risikogruppe -> Zum Arzt, Selbstisolation.
    </div>
    <div v-if="result === 'no_symptoms_no_test_no_risk'">
      Alles ist gut. Kontakte vermeiden.
    </div>
    <div v-if="result === 'no_symptoms_no_test_no_risk'">
      Sie gehören zur Risikogruppe -> Zu Hause, auf Symptome achten.
    </div>
  </div>
</template>

<script>
import HotlineSearch from '../../components/hotline-search'
export default {
  components: { HotlineSearch },
  data() {
    return {
      plz: ''
    }
  },
  computed: {
    test() {
      return this.$route.query.test === 'yes'
    },
    symptoms() {
      return this.$route.query.symptoms === 'yes'
    },
    risk() {
      return this.$route.query.risk === 'yes'
    },
    resultIdent() {
      return ['test', 'symptoms', 'risk']
        .map((ident) => [ident, this.boolYesNo(this[ident])])
        .flat()
        .join('_')
    }
  },
  methods: {
    boolYesNo(boolean) {
      return boolean ? 'yes' : 'no'
    }
  }
}
</script>
