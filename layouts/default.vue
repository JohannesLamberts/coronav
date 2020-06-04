<template>
  <div :class="$style.wrapper">
    <header :class="$style.header">
      <navbar />
    </header>
    <main :class="$style.content">
      <nuxt />
    </main>
    <section :class="$style.footerImages">
      <a
        href="https://wirvsvirus.org/projekte/"
        title="WirVsVirus Projekte"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src="@/assets/images/wirvsvirus_logo_1.svg"
          alt="WirVsVirus Projekt"
        />
      </a>
    </section>
    <footer :class="$style.footer">
      <nuxt-link to="/impressum">{{ $t('impressum.title') }}</nuxt-link>
      <nuxt-link to="/datenschutz">{{ $t('privacy.title') }}</nuxt-link>
    </footer>
  </div>
</template>

<script>
import Navbar from '../components/layout/navbar'
export default {
  components: { Navbar },
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

.content {
  margin: 0 auto;
  width: 100vw;
  max-width: 40em;
  padding: 0 20px 20px 20px;
  flex-grow: 1;
}

.footerImages {
  text-align: center;
  padding: 1rem 0;
  img {
    height: 100px;
    max-width: 100%;
  }
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

  .content {
    width: 60vw;
  }
}
</style>

<style>
@import 'assets/styles/base.scss';
</style>
