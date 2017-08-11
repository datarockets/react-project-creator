class Patcher {
  static isCssLoader(handler) {
    return handler.test && handler.test.toString().indexOf('\\.css') > -1;
  }

  constructor(config) {
    this.config = config;
    return this;
  }

  patch(patch) {
    patch(this.config);

    return this;
  }

  patchLoader(test, patch) {
    this.config.module.loaders.forEach((handler) => {
      if (test(handler)) {
        patch(handler);
      }
    });

    return this;
  }

  patchCssLoader(patch) {
    return this.patchLoader(Patcher.isCssLoader, patch);
  }
}

module.exports = Patcher;
