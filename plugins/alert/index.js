const _ = require('lodash');
const defaultConfig = require('tailwindcss/defaultConfig')();

function defaultOptions() {
  return {
    display: 'flex',
    borderRadius: '.25rem',
    padding: '0.75rem 1rem',
    colors: {
      white: {
        background: defaultConfig.colors['white'],
        text: defaultConfig.colors['black'],
      },
      black: {
        background: defaultConfig.colors['black'],
        text: defaultConfig.colors['white'],
      },
      grey: {
        background: defaultConfig.colors['grey'],
        text: defaultConfig.colors['black'],
      },
      red: {
        background: defaultConfig.colors['red'],
        text: defaultConfig.colors['white'],
      },
      orange: {
        background: defaultConfig.colors['orange'],
        text: defaultConfig.colors['white'],
      },
      yellow: {
        background: defaultConfig.colors['yellow'],
        text: defaultConfig.colors['yellow-darkest'],
      },
      green: {
        background: defaultConfig.colors['green'],
        text: defaultConfig.colors['white'],
      },
      teal: {
        background: defaultConfig.colors['teal'],
        text: defaultConfig.colors['white'],
      },
      blue: {
        background: defaultConfig.colors['blue'],
        text: defaultConfig.colors['white'],
      },
      indigo: {
        background: defaultConfig.colors['indigo'],
        text: defaultConfig.colors['white'],
      },
      purple: {
        background: defaultConfig.colors['purple'],
        text: defaultConfig.colors['white'],
      },
      pink: {
        background: defaultConfig.colors['pink'],
        text: defaultConfig.colors['white'],
      },
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
        '.alert': {
          display: options.display,
          padding: options.padding,
          borderRadius: options.borderRadius
        }
      },
      ..._.map(options.colors, (colorOptions, name) => {
        return {
          [`.alert-${e(name)}`]: {
            backgroundColor: colorOptions.background,
            color: colorOptions.text
          }
        }
      })
    ]);
  }
}