Sfotipy.Views.Song = Backbone.View.extend({
  tagName: 'li',

  className: 'song item border-bottom',

  events: {
    'click .action.icon-add': 'select',
    'click .action.icon-love': 'love',
    'click .action.icon-share': 'share',
  },

  template: Handlebars.compile($('#song-template').html()),

  initialize: function() {
    this.listenTo(this.model, 'change', this.render, this);
  },

  render: function() {
    var song = this.model.toJSON();
    var html = this.template(song);
    this.$el.html(html);
    return this;
  },

  select: function() {
    Sfotipy.app.player.model.set(this.model.toJSON());
    Sfotipy.app.currentsong.model.set(this.model.toJSON());

    return false;
  },

  love: function() {

  },

  share: function() {

  },
});

Sfotipy.Views.CurrentSong = Backbone.View.extend({
  el: $('.playlist > .current'),

  template: Handlebars.compile($('#current-song-template').html()),

  initialize: function() {
    this.listenTo(this.model, 'change', this.render, this);
  },

  render: function() {
    var song = this.model.toJSON();
    var html = this.template(song);
    this.$el.html(html);
    return this;
  },
});
