// Main.controller.js
sap.ui.define(["sap/m/MessageBox", "sap/ui/core/mvc/Controller", "sap/ui/Device"], function (MessageBox, Controller, Device) {
  return Controller.extend("com.ibm.mywork.controller.Main", {
    device: Device,
    onInit: function () {},
    onBeforeRendering: function () {},
    onAfterRendering: function () {},
    onExit: function () {},
    onHTMLPress: function () {
      var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
      MessageBox.warning(
        "So now the HTMLpress is working",
        {
          icon: MessageBox.Icon.INFORMATION,
          title: "Message from HTML server",
          actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
          styleClass: bCompact ? "sapUiSizeCompact" : "",
          initialFocus: MessageBox.Action.CANCEL
        }
      );
    },
    onButtonPress: function () {
      alert("Button Pressed!");
    },
    onPressJSON: function () {
      var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
      MessageBox.warning(
        "So now the JSONpress is working",
        {
          icon: MessageBox.Icon.SUCCESS,
          title: "Message from JSON server",
          actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
          styleClass: bCompact ? "sapUiSizeCompact" : "",
          initialFocus: MessageBox.Action.CANCEL
        }
      );
    },
    onXMLpress: function (oEvent) {
      var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
      MessageBox.warning(
        "So now the XMLpress is working",
        {
          icon: MessageBox.Icon.WARNING,
          title: "Message from XML server",
          actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
          styleClass: bCompact ? "sapUiSizeCompact" : "",
          initialFocus: MessageBox.Action.CANCEL
        }
      );
    },
  });
});
