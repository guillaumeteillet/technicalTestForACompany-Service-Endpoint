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
			res.send(200, created);
		});
	}
};
