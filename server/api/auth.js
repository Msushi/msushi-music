require('dotenv').config();
const jwt = require('jsonwebtoken');

function verifyAccessToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Forbidden' });
        req.user = user;
        next();
    })
}

function createAccessToken(username) {
    const options = { expiresIn: '2h' };
    return jwt.sign(username, process.env.JWT_SECRET, options);
}

module.exports = {
    verifyAccessToken, 
    createAccessToken
}