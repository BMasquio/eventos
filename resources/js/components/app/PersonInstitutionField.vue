<template>
    <div>
        <app-select
            name="institution_id"
            label="Instituição"
            v-model="form.fields.institution_id"
            :required="true"
            :form="form"
            :options="environment.tables.institutions"
            dusk="select-institution"
            labelAttribute="composite_name"
        ></app-select>

        <app-select
            name="role_id"
            label="Funções"
            v-model="form.fields.role_id"
            :required="true"
            :form="form"
            :options="environment.tables.roles"
            dusk="select-function"
        ></app-select>

        <app-input
            name="title"
            label="Tratamento"
            v-model="form.fields.title"
            :required="true"
            :form="form"
            dusk="title-name"
        ></app-input>

        <app-textarea
            label="Observações"
            v-model="form.fields.notes"
            name="notes"
            :form="form"
            :rows="15"
        ></app-textarea>

        <app-input
            name="is_active"
            label="Ativo"
            v-model="form.fields.is_active"
            type="checkbox"
            :required="true"
            :form="form"
            dusk="active-check"
        ></app-input>
    </div>
</template>

<script>
export default {
    props: ['form', 'environment'],
}
</script>
