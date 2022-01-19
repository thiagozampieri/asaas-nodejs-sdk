const constants = require('./constants');

const settings = {
  config: ({ environment, apiKey, version = 'v3', debug = false }) => {
    if(environment.toLowerCase() !== 'sandbox' && environment.toLowerCase() !== 'production') {
			throw new Error('Invalid environment');
		}
    this.environment = environment;
    this.access_token = apiKey;
    this.version = version;
    this.debug = debug;
  },
	getAccessToken: () => {
		return this.access_token;
	},
	getUrl: () => {
    return constants[`${(this.environment || 'sandbox').toUpperCase()}_URL`];
	},
  getPath: () => {
    return `/api/${this.version}`;
  },
  getDebug: () => {
    return this.debug;
  }
}

module.exports = settings;