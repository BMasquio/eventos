import Form from '../../classes/Form'

import * as mutationsMixin from './mixins/mutations.js'
import * as actionsMixin from './mixins/actions.js'
import * as statesMixin from './mixins/states.js'
import * as gettersMixin from './mixins/getters.js'

const __emptyModel = {
    settings: {
        signature: null,
        mail_from_name: null,
        mail_from_email: null,
    },
}

let state = merge_objects(
    {
        form: new Form(clone(__emptyModel)),

        emptyForm: clone(__emptyModel),

        model: {
            name: 'clients',

            table: 'clients',

            class: { singular: 'Client', plural: 'Clients' },
        },
    },

    statesMixin.common,
)

let actions = merge_objects(actionsMixin, {
    setDataAfterLoad(context, payload) {
        payload.filter.text = context.state.data.filter.text

        context.commit('mutateSetData', payload)

        dd(payload)
        context.commit('mutateSetFormField', {
            field: 'settings',
            value: payload.rows[0].settings,
        })
    },
})

let mutations = mutationsMixin
let getters = gettersMixin

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced: true,
}
