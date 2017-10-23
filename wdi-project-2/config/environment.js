// const port = process.env.PORT || 3000;
// const env = process.env.NODE_ENV || 'development';
// const dbURI = process.env.MONGODB_URI || `mongodb://localhost/`;


module.exports = {
  port: process.env.PORT || 3000,
  dbUri: process.env.MONGODB_URI || 'mongodb://localhost/project-2',
  sessionSecret: process.env.SESSION_SECRET || 'YghT5s617/1{%sDt'
};

// module..exports = { port, env, dbURI };
