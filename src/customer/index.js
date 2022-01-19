const qs = require('querystring');
const request = require('../api');

const customer = {
	getAll: async (filters) => {
		const uri = filters ? '/customers?' + qs.stringify(filters) : '/customers';
		return request(uri,'GET');
	},
	getById: async (id) => {
		return request('/customers/' + id, 'GET');
	},
	getByEmail: async (email) => {
		return request('/customers?email=' + email, 'GET');
	},
	getByExternalReference: async (externalReference) => {
		return request('/customers?externalReference=' + externalReference, 'GET');
	},
	create: async (data) => {
		return request('/customers', 'POST', data);
	},
	update: async (id, data) => {
		return request('/customers/' + id, 'POST', data);
	},
	delete: async (id) => {
		return request('/customers/' + id, 'DELETE');
	}
}

module.exports = customer;