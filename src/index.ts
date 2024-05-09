import type {ConfigNames, OptionsConfig, TypedFlatConfigItem} from '@antfu/eslint-config'
import type {FlatConfigComposer} from 'eslint-flat-config-utils'

import antfu, {GLOB_VUE} from '@antfu/eslint-config'

const ahConfig: OptionsConfig & TypedFlatConfigItem = {
    stylistic: {
        indent: 4,
        quotes: 'single',
        semi: false,
    },
    ignores: [
        'dist',
        'node_modules',
        'public',
    ],

    unocss: false,
    vue: false,
}

const ahRules: TypedFlatConfigItem[] = [
    {
        files: [GLOB_VUE],
        name: 'ah:vue',
        rules: {
            'vue/max-attributes-per-line': ['error', {
                multiline: {
                    max: 1,
                },
            }],
        },
    },
    {
        name: 'ah:src',
        rules: {
            'perfectionist/sort-imports': ['error', {
                groups: [
                    'type',
                    ['builtin', 'external'],
                    'internal-type',
                    'internal',
                    ['parent-type', 'sibling-type', 'index-type'],
                    ['parent', 'sibling', 'index'],
                    'object',
                    'unknown',
                ],
            }],
            'import/order': 'off',

            'style/array-bracket-newline': ['error', 'consistent'],
            'style/array-bracket-spacing': ['error', 'never'],
            'style/array-element-newline': ['error', {
                ArrayExpression: 'consistent',
                ArrayPattern: {minItems: 3},
            }],
            'style/object-curly-newline': ['error', {
                consistent: true,
            }],
            'style/object-curly-spacing': ['error', 'never'],
            'style/block-spacing': ['error', 'never'],
            'style/brace-style': ['error', 'stroustrup'],
            'style/comma-dangle': ['error', 'always-multiline'],
            'style/eol-last': ['error', 'always'],
            'style/key-spacing': ['error', {beforeColon: false}],
            'style/no-tabs': 'error',
            'style/no-trailing-spaces': 'error',
            'style/function-call-spacing': ['error', 'never'],
            'style/padding-line-between-statements': ['error', {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            }],

            'no-console': ['warn', {allow: ['warn', 'error']}],
            'max-len': ['warn', {
                code: 160,
                ignoreUrls: true,
                ignorePattern: '^import .*',
            }],
            'curly': ['error', 'all'],

            'guard-for-in': 'error',
            'unused-imports/no-unused-vars': 'warn',

            'yaml/indent': ['error', 2],
            'jsonc/indent': ['error', 2],
        },
    },
]

export default function (...params: Parameters<typeof antfu>): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> {
    if (params.length === 0) {
        return antfu(ahConfig, ahRules)
    }

    const [config, ...restParams] = params

    return antfu({...ahConfig, ...config}, ahRules, ...restParams)
}
