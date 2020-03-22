<template>
  <ul>
    <li
      v-for="riskFactor of $t('test.steps.patientHistoryRisk.list')"
      :key="riskFactor"
    >
      {{ riskFactor }}
    </li>
  </ul>
</template>
