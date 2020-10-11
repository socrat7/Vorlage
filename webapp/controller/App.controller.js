sap.ui.define([

	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",


], function(Controller, MessageToast) {

	return Controller.extend("crud01.controller.App", {

		//evento al presionar el boton say hello
		onShowHello: function() {
			//read msg from i18n model
			//var oBundle = this.getView().getModel("i18n").getResouceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			//var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			
			//Show Message
			MessageToast.show("Hallo " + sRecipient);
		}

	});
});