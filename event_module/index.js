console.log('event');

const EventEmitter = require('events');

const event = new EventEmitter();

event.on('nameEvent',  () => {
    console.log('event work');
})

event.emit('nameEvent')





