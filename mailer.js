var request = require('request-promise');

module.exports = class Mailer {
  constructor(key) {
    this.key = key;
  }

  send({ subject, to, body }) {
    var options = {
      method: 'POST',
      uri: `http://localhost:3000/messages?key=${this.key}`,
      body: {
        message: {
          subject: subject,
          recipient: to,
          body: body
        }
      },
      json: true
    };
    return request(options)
  }
}
