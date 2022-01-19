const qs = require('querystring');
const request = require('../api');

const payment = {
	getAll: async (filters) => {
		const uri = filters ? '/payments?' + qs.stringify(filters) : '/payments';		
		return request(uri, 'GET');
	},	
	getById: async (id) => {
		return request('/payments/' + id);
	},
	getByCustomer: async (filters, customer_id) => {
		const uri = filters ? '/customers/' + customer_id+'/payments?' + qs.stringify(filters) : '/customers/' + customer_id+'/payments';
		return request(uri,'GET');
	},
	getBySubscription: async (filters, subscription_id) => {
		const uri = filters ? '/subscriptions/' + subscription_id+'/payments?' + qs.stringify(filters) : '/subscriptions/' + subscription_id+'/payments';
		return request(uri, 'GET');
	},
	create: async (data) => {
		return request('/payments', 'POST', data);
	},
	update: async (id, data) => {
		return request('/payments/' + id, 'POST', data);
	},
	delete: async (id) => {
		return request('/payments/' + id, 'DELETE');
	}
}

module.exports = payment;