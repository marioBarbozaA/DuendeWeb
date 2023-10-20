// corsOptions.js
const corsOptions = {
    origin: 'http://localhost:3000', // Update to match your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  
  module.exports = corsOptions;
  