Sfotipy.Views.Player = Backbone.View.extend({
  el: $(".music"),

  template: Handlebars.compile($('#player-template').html()),

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
