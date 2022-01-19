var asaas = require('../src/index.js');
asaas.settings.config({
	environment: 'sandbox',
	apiKey: '65f6cc7662d3bcd0377021c5d0158bc0a43724d6d80129bc807e2063b6cc63e7',
	version: 'v3',
	debug: false,
});

asaas.customer.getAll(null);

asaas.customer.create({'name': 'nodejs','email':'nodejs@nodejs.com'});

asaas.city.getByName('camboriu');

// asaas.payment.getAll({status:'OVERDUE'});