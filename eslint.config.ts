import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'ts/naming-convention': 'off',
  },
}, {
  rules: {
    'ts/naming-convention': 'error',
  },
  files: ['**/*.ts'], // other typescript files will use the default config
  ignores: ['eslint.config.ts'],
}, {
  rules: {
    'ts/naming-convention': [
      'error',
      {
        selector: [
          'property',
          'parameter',
          'variable',
        ],
        format: ['snake_case'],
      },
    ],
    // rule conflict with ts/naming-convention when using snake_case
    'unused-imports/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^unused_',
        destructuredArrayIgnorePattern: '^unused_',
      },
    ],
  },
  // add files that your need to transpile to lua here
  files: [
    'control.ts',
  ],
})
