module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @use "@/styles/colors"
        @use "@/styles/utils"
        `
      },
    }
  }
};
