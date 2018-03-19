const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireLess.withLoaderOptions({
        modifyVars: {
            '@primary-color': 'rgba(0, 0, 0, 0.65)',
            'border-radius-base': '4px',
            'border-radius-sm': '2px',
        },
    })(config, env);
    return config;
};