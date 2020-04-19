<template>
  <footer :class="$style.footer">
    <p>
      <nuxt-link
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        >{{ locale.name }}</nuxt-link
      >
    </p>
    <p>
      <nuxt-link to="/impressum">{{ $t('impressum.title') }}</nuxt-link>
    </p>
  </footer>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )
    }
  }
}
</script>

<style lang="scss" module>
.footer {
  background-color: #0a558c;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.3rem;
  a {
    color: white;
    font-size: 0.8rem;
    margin: 0 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
    text-align: center;
  }
}
</style>
