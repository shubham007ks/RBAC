const authorize = (requiredRoles) => {
    return (req, res, next) => {
        const userRoles = req.user.roles.map(role => role.name);
        const hasAccess = requiredRoles.some(role => userRoles.includes(role));
        if (!hasAccess) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();   
    };
};

module.exports = authorize;
