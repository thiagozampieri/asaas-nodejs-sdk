const qs = require('querystring');
const request = require('../api');

const city = {
	get: async (filters) => {
		const uri = filters ? '/cities?' + qs.stringify(filters) : '/cities';
		return request(uri, 'GET');
	},
	getById: async (id) => {
		return request('/cities/' + id, 'GET');
	},
	getByName: async (name) => {
		return request('/cities?name=' + name, 'GET');
	}

}

module.exports = city;