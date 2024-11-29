const { verifyToken } = require('../utils/jwtUtils');
const User = require('../models/User');

const authenticate = async (req, res, next) => {
    
    const token = req.cookies.token; 
    
    if (!token) 
        return res.status(401).json({ message: 'No token provided' });

    try {  
        const decoded = verifyToken(token);
        req.user = await User.findById(decoded.id).populate('roles');
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
};

module.exports = authenticate;
