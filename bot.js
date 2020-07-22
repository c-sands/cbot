const twit = require('twit');
const config = require('./config.js');

const T = new twit(config);

T.post('statuses/update', { status: 'hello world' }, (err, data, response) => {
    console.log(data);
});