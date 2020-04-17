const server = require('./server.js');

const PORT = process.env.PORT || 4000;

server.lister(PORT, () => {
    console.log(`listeting port:${PORT}`);
})