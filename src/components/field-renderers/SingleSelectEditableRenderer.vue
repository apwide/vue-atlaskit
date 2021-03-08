<template>
    <InlineEdit v-if="editable"
                :value="value"
                :confirm="confirm"
                :icon="icon"
                @save-requested="onSaveRequested">
        <Select slot="editor" slot-scope="props"
                :value="props.value"
                :options="allowedValues"
                :is-invalid="props.isInvalid"
                :is-focused="props.isFocused"
                :is-loading="props.isLoading"
                :placeholder="placeholder"
                :append-to-body="appendToBody"
                :normalizer="normalizer"
                :is-clearable="isClearable"
                :filter-predicate="filterPredicate"
                :fixed-select-width="fixedSelectWidth"
                @input="props.input;$emit('input',$event)"
                @search-change="$emit('search-change',$event)"
                @blur="props.blur($event);$emit('blur', $event)"
                @confirm="props.confirm"
                @focus="props.focus"
                @cancel="props.cancel">
            <template v-slot:option="{option, isCurrent}">
                <slot name="option" :option="option" :isCurrent="isCurrent"/>
            </template>
            <template v-slot:custom-action>
                <slot name="custom-action"/>
            </template>
        </Select>
        <slot>
            <StringLineRenderer :value="value"/>
        </slot>
    </InlineEdit>
    <StringLineRenderer v-else :value="value"/>
</template>

<script>
    import Select from '../Select/Select';
    import StringLineRenderer from './StringLineRenderer';
    import InlineEdit from '../Form/InlineEdit';

    export default {
        name: 'SingleSelectEditableRenderer',
        components: {
            Select,
            StringLineRenderer,
            InlineEdit
        },
        props: {
            editable: {
                type: Boolean,
                default: true
            },
            value: {
                type: String,
                default: ''
            },
            allowedValues: {
                type: Array,
                default: () => []
            },
            placeholder: {
                type: String,
                default: ''
            },
            appendToBody: {
                type: Boolean,
                default: false
            },
            confirm: {
                type: Boolean,
                default: true
            },
            normalizer: {
                type: Function,
                default: null
            },
            icon: {
                type: Boolean,
                default: true
            },
            isClearable: {
                type: Boolean
            },
            filterPredicate: {
                type: Function
            },
            fixedSelectWidth: {
                type: String
            }
        },
        methods: {
            onSaveRequested(option, callback) {
                const value = option || '';
                this.$emit('save-requested', value, callback);
            }
        }
    };
</script>
