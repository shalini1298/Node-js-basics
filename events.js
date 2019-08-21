var events=require('events');
var eventEmitter=new events.EventEmitter;
var myEvent= function(){
    console.log('i hear a scream');
}
eventEmitter.on('scream',myEvent);
eventEmitter.emit('scream');