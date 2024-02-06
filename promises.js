{{
    const path = require('path');
    const {readFile,writeFile} = require('fs').promises;
    // const util = require('util');
    
    // const readFilePromise = util.promisify(readFile);
    // const writeFilePromise = util.promisify(writeFile);

//------------------------------------------------------------------------------------------------------------------
// --- Promises --- 
    function getText(path){
      return new Promise(function(resolve,reject){
        readFile(path,'utf8',function(err,data){
          data ?
            resolve(data)
            : reject(err);
        })
      })
    }
    getText('./test/first_async.txt')
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .finally(console.log('We are Done'));
// ---------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------
// --- Async await ---
      async function start(){
        try{
          const second = await readFile('./test/sub-folder/text.txt','utf8');
          const first = await readFile('./test/first_async.txt','utf8');

          console.log(first);
          console.log(second);

          await writeFile('./test/sub-folder/text.txt',`Data has been overWritten with promises`);
      }catch(err){
        console.log(err);
      }
      }
      start();
// ---------------------------------------------------------------------------------------------------------------------
}}