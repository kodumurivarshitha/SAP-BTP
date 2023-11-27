sap.ui.jsview("com.ibm.simpleapp.view.MainJS",{
    getControllerName: function(){
        return "com.ibm.simpleapp.controller.Main";
    },
    createContent: function(){
        var oButton=new sap.m.Button({
            id: "idJsView",
            text:"JS View button",
        });
        return oButton;
        },
   });
