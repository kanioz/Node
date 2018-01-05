const fs = require('fs');
fs.unlink("appendDemo.txt", (err)=>{
   if(err)
       throw err;
   console.log("appendDemo-.txt deleted");
});