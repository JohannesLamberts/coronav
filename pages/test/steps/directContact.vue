<template>
  <div>
    <p>{{ $t('test.steps.contact.label') }}</p>
    <p>{{ $t('test.steps.contact.info') }}</p>
    <ul>
      <li
        v-for="contactType of $t('test.steps.contact.infoList')"
        :key="contactType"
      >
        {{ contactType }}
      </li>
    </ul>
  </div>
</template>
