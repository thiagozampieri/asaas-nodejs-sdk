const qs = require('querystring');
const request = require('../api');

const subscription = {
	getAll: async (filters) => {
		const uri = filters ? '/subscriptions' + qs.stringify(filters) : '/subscriptions';
		return request(uri, 'GET');
	},
	getById: async (id) => {
		return request('/api/subscriptions/' + id);
	},
	getByCustomer: async (filters, customer_id) => {
		const uri = filters ? '/customers/' + customer_id+'/subscriptions?' + qs.stringify(filters) : '/customers/' + customer_id+'/subscriptions';  
		return request(uri,'GET');
	},
	create: async (data) => {
		return request('/subscriptions','POST', data);
	},
	update: async (id, data) => {
		return request('/subscriptions/' + id, 'POST', data);
	},
	delete: async (id) => {
		return request('/subscriptions/' + id, 'DELETE');
	}
}

module.exports = subscription;