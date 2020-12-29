module.exports = {
  excludeFile: (str) => /\*.{spec,test}.js/.test(str),

  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = { fs: 'empty' }
    }

    config.module.rules.push({
      test: /\.test.js$/,
      loader: 'ignore-loader'
    })

    return config
  }
}
