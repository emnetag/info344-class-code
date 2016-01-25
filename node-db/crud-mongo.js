'use strict';

var mongoose = require('mongoose');
var dbConfig = require('./secret/config-mongo.json');

var storySchema = new mongoose.Schema({
	url : String,
	votes : { type: Number, default: 0 },
	createdOn : { type: Date, default: Date.now }
});

var Story = mongoose.model('Story', storySchema);

mongoose.connect(dbConfig.url);
mongoose.connection.on('error', function (err) {
	console.error(err);
});

var newStory = {
	url: 'http://www.google.com'
};
var id;

Story.create(newStory)
	.then(function(story) {
		id = story._id;
		console.log("Inserted new story!");
		console.log(story);
	})
	.then(function() {
		return Story.findById(id).exec();
	})
	.then(function(story) {
		console.log('Found a story!');
		console.log(story);
		return Story.findByIdAndUpdate(id, {$inc : {votes : 1}}, {new: true});
	})
	.then(function(story) {
		console.log('Updated story!');
		console.log(story);
		
		return Story.findByIdAndRemove(id);
	})
	.then(function() {
		console.log('Story deleted');
	})
	.then(null, function(err) {
		console.error(err);
	})
	.then(function() {
		mongoose.connection.close();
	})