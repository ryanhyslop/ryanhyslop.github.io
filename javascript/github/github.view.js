var AmpersandView = require('ampersand-view');

// some views for individual items in the collection
var ItemView = AmpersandView.extend({
    template: require('./github.template.hbs'),
    bindings: {
        'model.title': '[data-hook=title]',
        'model.description': '[data-hook=description]',
        'model.link': {
            type: 'attribute',
            hook: 'link',
            name: 'href'
        }
      }
});

// the main view
var LastFmView = AmpersandView.extend({
    template: '<ul class="list github"></ul>',
    render: function (opts) {
        // render our template as usual
        this.renderWithTemplate(this);
        var collectionView = this.renderCollection(this.collection, ItemView, this.el.querySelector('ul'), opts);
        return this;
    }
});

module.exports = LastFmView;
