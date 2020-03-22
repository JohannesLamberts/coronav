<template>
  <div>
    <h2>{{ $t('components.riskAreas.title') }}</h2>
    <ul>
      <li v-for="(country, index) of riskAreasCountries" :key="index">
        <strong>{{ country.name }}:</strong> {{ country.riskArea }}
      </li>
    </ul>
    <h2>{{ $t('components.riskAreas.germany.title') }}</h2>
    <ul>
      <li v-for="(area, index) of riskAreasGermany" :key="index">
        {{ area.name }}
      </li>
    </ul>
  </div>
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
