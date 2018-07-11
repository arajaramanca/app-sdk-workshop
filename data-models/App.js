Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    /**
     * The app execution entry point
     * _getStoryModel should be called here
     */
    launch: function() {

    },

    /**
     * Use Rally.data.ModelFactory to retrieve the story data model.
     * When complete, call _createStory
     */
    _getStoryModel: function() {
        
    },

    /**
     * Create a new user story and persist it to the server.
     * The model's save method should be useful here.
     * When complete, call _readStory
     */
    _createStory: function(model) {

    },

    /**
     * Read the record you just created.
     * The model's load method should be useful here.
     * When complete call _printStory
     */
    _readStory: function(story, operation) {
        var model = story.self;
    },

    /**
     * Print the story's FormattedID to the console.
     * The model's get method should be useful here.
     * Hint: did you remember to fetch FormattedID in _readStory?
     * Call _updateStory when done.
     */
    _printStory: function(story, operation) {

    },

    /**
     * Set the story's PlanEstimate to 5.
     * The model's set and save methods should be useful here.
     * When complete call _deleteStory
     */
    _updateStory: function(story) {

    },

    /**
     * Delete the story.
     * The model's destroy method should be useful here.
     * When complete console.log a success message.
     */
    _deleteStory: function(story, operation) {

    }
});
