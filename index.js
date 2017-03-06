var bodyParser = require('body-parser'),
  path = require('path'),
  api = require('./api');

hexo.extend.filter.register('server_middleware', function(app) {

  app.use(hexo.config.root + 'admin/api/', bodyParser.json({limit: '50mb'}));
  app.use(hexo.config.root + 'admin/ping', function(req, res){
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({
      data: 'hi'
    }))
  })
  api(app, hexo);
});
