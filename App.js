{{  
  // console.log(__filename);
  const os = require('os');
  const path = require('path');
  const http = require('http');
  const {readFile,writeFile} = require('fs');
  const {names} = require('./First-module');
  console.log(names);

  function valueSize(amount){
    amount < 12 
    ? console.log('Small Number') 
    : amount > 12 
      ? console.log('Large Number')
      : amount === 12 
        ? console.log('Number is 12')
        : console.log('Unexpected number');
  }
  valueSize(30);

  function displayNames(names){
    for(let name of names){
      console.log(name);
    }
  }
  displayNames(names);

  // ---------------------------------------------------------------------------------------------------------------------
  // ---  OS ---
  const user = os.userInfo();
  // Info on current user
  console.log(user);
  // system uptime in seconds
  console.log(`The system upTime is ${os.uptime()} seconds`);

  const currentOs = {
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    freeMemory: os.freemem()
  }
  console.log(currentOs);
  // -----------------------------------------------------------------------------------------------------------------------


  // ---------------------------------------------------------------------------------------------------------------------
  // ---  PATH ---
  console.log(path.sep);
  const filePath = path.join('/test','/sub-folder','test.txt');
  console.log(filePath);
  console.log(path.basename(filePath));
  console.log(path.resolve(__dirname,'test','sub-folder','test.txt'));
  
  // ---------------------------------------------------------------------------------------------------------------------

  
  // ---------------------------------------------------------------------------------------------------------------------
  // ---  FILE SYSTEM(fs) ---
  /*
  const first = readFileSync('./test/first.txt','utf8');
  const second = readFileSync('./test/sub-folder/text.txt','utf8');
  console.log(first);
  console.log(second);
  writeFileSync('./test/test_information.txt',`This is to inform you that the result of 
  first is: ${first} and 
  second is: ${second}`);
  writeFileSync('./test/test_information.txt',`\nAppended`,{flag: 'a'});
  */
  console.log('start');
  readFile('./test/first.txt','utf8',function(err,result){
    err 
    ? console.log(err) 
    : writeFile('./test/first_async.txt',`Async fs: ${result}`,function(err,result){
      err 
        ? console.log(err) 
        : console.log('Done with this task');
    });
  });
  console.log('Starting Next task');
  
  // ------

  // ---------------------------------------------------------------------------------------------------------------------
  // ---  http ---
  const server = http.createServer(function(req,res){
    req.url === '/' 
      ? res.end('Welcome to our HomePage')
      :req.url === '/about'
      ? res.end('This is our short History')
      : res.end(`<h1>Error We can't seem to find the page you are looking for</h1>

        <a href="/">Back Home</a>`)
    console.log(req);
    res.write('This is our homepage');
    res.end();
  });
  server.listen(49156);
  // ---------------------------------------------------------------------------------------------------------------
}}