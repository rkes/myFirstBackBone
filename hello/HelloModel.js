define(function(require) {
	var Backbone = require('Backbone');

	return Backbone.Model.extend({
		urlRoot: 'http://practo.0x10.info/api/speciality?type=json',
		dataType: 'jsonp',
		url: function() {
			return this.urlRoot ;
		}
	});
});
console.log("Loading HelloModel.js");