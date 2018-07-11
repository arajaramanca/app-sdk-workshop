Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        //Write app code here

        //API Docs: https://help.rallydev.com/apps/2.1/doc/
        this.add({
            xtype: 'component',
            html: 'Hello World'
        });
        
        console.log("Hello World");
    }
});
