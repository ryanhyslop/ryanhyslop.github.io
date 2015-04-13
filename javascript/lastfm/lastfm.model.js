var Model = require('ampersand-model');

module.exports = Model.extend({
    props: {
        track: 'string',
        artist: 'string',
        link: 'string',
        cover: 'string',
        playing: 'boolean'
    }
});
