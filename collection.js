var Posts = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/chrisblog',
  model: actorPost
});

var Shows = Backbone.Collection.extend({
  model: show
});
