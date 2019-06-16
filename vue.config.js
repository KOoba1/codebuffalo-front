module.exports = {

    "productionSourceMap": false,
    "outputDir": "dist/",
    "devServer": {
      "proxy": {
        "/team1": {
          "target": "http://127.0.0.1:8080"
        }
      }
    }, 
  
     pwa: {
    name: 'Referazon',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin

    workboxPluginMode:'GenerateSW',
    workboxOptions : {
      skipWaiting: true,
      clientsClaim: true,
      
    }
    // workboxPluginMode: 'InjectManifest',
      
    // workboxOptions: {
      
    //   swSrc: 'src/service-worker.js'
    //   // ...other Workbox options...
    // }
  }

  // ...other vue-cli plugin options...
  // pwa: {
  //   name: 'Goodboy',
  //   themeColor: '#4DBA87',
  //   msTileColor: '#000000',
  //   appleMobileWebAppCapable: 'yes',
  //   appleMobileWebAppStatusBarStyle: 'black',

  //   // configure the workbox plugin
  //   workboxPluginMode: 'InjectManifest',
  //   workboxOptions: {
  //     // swSrc is required in InjectManifest mode.
  //     swSrc: 'src/service-worker.js',
  //     // ...other Workbox options...
  //   }
  // }

  //https://github.com/vuejs/vue-cli/issues/2945   //this is supposed to help forcing the app to get updates
  //workboxOptions: { skipWaiting: true }
}