const express = require('express');
// require('./seeders/seed');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/routes.js')(app);

app.listen(3000, () => {
    console.log('App listening on port: ' + 3000);
})