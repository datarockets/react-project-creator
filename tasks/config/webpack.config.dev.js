const Patcher                = require('./patcher');
const generalConfig          = require('react-scripts/config/webpack.config.dev');
const path                   = require('path');
const autoprefixer           = require('autoprefixer');
const postcssImport          = require('postcss-import');
const postcssNested          = require('postcss-nested');
const postcssCssVariables    = require('postcss-css-variables');
const postcssMixins          = require('postcss-mixins');
const postcssClearfix        = require('postcss-clearfix');
const postcssCalc            = require('postcss-calc');
const postcssObjectFitImages = require('postcss-object-fit-images');
const postcssHexRgba         = require('postcss-hexrgba');

module.exports = new Patcher(generalConfig)
  .patch((config) => {
    config.resolve = Object.assign(config.resolve, {
      alias: {
        src: path.resolve(process.cwd(), 'src'),
      },
    });
  })
  .patch((config) => {
    config.postcss = function () {
      return [
        autoprefixer({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
          ],
        }),
        postcssImport({
          path: path.resolve(process.cwd(), 'src'),
        }),
        postcssMixins(),
        postcssNested(),
        postcssCssVariables(),
        postcssClearfix(),
        postcssCalc(),
        postcssObjectFitImages(),
        postcssHexRgba(),
      ];
    };
  })
  .patchCssLoader((handler) => {
    handler.loader = 'style!css?importLoaders=1&module&localIdentName=[local]--[hash:base64:5]!postcss';
    handler.include = [
      path.resolve(process.cwd(), 'src'),
    ];
  })
  .patch((config) => {
    let index = 0;
    for (; index < config.module.loaders.length; index += 1) {
      if (Patcher.isCssLoader(config.module.loaders[index])) {
        break;
      }
    }

    config.module.loaders.splice(index, 0, {
      test: /\.css$/,
      loader: 'style!css?importLoaders=1!postcss',
      exclude: [
        path.resolve(process.cwd(), 'src'),
      ],
    });
  })
  .config;
