sap.ui.define([

	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"


], function(Controller, MessageBox) {

	return Controller.extend("crud01.Table.App", {
		
		onOpenDialog : function(){
			
			MessageBox.show(
									    "Successfully", {
										icon: MessageBox.Icon.SUCCESS,
										title: "Updated",
										actions: [MessageBox.Action.OK],
										emphasizedAction: MessageBox.Action.OK,
										onClose: function (oAction) { / * do something * / }
									}
								);
			
		}
	
		});
	
	});