Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        //Write app code here

        //API Docs: https://help.rallydev.com/apps/2.1/doc/

        /*
			1. first query create a defect store
			2. console log records
			3. show fetch true
			4. filter only Open defects
			5. Print Name and State
			6. Sorting
			7. Paging
			8. Scoping
			9. Add a rally grid

        */

        var defectStore = Ext.create('Rally.data.wsapi.Store', {
		    model: 'Defect', //or defectModel
		    fetch: ['Name', 'State'], // change to 'true' in order to fetch everything.
		    //fetch: true, 
		    autoLoad: true,
			filters: [
				        {
				            property: 'State',
				            operator: '=',
				            value: 'Submitted'
				        }
			],
	        sorters: [
	            {
	                property: 'Severity',
	                direction: 'DESC'
	            }
	        ],
		    context: {
		        projectScopeDown: false
		    },	        		    
		    listeners: {
		        load: function(store, records) {
		            console.log(records);
		        }
		    }
		});

    }
});