var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('selamla',(isim)=>{
    console.log(`merhaba ${isim}`);
});
const name = "kani";
emitter.emit("selamla",name);