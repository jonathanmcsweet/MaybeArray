import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import nodeResolve from 'rollup-plugin-node-resolve';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
  entry: 'src/main.js',
  plugins: [
    babel(babelrc()),
    nodeResolve({jsnext: true, main: true })
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
      dest: pkg.module['jsnext:main'],
      format: 'es',
      sourceMap: true
    }
  ]
};
