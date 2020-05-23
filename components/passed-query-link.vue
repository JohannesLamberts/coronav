<template>
  <nuxt-link v-bind="$props" :to="toWithQuery">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'PassedQueryLink',
  inject: ['appContext'],
  props: {
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    toWithQuery() {
      return this.appContext.routeWithPassedQuery(this.to)
    }
  }
}
</script>
