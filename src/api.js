const https = require('https');
const settings = require('./settings');

const api = async (path, method, postData) => {
	const options = {
    host: settings.getUrl(),
    path: `${settings.getPath()}${path}`,
    port: 443,
    method,
    headers: {
      access_token: settings.getAccessToken(),
      'Content-Type': 'application/json'
    }
  };

  return new Promise((callback) => {
    const req = https.request(options, (res) => {
      res.setEncoding('utf8');

      if(settings.getDebug){
        console.debug('*** GET ***');
        console.debug('* Resource: ', options);
        if (postData) console.debug('* data: ', postData);
      }
      /*
      switch(res.statusCode){
        case 401:
          return callback('Unauthorized');
        break;
        case 404:
          return callback('Not found');
        break;
        case 500:
          return callback('Internal server error');
        break;
      }
      */

      let data = '';
      res
        .on('data', (chunk) => {
          data += chunk.toString();
        })
        .on('error', (err) => callback(err))
        .on('end', () =>  callback(JSON.parse(data)));
    })
    .on('error', (err) => callback(err));

    if(postData) req.write(JSON.stringify(postData));
    req.end();
  });
}

module.exports = api;