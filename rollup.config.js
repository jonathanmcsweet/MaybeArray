import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
  entry: 'src/main.js',
  plugins: [
    babel(babelrc())
  ],
  external,
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'MaybeArray',
      sourceMap: true
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true
    }
  ]
};
