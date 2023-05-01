const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/covid19/v3',
        createProxyMiddleware({
            target: 'https://covid-api.mmediagroup.fr',
            changeOrigin: true,
        })
    );
};
