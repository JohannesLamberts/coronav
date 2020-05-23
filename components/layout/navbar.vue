<template>
  <b-navbar :class="$style.navbar" toggleable="md">
    <b-navbar-brand
      tabindex="-1"
      tag="h1"
      :class="$style.navbarBrand"
      :to="localePath('/')"
      :title="$t('index.logoTitle')"
    >
      <img
        src="@/assets/images/logo_coronav.png"
        alt="CoroNav Logo"
        :class="$style.logo"
      />
    </b-navbar-brand>
    <b-navbar-toggle
      target="nav-collapse"
      :class="$style.navbarToggle"
      :variant="'primary'"
      :label="$t('components.navbar.toggleNavbarLabel')"
    />
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav :class="$style.navbarNav">
        <b-nav-item
          v-for="locale in $i18n.locales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          :class="$style.navItem"
        >
          <img
            :class="$style.localeIcons"
            :src="localeIcons[locale.code]"
            :alt="locale.name"
          />
          {{ locale.name }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    localeIcons() {
      return this.$i18n.locales.reduce((acc, { code }) => {
        acc[code] = require(`@/assets/images/icon-${code}.png`)
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss" module>
$logo-width: 180px;

.navbar {
  display: grid;
  grid-template-columns: $logo-width auto 3.5rem [toggle-end];
  width: 100%;
  padding: 0;

  li {
    list-style: none;
  }

  .navbarToggle {
    grid-column-end: toggle-end;
    border-color: transparent;
    padding: 0;
  }
}

.navbarBrand {
  padding: 0;
  font-size: inherit;
}

.navbarNav {
  width: 100%;
  justify-content: flex-end;
}

.localeIcons {
  width: 1.5rem;
  height: 1.5rem;
  top: -2px;
  position: relative;
}

.logo {
  width: $logo-width;
}

@media (min-width: 768px) {
  .navbar {
    grid-template-columns: $logo-width 1fr;
  }
}
</style>
