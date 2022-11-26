const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config()
const routes = require('./routes')
const path = require("path");
mongoose.connect(process.env.DB_URI)

//

app.use(cors());
app.use(express.json())

//

app.use('/api', routes)
app.use(express.static(path.join(__dirname, '../client', 'build')));
app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
})

//

const port = process.env.PORT || 5005;
app.listen(port, () => `Server running on PORT: ${port}`)
