const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = (env, argv) => {
  const config = defaultConfig(env, argv);

  // WP Scripts marks react/jsx-runtime as an external, but the WordPress
  // global `ReactJSXRuntime` is not defined in older WP installs.  Remove
  // the external so the runtime is bundled along with our code.  This
  // prevents `Cannot read properties of undefined (reading 'jsx')` errors.
  if (config && config.externals) {
    // Delete specific key if present
    delete config.externals['react/jsx-runtime'];
  }

  return config;
};
