//Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import scss from 'rollup-plugin-scss';

export default {
  entry: 'src/scripts/main.js',
  dest: 'build/js/main.min.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    scss({
      input: 'src/styles/**',
      output: true,
      output: 'build/css/styles.css'
    }),
    eslint({
      exclude: [
        'src/styles/**'
      ]
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    (process.env.NODE_ENV === 'production' && uglify())
  ]
};
