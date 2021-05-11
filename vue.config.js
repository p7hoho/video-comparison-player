module.exports = {
    configureWebpack: {
      devtool: 'source-map'
    },
    pluginOptions: {
      electronBuilder: {
        builderOptions: {
          mac: {
            icon: './src/icon/icon.icns'
          },
          win: {
            icon: './src/icon/icon.png',
            target: 'nsis'
          },
          nsis:{//https://www.electron.build/generated/nsisoptions
            oneClick: false,
            allowToChangeInstallationDirectory: true,
            createDesktopShortcut: true
          }
        }
      }
    }
  }