require('dotenv').config();
const express = require('express');
const connectDB = require('./data/database');
const cookieParser = require('cookie-parser');
 

const app = express();
app.use(express.json());
app.use(cookieParser()); 


connectDB();


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/roles', require('./routes/roleRoutes'));


app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
