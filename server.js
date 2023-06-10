const express = require('express');
const app = express();

const fileRoutes = require('./routes/files');
app.use('/api/files', fileRoutes);

app.listen(8080, () => console.log('NovaDrive API on 8080'));