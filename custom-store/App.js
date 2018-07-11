Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        //Write app code here

        //API Docs: https://help.rallydev.com/apps/2.1/doc/
        var store = Ext.create('Rally.data.custom.Store', {
	        data: [
	            {
	                Name: 'Foo',
	                City: 'Bar'
	            },
	            {
	                Name: 'Foo One',
	                City: 'Bar One'
	            }            
	        ]
	    });
       	debugger;

	    console.log(store);

    }
});
