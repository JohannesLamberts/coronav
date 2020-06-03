import { PARTNER_LIST, PARTNER_QUERY_PARAM } from '@/config/partners'

export default {
  data() {
    return {
      active: false
    }
  },
  methods: {
    activate() {
      this.active = true
    },
    partnerById(id) {
      const partner = PARTNER_LIST.find((partner) => partner.id === id)
      if (!partner) {
        console.error(`No partner found for id '${id}'`)
      }
      return partner
    }
  },
  computed: {
    config() {
      if (!this.active) {
        return
      }
      const partnerId = this.$route.query[PARTNER_QUERY_PARAM]
      if (!partnerId) {
        return null
      }
      return this.partnerById(partnerId)
    },
    navigationQueryContext() {
      const { config } = this
      if (!config) {
        return
      }
      return {
        [PARTNER_QUERY_PARAM]: config.id
      }
    },
    callback() {
      if (!this.config) {
        throw new Error('No partner active')
      }
      return this.config.url
    }
  }
}
