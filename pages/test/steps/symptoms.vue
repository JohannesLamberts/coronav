<template>
  <div>
    <p>{{ $t('test.steps.symptoms.label') }}</p>
    <ul>
      <li v-for="symptom of $t('test.steps.symptoms.list')" :key="symptom">
        {{ symptom }}
      </li>
    </ul>
  </div>
</template>
