
var Post = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/chrisblog',
  idAttribute: "_id",
  defaults: {
    photo: 'http://www.placecage.com/100/100',
    author: 'Chris',
    tag: 'actors'
  },
  initialize: function () {
    console.log("post model is created!");
  }
});

var actorPost = new Post({author: 'Bobby', title: 'this is my killer post title.', uggaBugga: 'some data'});

// POST to the server

actorPost.save();


var Show = Backbone.Model.extend({
  idAttribute: "_id",
  defaults: {
    name: 'show_name',
    stars:'actor_names',
    genre: 'genre'
  },
  initialize: function () {
    this.on('change:name', function(model){
      var name = model.get('name');
      alert('Changed name to ' + name);
    });
  }
});

var show = new Show({});
show.set({name:'Better Call Saul'});

show.save();
