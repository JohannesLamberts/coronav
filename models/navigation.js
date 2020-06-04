export default {
  injectModels: ['Partner'],
  methods: {
    toWithContext(to) {
      const { normalizedTo } = this.$router.resolve(to)
      return {
        ...normalizedTo,
        query: {
          ...this.Partner.navigationQueryContext,
          ...normalizedTo.query
        }
      }
    }
  }
}
