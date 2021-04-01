module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @use "@/styles/settings/_colors"
        @use "@/styles/settings/_functions"
        @use "@/styles/settings/_variables"
        `
      },
    }
  }
};
