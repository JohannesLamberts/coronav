<template>
  <nuxt-link v-bind="$props" :to="toWithContext">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'PassedQueryLink',
  injectModels: ['Navigation'],
  props: {
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    toWithContext() {
      return this.Navigation.toWithContext(this.to)
    }
  }
}
</script>
