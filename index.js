require('dotenv').config();
const PORT = process.env.PORT || 6969;

var app = require('./app');

app.listen(PORT, () => {
    console.log(`🚂 Server is running on port ${PORT}!`);
});
