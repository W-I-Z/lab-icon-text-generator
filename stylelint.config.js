module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
    rules: {
        "indentation": 4,
        'selector-pseudo-element-colon-notation': 'single',
        'no-descending-specificity': null,
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'extends',
                    'apply',
                    'tailwind',
                    'components',
                    'utilities',
                    'variants',
                    'responsive',
                    'screen',
                ],
            },
        ],
    },
}
