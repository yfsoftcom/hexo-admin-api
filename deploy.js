var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

module.exports = function (argument, done) {
  hexo.init()
    .then(function(){
      return hexo.call('clean', {})
    })
    .then(function(){
      return hexo.call('generate', {})
    })
    .then(function(data){
      done(null, 'ok');    
    })
}
