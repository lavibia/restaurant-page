const path =require('path');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
    watchOptions: {
        ignored: './node_modules',
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
      optimization: {
        minimizer: [
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.sharpMinify,
              options: {
                encodeOptions: {
                  jpeg: {
                    // https://sharp.pixelplumbing.com/api-output#jpeg
                    quality: 100,
                  },
                  webp: {
                    // https://sharp.pixelplumbing.com/api-output#webp
                    lossless: true,
                  },
                  avif: {
                    // https://sharp.pixelplumbing.com/api-output#avif
                    lossless: true,
                  },
    
                  // png by default sets the quality to 100%, which is same as lossless
                  // https://sharp.pixelplumbing.com/api-output#png
                  png: {},
    
                  // gif does not support lossless compression at all
                  // https://sharp.pixelplumbing.com/api-output#gif
                  gif: {},
                },
              },
            },
          }),
        ],
      },
};