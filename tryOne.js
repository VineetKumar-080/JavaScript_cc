const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key';

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token invalid or expired' });

    req.user = user;
    next();
  });
}

module.exports = verifyToken;
