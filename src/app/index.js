if (
  // OTHERS
  'Symbol' in window &&
  'fetch' in window &&
  'IntersectionObserver' in window &&
  'CustomEvent' in window &&
  'customElements' in window &&
  // ARRAYS
  'entries' in Array.prototype &&
  'from' in Array &&
  'find' in Array.prototype &&
  'findIndex' in Array.prototype &&
  'includes' in Array.prototype &&
  'keys' in Array.prototype &&
  'values' in Array.prototype &&
  // OBJECTS
  'assign' in Object &&
  'entries' in Object &&
  'values' in Object &&
  // STRINGS
  'endsWith' in String.prototype &&
  'includes' in String.prototype &&
  'startsWith' in String.prototype
) {
  module.exports = require('./components');
} else {
  import(/* webpackChunkName: "polyfills" */ './polyfills').then(() => {
    module.exports = require('./components');
  });
}
