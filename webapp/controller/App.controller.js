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
		},
		
		
		// init - DataBinding
		onInit: function() {

		var oModel = new sap.ui.model.odata.ODataModel("proxy/http/vhcalnplci:8000/sap/opu/odata/sap/ZTABLE_SRV/");
		
		//para poder actualizar nuetsra pagina por ejemplo con el update tenemos que agregar un ID al model
		this.getView().setModel(oModel, "empModel");

		//obtenemos el id del formulario
		var oGrid = this.getView().byId("FormChange354");
		//escondemos el formulario
		//oGrid.setVisible(false);

	 }

		
		
	});
	
	
	
	
	
	
	
});