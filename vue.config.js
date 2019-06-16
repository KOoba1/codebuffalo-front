module.exports = {

    "productionSourceMap": false,
    "outputDir": "../server/public/",
    "devServer": {
      "proxy": {
        "/api": {
          "target": "http://127.0.0.1:8080"
        }
      }
    }

}