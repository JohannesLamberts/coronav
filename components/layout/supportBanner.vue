<template>
  <section :class="[$style.supporter]">
    <strong>{{ $t('components.support.title') }}</strong>
    <div :class="$style.footerImages">
      <a
        href="https://wirvsvirus.org/projekte/"
        :title="$t('components.support.wirVsVirusLink')"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src="@/assets/images/wirvsvirus_logo_1.svg"
          :alt="$t('components.support.wirVsVirusImage')"
          :title="$t('components.support.wirVsVirusImage')"
        />
      </a>
      <a
        href="https://lebenshilfe-bremen.de/"
        title="Lebenshilfe Bremen"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src="@/assets/images/logo_lebenshilfe_bremen_leichte_sprache.png"
          alt="Lebenshilfe Bremen"
        />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SupportBanner'
}
</script>

<style lang="scss" module>
.supporter {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 1rem 0;
  margin-top: 1rem;
}

.footerImages {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  img {
    width: 350px;
    max-width: 100%;
    padding: 0.5rem 0.5rem;
  }
}

// desktop screens
@media (min-width: 768px) {
  .footerImages {
    flex-direction: row;
  }
}
</style>
