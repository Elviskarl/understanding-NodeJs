{{
  const _ = require('lodash');
  const http = require('http');
  const {readFile} = require('fs');
  console.log('Hello');
  console.log('My people');

  const items = [[1],[2],[3],[4]];
  const newItems = _.flattenDeep(items);
  console.log(newItems);

  readFile('./test/sub-folder/text.txt','utf8',function(err,result){
    err ? 
      console.log(err)
      :console.log(result);
  });
  console.log('Starting next task');
  const server = http.createServer(function(req,res){
    req.url === '/' ? 
      res.end('Home page')
      :req.url === '/about'
      ?res.end('About page')
      :res.end('Error')
  })
  server.listen(47900,function(){
    console.log('Server listening on port 47900');
  })
}}