sap.ui.define([

	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"

], function(UIComponent, JSONModel, ResourceModel) {

	"use strict";

	return UIComponent.extend("crud01.Component", {

		metadata: {
			"rootView": {
				"viewName": "crud01.view.App",
				"type": "XML",
				"async": true,
				"id": "app"
			}
		},

		init: function() {

			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			var oData = {
				recipient: {
					name: "World"
				}
			};

			var oModel = new JSONModel(oData);
			this.setModel(oModel);
	

		}

	});

});