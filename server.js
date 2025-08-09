require('dotenv').config();
const express = require('express');
const app = express();
const schoolRoutes = require('./src/routes/schoolRoutes');

app.use(express.json());

app.use('/', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
