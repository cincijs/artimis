var Camera = Backbone.Model.extend({
  coordinates: function() {
    return this.get('latitude') + ',' + this.get('longitude');
  }
});
