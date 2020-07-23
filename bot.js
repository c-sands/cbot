const twit = require('twit');
const config = require('./config.js');
/*
# Create a config.js file that follows the following template
# for the Twitter account you are trying to post to.
module.exports = {
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: '',
}
*/

const postUpdate = (config, series, chapterNum) => {
    const T = new twit(config);

    T.post('statuses/update', { status: `${series} has updated chapter ${chapterNum}. Check it out on www.centinni.com` }, (err, data, response) => {
        console.log(data);
    });
}

postUpdate(config, 'The Tutorial is Too Hard', '285');