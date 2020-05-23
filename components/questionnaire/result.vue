<template>
  <div class="text-align-locale">
    <h2 ref="heading" tabindex="-1" class="h5 mb-3">
      {{ $t('results.headline') }}
    </h2>
    <div>
      <b-alert show class="my-4">
        <span v-html="responseText.info && $md.render(responseText.info)" />
      </b-alert>
      <b-btn
        v-if="appContext.partner"
        color="primary"
        rel="noopener noreferrer"
        :href="
          `${appContext.partner.resultCallbackUrl}?locale=${this.$i18n.locale}&result=${responseConfig.ident}`
        "
      >
        Zurück zu {{ appContext.partner.name }}
      </b-btn>
      <p>{{ $t('results.todosLabel') }}</p>
      <ul>
        <li
          v-for="text of responseText.todos"
          :key="text"
          v-html="text && $md.render(text)"
        />
      </ul>
      <div v-if="responseConfig.showHotlineSearch">
        <hotline-search />
      </div>
      <div v-if="$t('results.feedback.showFeedback') === 'true'">
        <h4 class="h5">{{ $t('results.feedback.label') }}</h4>
        <p>
          {{ $t('results.feedback.info') }}
          <a
            href="https://simonmessmer951.typeform.com/to/LlNR9N"
            target="_blank"
            :title="$t('results.feedback.linkTitle')"
          >
            {{ $t('results.feedback.linkText') }}
          </a>
        </p>
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
  inject: ['appContext'],
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
