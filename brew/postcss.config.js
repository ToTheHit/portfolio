
module.exports = ({ file, options, env }) => ({
    // parser: file.extname === '.css' ? 'sugarss' : false,
    plugins: {
        'postcss-import': {},
        'postcss-preset-env': {},
        'cssnano': {},
    },
    exec: true
});
