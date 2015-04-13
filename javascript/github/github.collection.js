var GithubModel = require('./github.model');
var _ = require("lodash");
var Collection = require("ampersand-rest-collection");

var LastFmCollection = Collection.extend({
    model: GithubModel,
    url: 'https://api.github.com/users/ryanhyslop/repos?sort=updated',
    initialize: function(){
        this.fetch();
    },
    parse: function(data) {
        var results =  _.map(data, function(repo) {
            return {
                title: repo.name,
                description: repo.description,
                link: repo.html_url
            };
        });

        return results.slice(0, 7);
    }
});

module.exports = LastFmCollection;
