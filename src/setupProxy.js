const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
        pathRewrite:{"^/api":""},
        target: 'http://lookup-app.teflon.order-services.cp.prod.walmart.com',
      changeOrigin: true,
    })
  );
};