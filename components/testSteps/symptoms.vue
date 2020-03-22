<template>
  <ul>
    <li v-for="symptom of $t('test.steps.symptoms.list')" :key="symptom">
      {{ symptom }}
    </li>
  </ul>
</template>
