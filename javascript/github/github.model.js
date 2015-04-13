var Model = require('ampersand-model');

module.exports = Model.extend({
    props: {
        title: 'string',
        link: 'string',
        description: 'string'
    }
});
