// Last.Fm
var LastFmCollection = require('./lastfm/lastfm.collection');
var LastFmView = require('./lastfm/lastfm.views');
var lastFmCollection = new LastFmCollection();

// Github
var GithubCollection = require('./github/github.collection');
var GithubView = require('./github/github.view');
var githubCollection = new GithubCollection();

// Namespace
var RH = RH || {};
RH.views = {};


// Initialise
RH.views.lastFm = new LastFmView({ el: document.getElementById('lastfm'), collection: lastFmCollection}).render();

RH.views.github = new GithubView({ el: document.getElementById('github'), collection: githubCollection}).render();
