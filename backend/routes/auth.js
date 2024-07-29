const express = require('express');
const router = express.Router();
const User = require('../models/UserSchema');
const bcrypt = require('bcrypt');
const { getToken } = require('../utils/helpers');
const { body, validationResult } = require('express-validator');
const app = express();

router.post('/register', async (req, res) => {
    const { email, password, name } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(403).json({ error: "A user with this email already exists" });
        }

        const hashPass = await bcrypt.hash(password, 10);

        let user = new User({ name, email, password: hashPass});
        await user.save();

        const userToReturn = { ...user.toJSON() };
        delete userToReturn.password;

        res.status(200).json({ user: userToReturn, success: true });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
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

    return res.status(200).json({success: true, data: userToReturn, token: token});
});

// Route to get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json({ data: users });
    } catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports=router;


