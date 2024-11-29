require('dotenv').config();
const mongoose = require('mongoose');
const Role = require('./models/Role'); 

const seedRoles = async () => {

    const roles = [
        {
            name: 'Admin',
            permissions: ['create', 'read', 'update', 'delete', 'manageRoles', 'accessAdminPanel']
        },
        {
            name: 'User',
            permissions: ['create', 'read', 'update', 'delete', 'comment']
        },
        {
            name: 'Moderator',
            permissions: ['create', 'read', 'update', 'delete', 'banUser', 'comment', 'manageContent']
        }
    ];

    try {
        console.log('Clearing existing roles...');
        await Role.deleteMany({});
        console.log('Existing roles cleared');

        console.log('Inserting new roles...');
        const insertedRoles = await Role.insertMany(roles);
        console.log('Roles inserted:', insertedRoles);
    } catch (error) {
        console.error('Error seeding roles:', error.message);
    } finally {
        mongoose.connection.close();
    }
};

seedRoles();



mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 60000 
})
    .then(() => {
        console.log('MongoDB connected');
        seedRoles();
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
