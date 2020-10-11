sap.ui.define([

	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"


], function(Controller, MessageBox) {
	
	//id del formulario
	var nameForm1 = "Form1";

	return Controller.extend("crud01.Table.App", {
		
		// init - DataBinding
		onInit: function() {

		var oModel = new sap.ui.model.odata.ODataModel("proxy/http/vhcalnplci:8000/sap/opu/odata/sap/ZTABLE_SRV/");
		
		//para poder actualizar nuetsra pagina por ejemplo con el update tenemos que agregar un ID al model
		this.getView().setModel(oModel, "empModel");

		//obtenemos el id del formulario
		var oGrid = this.getView().byId(nameForm1);
		//escondemos el formulario
		oGrid.setVisible(false);
	
	 },

	//Display

	onDisplay: function() {

		//Obtenemos la tabla del view
		var oTable = this.getView().byId("idEmployeeTable");
		//console.log(oTable);
		//Obtenemos el elemento seleccionado
		var contexts = oTable.getSelectedContexts();
        //console.log(contexts);
		//comprobamos si hay elementos seleccionados
		if (contexts.length == 0) {
			
			//mensaje de error
								MessageBox.show(
									"Please Select a Row", {
										icon: MessageBox.Icon.ERROR,
										title: "Display",
										actions: [MessageBox.Action.OK],
										emphasizedAction: MessageBox.Action.OK,
										onClose: function (oAction) { / * do something * / }
									}
								);
		} else {
			
			var editable = false;

			//obtenemos el id del formulario
			var oGrid = this.getView().byId(nameForm1);
			//console.log(oGrid);
			//mostramos el formulario
			oGrid.setVisible(true);

			//obtenemos el id del boton save
			var oSave = this.getView().byId("saveBtnId");
			oSave.setVisible(false);

			var items = contexts.map(function(c) {
				return c.getObject();
			});

			//obtenemos el id del empleado y escribimos su valor en el campo correspondiente
			var oId = this.getView().byId("empId");
			oId.setValue(items[0].Empno);
			oId.setEditable(editable);
		
			//obtenemos el primer nombre del empleado y escribimos su valor en el campo correspondiente
			var oId = this.getView().byId("fnameId");
			oId.setEditable(editable);
			oId.setValue(items[0].Fname);

			//obtenemos el segundo nombre del empleado y escribimos su valor en el campo correspondiente
			var oId = this.getView().byId("lnameId");
			oId.setEditable(editable);
			oId.setValue(items[0].Lname);

			//obtenemos la direccion del empleado y escribimos su valor en el campo correspondiente
			var oId = this.getView().byId("addrsId");
			oId.setEditable(editable);
			oId.setValue(items[0].Addrs);

			//obtenemos el puesto del empleado y escribimos su valor en el campo correspondiente
			var oId = this.getView().byId("desgnId");
			oId.setEditable(editable);
			oId.setValue(items[0].Desgn);

		}

	}, //end of display
	
	//Update

	mode: 0,
	onUpdate: function() {

		//Obtenemos la tabla del view
		var oTable = this.getView().byId("idEmployeeTable");
		//Obtenemos el elemento seleccionado
		var contexts = oTable.getSelectedContexts();

		//comprobamos si hay elementos seleccionados
		if (contexts.length == 0) {
			
			//mensaje de error
			
								MessageBox.show(
									"Please Select a Row", {
										icon: MessageBox.Icon.ERROR,
										title: "Update",
										actions: [MessageBox.Action.OK],
										emphasizedAction: MessageBox.Action.OK,
										onClose: function (oAction) { / * do something * / }
									}
								);
						
		} else {

			//obtenemos el id del formulario
			var oGrid = this.getView().byId(nameForm1);
			//mostramos el formulario
			oGrid.setVisible(true);

			//obtenemos el id del boton save
			var oSave = this.getView().byId("saveBtnId");
			oSave.setVisible(true);

			var items = contexts.map(function(c) {
				return c.getObject();
			});

			//obtenemos el id del empleado y escribimos su valor en el campo correspondiente
			var oId = this.getView().byId("empId");
			oId.setEditable(false);
			oId.setValue(items[0].Empno);

			//obtenemos el primer nombre del empleado y escribimos su valor en el campo correspondiente
			var oId = this.getView().byId("fnameId");
			oId.setEditable(true);
			oId.setValue(items[0].Fname);

			//obtenemos el segundo nombre del empleado y escribimos su valor en el campo correspondiente
			var oId = this.getView().byId("lnameId");
			oId.setEditable(true);
			oId.setValue(items[0].Lname);

			//obtenemos la direccion del empleado y escribimos su valor en el campo correspondiente
			var oId = this.getView().byId("addrsId");
			oId.setEditable(true);
			oId.setValue(items[0].Addrs);

			//obtenemos el puesto del empleado y escribimos su valor en el campo correspondiente
			var oId = this.getView().byId("desgnId");
			oId.setEditable(true);
			oId.setValue(items[0].Desgn);

			this.mode = "update";

		}

	},  //end of update
	
	
	//Create

	onCreate: function() {
		
			//obtenemos el id del formulario
			var oGrid = this.getView().byId(nameForm1);
			//mostramos el formulario
			oGrid.setVisible(true);

			//obtenemos el id del boton save
			var oSave = this.getView().byId("saveBtnId");
			oSave.setVisible(true);

			//obtenemos el id del empleado y escribimos su valor en el campo correspondiente
			var oId = this.getView().byId("empId");
			oId.setEditable(true); //en este caso el employe ID tiene que ser editable osea true
			oId.setValue(""); //Todos los campos tienen que estar vacios

			//obtenemos el primer nombre del empleado y escribimos su valor en el campo correspondiente
			var oId = this.getView().byId("fnameId");
			oId.setEditable(true);
			oId.setValue(""); //Todos los campos tienen que estar vacios

			//obtenemos el segundo nombre del empleado y escribimos su valor en el campo correspondiente
			var oId = this.getView().byId("lnameId");
			oId.setEditable(true);
			oId.setValue(""); //Todos los campos tienen que estar vacios

			//obtenemos la direccion del empleado y escribimos su valor en el campo correspondiente
			var oId = this.getView().byId("addrsId");
			oId.setEditable(true);
			oId.setValue(""); //Todos los campos tienen que estar vacios

			//obtenemos el puesto del empleado y escribimos su valor en el campo correspondiente
			var oId = this.getView().byId("desgnId");
			oId.setEditable(true);
			oId.setValue(""); //Todos los campos tienen que estar vacios

			this.mode = "create";


	}, //end of create
	
	//declaramos una variable global para el delete
	deleteId: 0,
	
	//Delete

	onDelete: function() {
		
		   //obtenemos el id del formulario
			var oGrid = this.getView().byId(nameForm1);
			//mostramos el formulario
			oGrid.setVisible(false);
			//Obtenemos la tabla del view
			var oTable = this.getView().byId("idEmployeeTable");
			//Obtenemos el elemento seleccionado
			var contexts = oTable.getSelectedContexts();
				
			
			//comprobamos si hay elementos seleccionados
		if (contexts.length == 0) {
			
			//mensaje de error
								MessageBox.show(
									"Please Select a Row", {
										icon: MessageBox.Icon.ERROR,
										title: "Delete",
										actions: [MessageBox.Action.OK],
										emphasizedAction: MessageBox.Action.OK,
										onClose: function (oAction) { / * do something * / }
									});
							
		} else {
			
		//borramos el dato escogido	
			
		var items = contexts.map(function(c) {
				return c.getObject();
			});
			
	    	deleteId = items[0].Empno;

			this.mode = "delete";
			
			//activamos la funcion Save sin presionar un boton
			this.onSave();
			
		}

	} , //en of delete
	
	
	//onSave

	onSave: function() {

		view = this.getView();
		
		//Obtenemos la tabla del view
		//var oTable = this.getView().byId("idEmployeeTable");
		
		//Para el Update -------------------------------------------------------------------------------------

		if (this.mode == "update") {

			var oId = view.byId("empId").getValue();
			var fname = view.byId("fnameId").getValue();
			var lname = view.byId("lnameId").getValue();
			var addrs = view.byId("addrsId").getValue();
			var desgn = view.byId("desgnId").getValue();

			OData.request({

				requestUri: "proxy/http/vhcalnplci:8000/sap/opu/odata/sap/ZTABLE_SRV/",
				method: "GET",
				headers: {
					"X-Requested-With": "XMLHttpRequest",
					"Content-Type": "application/atom+xml",
					"DataServiceVersion": "2.0",
					"X-CSRF-Token": "Fetch"
				}

			},
				function(data, response) {

					header_xcsrf_token = response.headers['x-csrf-token'];
					OData.request
						({
							requestUri: "proxy/http/vhcalnplci:8000/sap/opu/odata/sap/ZTABLE_SRV/ztableSet('" + oId + "')",
							method: "PUT",
							headers: {
								"X-Requested-With": "XMLHttpRequest",
								"Content-Type": "application/atom+xml",
								"DataServiceVersion": "2.0",
								"Accept": "application/atom+xml, application/atomsvc+xml, application/xml",
								"X-CSRF-Token": header_xcsrf_token
							},

							data:
								{
								Empno: oId,
								Fname: fname,
								Lname: lname,
								Addrs: addrs,
								Desgn: desgn,
								}
						},
						
						//mensaje de éxito
						function(data, response){
							
							//mensaje de éxito - Datos actualizados
								MessageBox.show(
									"Data Updated Successfully", {
										icon: MessageBox.Icon.SUCCESS,
										title: "Updated",
										actions: [MessageBox.Action.OK],
										emphasizedAction: MessageBox.Action.OK,
										//onClose: function (oAction) { / * do something * / }
									}
								);
								
							//actualiza la lista con el ID del model
							view.getModel("empModel").refresh();
							
							view.byId("FormChange354").setVisible(false);
								
													
						},
						
						function(err){
							
							var request = err.request;
							var response = err.response;
							
							//mensaje de error
					
												MessageBox.show(
													"Error, Request: "+request+" Response: "+response, {
														icon: MessageBox.Icon.ERROR,
														title: "Update",
														actions: [MessageBox.Action.OK],
														emphasizedAction: MessageBox.Action.OK,
														onClose: function (oAction) { / * do something * / }
													}
												);
										
						}
						
					);
				}
			)
		}
		
		// Para el create ----------------------------------------------------------------------------------
		
		else if (this.mode == "create") {
			
		
		    var oId = view.byId("empId").getValue();
			var fname = view.byId("fnameId").getValue();
			var lname = view.byId("lnameId").getValue();
			var addrs = view.byId("addrsId").getValue();
			var desgn = view.byId("desgnId").getValue();

			OData.request({

				requestUri: "proxy/http/vhcalnplci:8000/sap/opu/odata/sap/ZTABLE_SRV/",
				method: "GET",
				headers: {
					"X-Requested-With": "XMLHttpRequest",
					"Content-Type": "application/atom+xml",
					"DataServiceVersion": "2.0",
					"X-CSRF-Token": "Fetch"
				}

			},
				function(data, response) {

					header_xcsrf_token = response.headers['x-csrf-token'];
					OData.request
						({
							requestUri: "proxy/http/vhcalnplci:8000/sap/opu/odata/sap/ZTABLE_SRV/ztableSet",
							method: "POST",
							headers: {
								"X-Requested-With": "XMLHttpRequest",
								"Content-Type": "application/atom+xml",
								"DataServiceVersion": "2.0",
								"Accept": "application/atom+xml, application/atomsvc+xml, application/xml",
								"X-CSRF-Token": header_xcsrf_token
							},

							data:
								{
								Empno: oId,
								Fname: fname,
								Lname: lname,
								Addrs: addrs,
								Desgn: desgn,
								}
						},
						
						//mensaje de éxito
						function(data, response){
							
							//oTable.setBusy(true);
							
							//mensaje de éxito - Datos actualizados

								MessageBox.show(
									"Data Created Successfully", {
										icon: MessageBox.Icon.SUCCESS,
										title: "Created",
										actions: [MessageBox.Action.OK],
										emphasizedAction: MessageBox.Action.OK,
										//onClose: function (oAction) { / * do something * / }
									}
								);
								
	
							
							//actualiza la lista con el ID del model
							view.getModel("empModel").refresh();
							
							view.byId("FormChange354").setVisible(false);
								
													
						},
						
						function(err){
							
							var request = err.request;
							var response = err.response;
							
							//mensaje de error
				
												MessageBox.show(
													"Error, Request: "+request+" Response: "+response, {
														icon: MessageBox.Icon.ERROR,
														title: "Create Error",
														actions: [MessageBox.Action.OK],
														emphasizedAction: MessageBox.Action.OK,
														onClose: function (oAction) { / * do something * / }
													}
												);
											
						}
						
					);
				}
			)
			
			
	 	}
		
		//Para el delete --------------------------------------------------------------------------------------
		
		else if (this.mode == "delete") {
			

			OData.request({

				requestUri: "proxy/http/vhcalnplci:8000/sap/opu/odata/sap/ZTABLE_SRV/",
				method: "GET",
				headers: {
					"X-Requested-With": "XMLHttpRequest",
					"Content-Type": "application/atom+xml",
					"DataServiceVersion": "2.0",
					"X-CSRF-Token": "Fetch"
				}

			},
				function(data, response) {

					header_xcsrf_token = response.headers['x-csrf-token'];
					OData.request
						({
							requestUri: "proxy/http/vhcalnplci:8000/sap/opu/odata/sap/ZTABLE_SRV/ztableSet('" + deleteId + "')",
							method: "DELETE",
							headers: {
								"X-Requested-With": "XMLHttpRequest",
								"Content-Type": "application/atom+xml",
								"DataServiceVersion": "2.0",
								"Accept": "application/atom+xml, application/atomsvc+xml, application/xml",
								"X-CSRF-Token": header_xcsrf_token
							}
						},
						
						//mensaje de éxito
						function(data, response){
							
							//oTable.setBusy(true);
							
							//mensaje de éxito - Datos actualizados
		
								MessageBox.show(
									"Data Delete Successfully", {
										icon: MessageBox.Icon.SUCCESS,
										title: "Delete",
										actions: [MessageBox.Action.OK],
										emphasizedAction: MessageBox.Action.OK,
										//onClose: function (oAction) { / * do something * / }
									}
								);
								
				
							
							//actualiza la lista con el ID del model
							view.getModel("empModel").refresh();
							
							view.byId("FormChange354").setVisible(false);
								
													
						},
						
						function(err){
							
							var request = err.request;
							var response = err.response;
							
							//mensaje de error
					
												MessageBox.show(
													"Delete Error", {
														icon: MessageBox.Icon.ERROR,
														title: "Delete",
														actions: [MessageBox.Action.OK],
														emphasizedAction: MessageBox.Action.OK,
														onClose: function (oAction) { / * do something * / }
													}
												);
											
						}
						
					);
				}
			)
			
			
	 	}
			
	} // end of save

	
	
	
	
		
	});
	
	});