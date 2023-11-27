sap.ui.jsfragment("com.ibm.simpleapp.fragments.InputJS", {
    createContent: function () {
      var oInput = new sap.m.input({
        value: "Fragment JS",
      });
  
      return oInput;
    },
  });