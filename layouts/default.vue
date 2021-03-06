<template>
  <div :class="$style.wrapper">
    <header :class="$style.header">
      <navbar />
    </header>
    <main :class="[$style.content, $style.main]">
      <nuxt />
    </main>
    <footer :class="$style.footer">
      <passed-query-link to="/impressum">{{
        $t('impressum.title')
      }}</passed-query-link>
      <passed-query-link to="/datenschutz">{{
        $t('privacy.title')
      }}</passed-query-link>
    </footer>
  </div>
</template>

<script>
import Navbar from '../components/layout/navbar'
import PassedQueryLink from '@/components/passed-query-link'

export default {
  components: { PassedQueryLink, Navbar },
  injectModels: ['Partner'],
  mounted() {
    // do not use query data until completely mounted
    // to avoid SSR errors
    this.Partner.activate()
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const localeConfig = this.$i18n.locales.find(
      ({ code }) => this.$i18n.locale === code
    )
    return {
      ...i18nSeo,
      htmlAttrs: {
        dir: localeConfig.dir || 'LTR',
        ...i18nSeo.htmlAttrs
      },
      meta: [
        ...i18nSeo.meta,
        {
          content: this.$t('meta.description'),
          hid: 'description',
          name: 'description',
          property: 'description'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
}

.main {
  margin: 0 auto;
  width: 100vw;
  max-width: 40em;
  padding: 0 20px 20px 20px;
}

.content {
  flex-grow: 1;
}

.footer {
  padding: 1rem;
  background-color: #0a558c;
  text-align: center;
  a {
    color: white;
    font-size: 0.8rem;
  }
}

.wrapper {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
}

// mobile screens
@media (max-width: 767px) {
  .header {
    margin: 0.5rem 0;
  }
}

// desktop screens
@media (min-width: 768px) {
  .header {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem 2rem;
  }

  .main {
    width: 60vw;
  }
}
</style>

<style>
@import 'assets/styles/base.scss';
</style>
