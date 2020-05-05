<template>
  <div>
    <div :class="$style.wrapper">
      <header :class="$style.header">
        <h1 class="h1" tabindex="-1">
          <nuxt-link :to="localePath('/')" :title="$t('index.logoTitle')">
            <img
              src="@/assets/images/logo_coronav.png"
              alt="CoroNav Logo"
              :class="$style.logo"
            />
          </nuxt-link>
        </h1>
      </header>
      <main :class="$style.content">
        <nuxt />
      </main>
    </div>
    <page-footer />
  </div>
</template>

<script>
import PageFooter from '@/components/pageFooter'
export default {
  components: { PageFooter },
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
      }
    }
  }
}
</script>

<style lang="scss" module>
.wrapper {
  display: grid;
  grid-template-rows: 90px 1fr;
  grid-gap: 16px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
}

.logo {
  width: 180px;
}

.content {
  margin: 0 auto;
  width: 100vw;
  max-width: 40em;
  padding: 0 20px;
  padding-bottom: 36px;
}

@media (min-width: 768px) {
  .wrapper {
    grid-template-rows: auto 1fr;
    grid-template-columns: 200px minmax(540px, 50em);
    padding: 12px;
  }
  .header {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 16px;
  }
  .logo {
    width: 100%;
  }
  .content {
    width: 60vw;
    grid-row: 2;
    grid-column: 2;
  }
}
</style>

<style>
@import 'assets/styles/base.scss';
</style>
