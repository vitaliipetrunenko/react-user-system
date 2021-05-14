const express = require('express');
const port = process.env.PORT || 3000
const app = express();
const path = require('path')
const apiRouters = require('./api-routers.js')



app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

app.use('/api', apiRouters);



app.listen(port, () => console.log('API is running on port', port));


