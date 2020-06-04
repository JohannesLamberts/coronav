import Vue from 'vue'
import VueStates from '@sum.cumo/vue-states'
import Partner from '@/models/partner'
import Navigation from '@/models/navigation'

// nuxt executes the vue-states package every time this file is loaded
// caused by the "." in the module path (@sum.cumo)
if (!Vue.VueStatesInstalled) {
  Vue.VueStatesInstalled = true
  Vue.use(VueStates, {
    globalModels: {
      Partner,
      Navigation
    }
  })
}
