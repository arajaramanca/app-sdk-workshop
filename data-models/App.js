Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    /**
     * The app execution entry point
     * _getStoryModel should be called here
     */
    launch: function() {
        this._getStoryModel();
    },

    /**
     * Use Rally.data.ModelFactory to retrieve the story data model.
     * When complete, call _createStory
     */
    _getStoryModel: function() {
        console.log('Retrieving model...');

        Rally.data.ModelFactory.getModel({
            type: 'UserStory',
            success: this._createStory,
            scope: this
        });        
    },

    /**
     * Create a new user story and persist it to the server.
     * The model's save method should be useful here.
     * When complete, call _readStory
     */
    _createStory: function(model) {
        console.log(model);
        var newStory = Ext.create(model, {
            Name: 'App SDK 2.1 is awesome!'
        });
        console.log(newStory);
        newStory.save({
            callback: this._readStory,
            scope: this
        });        
    },

    /**
     * Read the record you just created.
     * The model's load method should be useful here.
     * When complete call _printStory
     */
    _readStory: function(story, operation) {
        console.log('After saving', story);
        if(operation.wasSuccessful()) {
            var model = story.self;
            console.log('Reading story...');
            model.load(story.getId(), {
                fetch: ['FormattedID'],
                callback: this._printStory,
                scope: this
            });
        }
    },

    /**
     * Print the story's FormattedID to the console.
     * The model's get method should be useful here.
     * Hint: did you remember to fetch FormattedID in _readStory?
     * Call _updateStory when done.
     */
    _printStory: function(story, operation) {
        if(operation.wasSuccessful()) {
            console.log('FormattedID:', story.get('FormattedID'));
            this._updateStory(story);
        }
    },

    /**
     * Set the story's PlanEstimate to 5.
     * The model's set and save methods should be useful here.
     * When complete call _deleteStory
     */
    _updateStory: function(story) {
        story.set('PlanEstimate', 5);
        console.log('Updating story...');
        story.save({
            callback: this._deleteStory,
            scope: this
        });
    },

    /**
     * Delete the story.
     * The model's destroy method should be useful here.
     * When complete console.log a success message.
     */
    _deleteStory: function(story, operation) {
        if(operation.wasSuccessful()) {
            console.log('Deleting story...');
            story.destroy({
                callback: this._complete,
                scope: this
            });
        }
    },

    _complete: function(story, operation) {
        if(operation.wasSuccessful()) {
            console.log('Done!');
        }
    }
});
