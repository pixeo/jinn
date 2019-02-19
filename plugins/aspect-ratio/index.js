const _ = require('lodash');

function defaultRatios() {
    return {
        '16/9': [16, 9],
    };
}

module.exports = function({ ratios, variants }) {
    ratios = _.defaults(ratios, defaultRatios());

    return function({ addUtilities, e }) {
        const utilities = _.map(ratios, ([width, height], name) => ({
            [`.${e(`aspect-ratio-${name}`)}`]: {
                paddingTop: `${((Math.round(height) / Math.round(width)) * 100).toFixed(2)}%`
            }
        }));

        addUtilities(utilities, variants);
    }
}