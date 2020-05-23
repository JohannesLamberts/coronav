<template>
  <nuxt-link v-bind="$props" :to="toWithQuery">
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
    toWithQuery() {
      return this.Navigation.toWithContext(this.to)
    }
  }
}
</script>
