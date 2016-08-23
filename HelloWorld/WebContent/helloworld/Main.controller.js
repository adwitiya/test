sap.ui.define(["sap/m/MessageToast"]);
"sap/m/MessageToast"
sap.ui.controller("helloworld.Main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf helloworld.Main
*/
	onInit: function() {
		var myData = {
				myArray: [{
					pname: "SAP",
					sname: "Eclipse"
				}, {
					pname: "Adwitiya",
					sname: "Chakraborty"
				}, {
					pname: "UI5",
					sname: "Fiori"
				}],
				myArray2: [{
					pname: "Kolkata",
					sname: "Pune"
				}, {
					pname: "Hello",
					sname: "World"
				}, {
					pname: "Awesome",
					sname: "Coog"
				}]
			};

			var oJSONModel = new sap.ui.model.json.JSONModel(myData);
			this.getView().setModel(oJSONModel);
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf helloworld.Main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf helloworld.Main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf helloworld.Main
*/
//	onExit: function() {
//
//	}			 
			onPress: function (evt) {
				sap.m.MessageToast.show(evt.getSource().getId() + " Pressed");
			},
			onPressReject: function(evt) {
				sap.m.MessageToast.show(evt.getSource().getId() + " Pressed");
	}
});