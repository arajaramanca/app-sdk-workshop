Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    /**
     * The app execution entry point
     */
    launch: function() {
        var context = this.getContext();

        //Display the current workspace name

        //Display the current project name

        //Display the current user's name

        //Display the current subscription type

        //Display the current workspace's datetime format

        //Display the current user's timezone

        //Display the current user's permission level
        //Sub Admin? Workspace Admin? Project Admin? Project Editor? Project Viewer?

        //Is the global project scoping the same as this context's project scoping?

        //Is there a timebox scope specified (iteration or release)?
    },

    /**
     * A helper function that will display
     * the specified value in the app.
     */
    _displayContextValue: function(value) {
        this.add({
            xtype: 'component',
            html: value
        });
    }
});
