/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FileBot.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        
    ],

    alias: 'controller.main',

    /**
     * Called when the view is created
     */
    init: function() {
        if (Ext.util.LocalStorage.supported) {
            Ext.state.Manager.setProvider(new Ext.state.LocalStorageProvider())
        } else {
            Ext.state.Manager.setProvider(new Ext.state.CookieProvider())
        }
    }

});