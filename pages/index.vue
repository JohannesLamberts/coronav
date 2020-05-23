<template>
  <div :class="$style.container">
    <div>
      <h1 ref="mainHeading" :class="$style.title" tabindex="-1">
        {{ $t('index.title') }}
      </h1>
      <span
        :class="$style.textContent"
        v-html="$md.render($t('index.description'))"
      />
      <b-button
        variant="outline-primary"
        pill
        block
        size="lg"
        :class="$style.button"
        :to="
          appContext.routeWithPassedQuery(
            localePath('questionaires-should-i-get-testet-for-covid-19')
          )
        "
      >
        {{ $t('index.cta') }}
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  inject: ['appContext'],
  mounted() {
    this.focusMainHeading()
  },
  methods: {
    focusMainHeading() {
      this.$refs.mainHeading.focus()
    }
  }
}
</script>

<style lang="scss" module>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.textContent {
  margin-bottom: 2rem;
}

.button {
  max-width: 10em;
  margin: 0 auto;
}

.title {
  margin-bottom: 2rem;
}
</style>
