module.exports = {
  env: {
    test: {
      presets: ['next/babel']
    }
  },
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react'
        }
      }
    ]
  ],
  plugins: ['@emotion/babel-plugin', 'babel-plugin-macros']
}
