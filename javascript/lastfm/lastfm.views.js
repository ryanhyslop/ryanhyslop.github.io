var AmpersandView = require('ampersand-view');

// some views for individual items in the collection
var ItemView = AmpersandView.extend({
    template: require('./lastfm.template.hbs'),
    bindings: {
        'model.track': '[data-hook=track]',
        'model.artist': '[data-hook=artist]',
        'model.playing': '[data-hook=playing]',
        'model.link': {
            type: 'attribute',
            hook: 'link',
            name: 'href'
        },
        'model.cover': {
          type: 'attribute',
          hook: 'cover',
          name: 'src'
        }
      }
});

// the main view
var LastFmView = AmpersandView.extend({
    template: '<ul class="list lastfm"></ul>',
    render: function (opts) {
        // render our template as usual
        this.renderWithTemplate(this);

        var collectionView = this.renderCollection(this.collection, ItemView, this.el.querySelector('ul'), opts);
        return this;
    }
});

module.exports = LastFmView;
