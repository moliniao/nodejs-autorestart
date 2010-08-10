
////////example:
require.paths.unshift(__dirname); //make local paths accessible

var autoreload= require('./autoreload');
var mymodule= require('./mymodule');
autoreload.watchrel('mymodule.js', function (newmodule){ 
   mymodule=newmodule;
   /* also you can put hre staff to make you module looklike it was initialized well. */
});
//autoreload.watch(mymodule.filename, function (newmodule){ mymodule=newmodule; }); // might not work if when started the module has errors or filename export is missing  


var sys = require('sys'),
   http = require('http');
http.createServer(function (req, res) {

  try
  {

  res.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(mymodule.time() + '\n');
  res.end();
  
  }
  catch(e)
  {
   sys.puts(e.stack);
  }
  
}).listen(8124);
sys.puts((new Date).toTimeString()+' Server running at http://127.0.0.1:8124/');


// exit if any js file or template file is changed.
// it is ok because this script encapsualated in a batch while(true);
// so it runs again after it exits.


var autoexit_watch=require('autoexit').watch;
var on_autoexit=function () { // if this function return true it means to ignore the exit; 

} 
autoexit_watch(__dirname,".js", on_autoexit);
//autoexit_watch(__dirname+"/templates",".html", on_autoexit);




//////////end example
// notice the try-catch witch makes your applicaiton not crush on errors


