var postsData = [
	{
		title:'Introducing Telescope',
		url: 'http://sachagreif.com/Introducing-telescape/'
	},
	{
		title: 'Meteor',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com'
	}
];
Template.postsList.helpers({
	posts: postsData
});