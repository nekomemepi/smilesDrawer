// esbuild.config.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['app.jsx'],
  bundle: true,
  minify: true, 
  outfile: 'dist/bundle.min.js',
  sourcemap: true,
  target: 'es2017'
}).catch(() => process.exit(1));
