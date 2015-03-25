Sfotipy = {};

Sfotipy.Song = Backbone.Model.extend({});
Sfotipy.SongView = Backbone.View.extend({
  events: {
    // 'EVENTO SELECTOR': 'FUNCTION'
    'click .action.icon-add': 'add',
  },

  tagName: 'li',
  className: 'item border-bottom',
  template: Handlebars.compile($("#song-template").html()),

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html);
  },

  add: function(e) {
    alert(this.model.get('name'));
  },
});

window.Sfotipy = Sfotipy;
