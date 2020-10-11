sap.ui.define([

	"sap/ui/core/ComponentContainer"

], function (ComponentContainer) {
	
	"use strict";

	new ComponentContainer({
		
		name: "crud01",
		settings : {
			
			id : "crud01"
		},
		
		async: true	
		
	}).placeAt("content");
	
});
