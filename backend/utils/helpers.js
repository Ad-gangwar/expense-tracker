const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.SECRET;

exports = {};

exports.getToken = async (email, user) => {
    const token = jwt.sign({ identifier: user._id }, SECRET);
    return token;
}

module.exports = exports;
