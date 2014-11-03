App = Ember.Application.create();

App.Router.map(function() {
  	this.resource('users', { path: '/' }, function() {
		this.route('new');
	});
});

App.UsersRoute = Ember.Route.extend({
  model: function() {
    return [
			Ember.Object.create({name:"name1",sex:"male"}),
			Ember.Object.create({name:"name2",sex:"female"}),
			Ember.Object.create({name:"name3",sex:"male"})
		];
  }
});

App.UsersController = Ember.ArrayController.extend({
	actions:{
		gotoAddUser: function(){
		this.target.transitionTo("users.new");
		}	
	}
	
});

//App.usersController=App.UsersController.create();
//App.UsersController.create();