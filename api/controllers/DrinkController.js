/**
 * DrinkController
 *
 * @description :: Server-side logic for managing drinks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {

		Drink.create({name: req.body.name, quantity: req.body.quantity}).exec(function createCB(err, created){
			if (err)
					return res.send(500, err);
			sails.log('Created drink with name ' + created.name + ' and quantity = ' + created.quantity);
			return res.send(200, created);
		});
	},

	update: function(req, res) {

		Drink.update({name:req.body.name},{quantity:req.body.quantity}).exec(function afterwards(err, updated){
			if (err) {
	    	return res.negotiate(err);
	  	}
	  	console.log('Updated user to have name ' + updated[0].name);
			return res.send(200, updated);
		});
	},

	delete: function(req, res) {

		Drink.destroy({name:req.body.name}).exec(function (err){
  		if (err) {
    			return res.negotiate(err);
  		}
  		sails.log('Deleted drink');
  		return res.send(200, 'The drink has been removed');
		});
	},

	get: function(req, res) {

		Drink.find({name:req.param('name')}).exec(function (err, quantity){
		  if (err) {
		    return res.negotiate(err);
		  }
		  return res.send(200, quantity);
		});
	}
};
