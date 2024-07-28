const express = require('express');
const router = express.Router();
const User = require('../models/UserSchema');
const bcrypt = require('bcrypt');
const { getToken } = require('../utils/helpers');
const app = express();

router.post('/register', async (req, res) => {
    const { name, email , password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        return res.status(403).json({ error: "A user with this email already exists" });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const newUserData = {
        name,
        email,
        password: hashPass,
    };

    const newUser = await User.create(newUserData);

    const token = await getToken(email, newUser);

    const userToReturn = { ...newUser.toJSON(), token };
    delete userToReturn.password;

    res.status(200).json(userToReturn);
});

// Login endpoint
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(403).json({ err: 'Enter valid Credentials' });
    }

    const isValidPass = await bcrypt.compare(password, user.password);

    if (!isValidPass) {
        return res.status(403).json({ err: 'Enter valid Credentials' });
    }

    const token = await getToken(user.email, user);

    const userToReturn = { ...user.toJSON(), token };
    delete userToReturn.password;

    return res.status(200).json(userToReturn);
});

module.exports = router;
