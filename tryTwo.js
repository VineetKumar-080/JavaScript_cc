const jwt = require('jsonwebtoken');

const user = {
  id: 123,
  username: 'john_doe'
};

const secretKey = 'your_secret_key';
const expiresIn = '1h';

const token = jwt.sign(user, secretKey, { expiresIn });

console.log('Generated Token:', token);
