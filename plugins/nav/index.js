const _ = require('lodash');
const defaultConfig = require('tailwindcss/defaultConfig')();

function defaultOptions() {
  return {
    nav: {
      padding: '0',
    },
    navLink: {
      padding: '0',
    },
    navItem: {
      padding: '0 1rem',
    },
    navToggler: {
      padding: '1rem',
      borderRadius: '.25rem',
    },
  }
}

module.exports = function (options) {
  options = _.isFunction(options)
    ? options(defaultOptions())
    : _.defaults(options, defaultOptions());

  return function ({ addComponents, e }) {
    addComponents([
      {
        '.nav': {
          display: 'flex',
          listStyle: 'none',
          padding: options.nav.padding,
          '& .nav-item': {
              padding: options.navItem.padding,

            '& .nav-link': {
              padding: options.navLink.padding,
            }
          }
        },
        '.nav-toggler': {
          display: 'flex',
          alignItems: 'center',
          padding: options.navToggler.padding,
          borderRadius: options.navToggler.borderRadius
        }
      },
    ]);
  }
}