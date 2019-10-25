// For the moment, all localhost and not prod conf

module.exports = {
  dev: {
    apollo: {
      url: 'http://localhost',
      port: 9090
    },
    http: {
      url: 'http://localhost',
      port: 9091
    },
  }
}