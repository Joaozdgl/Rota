const express = require('express');
const routes = require('./src/controlers/routes');

const app = express();
app.use(routes);

app.listen('1325',()=>{
    console.log('servidor on na porta 1325');
})


