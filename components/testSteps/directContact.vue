<template>
  <div>
    <p>{{ $t('test.steps.directContact.info') }}</p>
    <ul>
      <li
        v-for="contactType of $t('test.steps.directContact.infoList')"
        :key="contactType"
      >
        {{ contactType }}
      </li>
    </ul>
  </div>
</template>
