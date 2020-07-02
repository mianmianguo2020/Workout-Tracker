const express = require('express');
// require('./seeders/seed');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/routes.js')(app);
let PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('App listening on port: ' + PORT);
})