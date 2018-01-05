const fs = require('fs');
/*fs.readFile("demo.txt", (error,data)=>{
    if(error)
        console.log(error);
    console.log(data.toString());
    console.log("dosya okundu");
}); */


/*const dosya = fs.readFileSync('demo.txt');
console.log(dosya.toString());
console.log("dosya okundu");*/


fs.appendFile("appendDemo.txt", "merhaba dünya\n", (err)=>{
    if(err)
        throw err;
    const appendFile = fs.readFileSync('appendDemo.txt');
    console.log(appendFile.toString());
    console.log("dosya append ended");
});

fs.writeFile("writeDemo.txt", "merhaba dünya", (err)=>{
    if(err)
        throw err;
    const writeFile = fs.readFileSync('writeDemo.txt');
    console.log(writeFile.toString());
    console.log("dosya write ended");
});






