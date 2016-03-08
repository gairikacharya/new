jQuery.sap.declare("cus.sd.customerinvoice.monitor.SD_INV_MONExtension.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "cus.sd.customerinvoice.monitor",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/SD_INV_MON"
	// we use a URL relative to our own component
	// extension application is deployed with customer namespace
});

this.cus.sd.customerinvoice.monitor.Component.extend("cus.sd.customerinvoice.monitor.SD_INV_MONExtension.Component", {
	metadata: {
		version: "1.0",
		config: {},

		customizing: {}
	}
});