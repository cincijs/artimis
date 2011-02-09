var CameraIndexView = Backbone.View.extend({
	initialize: function(args) {
		_.bindAll(this, 'render', 'close');
		this.render();
	},
	events: {
		'click .title': 'handleTitleClick'
	},
	render: function() {
		this.el = ich.camera(this.model.toJSON());
		return this;
	},
	handleTitleClick: function() {
		alert('you clicked the title: ' + this.model.get('title'));
	}	
});
