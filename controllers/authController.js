const User = require('../models/User');
const Role = require("../models/Role");
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwtUtils');

exports.register = async (req, res) => {
    try {
        const { username, email, password, roles } = req.body;

        const roleDocs = await Role.find({ name: { $in: roles } });
        const roleIds = roleDocs.map((role) => role._id);

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            roles: roleIds
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).populate("roles");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = generateToken(user);

        res.cookie('token', token, {
            httpOnly: true, 
            maxAge: 24 * 60 * 60 * 1000 
        });

        res.status(200).json({ message: "Successfully logged in" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.logout = (req, res) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
   
    res.clearCookie('token', { 
        httpOnly: true, 
    });

    res.status(200).json({ message: 'Logged out successfully' });
};
