var LastFmModel = require('./lastfm.model');
var _ = require("lodash");
var Collection = require("ampersand-rest-collection");

var LastFmCollection = Collection.extend({
    model: LastFmModel,
    url: 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ryu85&limit=10&api_key=158ae35ee8765aa3463a2e74cbb6d9d3&format=json',
    initialize: function(){
        this.fetch();
    },
    parse: function(data) {
        return _.map(data.recenttracks.track, function(track) {

            var nowplaying =  (track['@attr']) ? track['@attr'].nowplaying : false;

            return {
                track: track.name,
                artist: track.artist['#text'],
                cover: track.image[0]['#text'],
                link: track.url,
                playing: Boolean(nowplaying)
            };
        });
    }
});

module.exports = LastFmCollection;
