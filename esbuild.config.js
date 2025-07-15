// esbuild.config.js
const esbuild = require('esbuild');

// Minified build
esbuild.build({
  entryPoints: ['app.jsx'],
  bundle: true,
  minify: true, 
  outfile: 'dist/smiles-drawer.min.js',
  sourcemap: true,
  target: 'es2017'
}).catch(() => process.exit(1));

// Non-minified build
esbuild.build({
  entryPoints: ['app.jsx'],
  bundle: true,
  minify: false,
  outfile: 'dist/smiles-drawer.js',
  sourcemap: false,
  target: 'es2017'
}).catch(() => process.exit(1));
