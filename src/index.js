const { config } = require('dotenv');
const server = require('../src/server');

config();

const PORT = process.env.PORT || 3001;

server.listen(PORT, console.log(` Listening on port : ${PORT}`));

