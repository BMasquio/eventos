/**
 * Imports
 */
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Vuex
 */
Vue.use(Vuex)

/**
 * Global state
 */
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

/**
 * Modules
 */
import gate from './modules/gate'
import events from './modules/events'
import categories from './modules/categories'
import subEvents from './modules/subEvents'
import people from './modules/people'
import roles from './modules/roles'
import institutions from './modules/institutions'
import environment from './modules/environment'

/**
 * State
 */
const state = {
    mounted: false,
}

/**
 * Store
 */
let store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules: {
        events,
        subEvents,
        people,
        categories,
        environment,
        gate,
        roles,
        institutions,
    },
})

store.dispatch('environment/absorbLaravel')

export default store
