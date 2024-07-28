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
router.post('/login', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }).withMessage('should contain min 5 char'),
], async (req, res) => {

    const result = validationResult(req);

    if (!result.isEmpty()) {
        return res.status(400).json({ err: result.array() });
    }

    try {
        let email = req.body.email;
        let userData = await User.findOne({ email });

        if (!userData) {
            return res.status(400).json({ err: 'Email not found! Enter correct email' });
        }
        const isValidPass = await bcrypt.compare(req.body.password, userData.password);

        if (!isValidPass) {
            return res.status(400).json({ err: 'Enter valid Credentials' });
        }

        const jwtPayload = {
            id: userData._id,
        };
        const token = await getToken(userData.email, jwtPayload);

        const userToReturn = { ...userData.toJSON()};
        delete userToReturn.password;
        return res.status(200).json({success: true, data: userToReturn, token: token});
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal server error' });
    }
});

module.exports=router;


