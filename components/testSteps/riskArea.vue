<template>
  <ul>
    <li>
      <strong>{{ $t('components.riskAreas.title') }}</strong>
      <ul>
        <li v-for="(country, index) of riskAreasCountries" :key="index">
          <strong>{{ country.name }}:</strong> {{ country.riskArea }}
        </li>
      </ul>
    </li>
    <li>
      <strong>{{ $t('components.riskAreas.germany.title') }}</strong>
      <ul>
        <li v-for="(area, index) of riskAreasGermany" :key="index">
          {{ area.name }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RiskAreas',
  data() {
    return {}
  },
  computed: {
    riskAreasCountries() {
      return this.$t('components.riskAreas.countries')
    },
    riskAreasGermany() {
      return this.$t('components.riskAreas.germany.areas')
    }
  }
}
</script>
