# Ponga

## Installation

## Usage

```javascript
var Ponga = require('ponga');
var Mailer = new Ponga.Mailer('YOUR-API-KEY');

Mailer.send({ subject: "", to: "", body: ""})
  .then(function (response) {
    console.log(response);
  });
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/alexwheeler/ponga-node.

## License

The module is available as open source under the terms of the [ISC License](https://opensource.org/licenses/ISC).
