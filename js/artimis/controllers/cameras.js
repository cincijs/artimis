var CameraController = Backbone.Controller.extend({
	routes: {
		"cameras/:id": "edit",
		"":            "index"
	},	
	index: function() {
		this.cameraList = this.$('#cameras');
		var cameras = new Cameras();
		cameras.fetch({
			success: function() {
				cameras.each(function(camera) {
					this.cameraList.append(new CameraIndexView({ model: camera }));
				});
			},
			error: function() {
				new Error({ message: "Error loading cameras." });
			}
		});
	}
});
