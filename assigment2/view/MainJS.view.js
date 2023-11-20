
sap.ui.jsview("com.ibm.mywork.view.MainJS", {
  getControllerName: function () {
    return "com.ibm.mywork.controller.Main";
  },
  createContent: function () {
    var oButton = new sap.m.Button({
      id: "idJSView",
      text: "JS VIEW Button",
      press: "onJSViewPress", // Correct function name
    });

    return oButton;
  },
});
