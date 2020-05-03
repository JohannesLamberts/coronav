<template>
  <div class="text-align-locale">
    <h2 ref="heading" tabindex="-1" class="h5 mb-3">
      {{ $t('results.headline') }}
    </h2>
    <div>
      <b-alert show class="my-4">
        <p>
          <strong>{{ responseText.label }}</strong>
        </p>
        <p v-if="responseConfig.showHotlineSearch">
          <em>{{ $t('results.searchInfo') }}</em>
        </p>
        <span v-html="$md.render(responseText.result)" />
      </b-alert>
      <p>{{ $t('results.todosLabel') }}</p>
      <ul>
        <li v-for="text of responseText.todos" :key="text">{{ text }}</li>
      </ul>
      <div v-if="responseConfig.showHotlineSearch">
        <hotline-search />
      </div>
      <h4 class="h5">
        {{ $t('results.additionalRessources.label') }}
      </h4>
      <ul>
        <li
          v-for="page of $t('results.additionalRessources.pages')"
          :key="page.url"
        >
          <a :href="page.url" target="_blank" rel="noreferrer noopener">
            {{ page.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HotlineSearch from '../hotline-search'

export default {
  name: 'QuestionnaireResult',
  components: { HotlineSearch },
  props: {
    responseConfig: {
      type: Object,
      required: true
    }
  },
  computed: {
    responseText() {
      return this.$t(`results.cases.${this.responseConfig.ident}`)
    }
  },
  mounted() {
    this.focusHeading()
  },
  methods: {
    focusHeading() {
      this.$refs.heading.focus()
    }
  }
}
</script>
