const create = async (req, res) => {
    res.json({ message: 'Create successful', accessStatus: 'granted' });
};

const read = async(req, res) => {
    res.json({ message: 'Read successful', accessStatus: 'granted' });
}; 

const update = async(req, res) => {
    res.json({ message: 'Update successful', accessStatus: 'granted' });
};

const del = async(req, res) => {
    res.json({ message: 'Delete successful', accessStatus: 'granted' });
};

const manageRoles = async(req, res) => {
    res.json({ message: 'Manage roles successful', accessStatus: 'granted' });
};

const accessAdminPanel = async(req, res) => {
    res.json({ message: 'Access to admin panel granted', accessStatus: 'granted' });
};

module.exports = { create, read, update, del, manageRoles, accessAdminPanel };