sap.ui.define([

	"sap/ui/core/mvc/Controller",



], function(Controller) {

	return Controller.extend("crud01.controller.TableOdata", {

		onInit: function() {

			//Obtenermos los servicions ODTA
			var oModel = new sap.ui.model.odata.ODataModel("proxy/http/vhcalnplci:8000/sap/opu/odata/sap/ZTABLE_SRV/");

			//llenamos los datos en la tabla
			this.getView().setModel(oModel, "Idtable2");

		

		} // end of onInit()

	});


});