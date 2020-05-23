import Vue from 'vue'
import VueStates from '@sum.cumo/vue-states'
import Partner from '@/models/partner'
import Navigation from '@/models/navigation'

if (!Vue.VueStatesInstalled) {
  Vue.VueStatesInstalled = true
  Vue.use(VueStates, {
    globalModels: {
      Partner,
      Navigation
    }
  })
}
