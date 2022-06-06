// Express web server framework
const express = require('express');
// Start the Apollo server with the GraphQL schema and the Express server framework 
const { ApolloServer } = require('apollo-server-express');

// Node.js path module
const path = require('path');

// Express web server api framework
const { typeDefs, resolvers } = require('./schemas'); // GraphQL schema and resolvers for the API server 
const { authMiddleware } = require('./utils/auth'); // Authentication middleware

// MongoDB connection
const db = require('./config/connection');

// Port to run the server on
const PORT = process.env.PORT || 3001;

// Create a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer(
  {
    typeDefs, // GraphQL schema
    resolvers, // GraphQL resolvers
    context: authMiddleware, // GraphQL context
    playground: { // GraphQL playground settings
      settings: { // GraphQL playground settings  (https://www.apollographql.com/docs/apollo-server/features/playground/) 
        'editor.theme': 'dark' | 'light', // GraphQL playground theme  (light) 
        'editor.cursorShape': 'line', // 'line' | 'block' | 'underline',
        'editor.fontFamily': `'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco'`,  // string
        'editor.fontSize': 14, // number 
        'editor.reuseHeaders': true, //boolean, new tab reuses headers from last tab
        'general.betaUpdates': false, //boolean
        'prettier.printWidth': 80, // number
        'prettier.tabWidth': 2, //number
        'prettier.useTabs': false, //boolean
        'request.credentials': 'omit', //'omit' | 'include' | 'same-origin'
        'request.globalHeaders': true, // enables automatic schema polling { [key: string]: string },
        'schema.polling.enable': true, // enables automatic schema polling boolean,
        'schema.polling.endpointFilter': '*localhost*', // string, endpoint filter for schema polling
        'schema.polling.interval': 2000, // schema polling interval in ms number,
        'schema.disableComments': false, // boolean, disables schema comments
        'tracing.hideTracingResponse': true, //boolean,
        'tracing.tracingSupported': true,  // set false to remove x-apollo-tracing header from Schema fetch request
      },
    },
  }
);

// Create a new instance of an Express server
const app = express();

// Parse incoming requests with JSON payloads
app.use(express.urlencoded({ extended: false }));
// app is the Express serve is the JSON payload
app.use(express.json());

// Serve up static assets
// Serve up production assets if in production mode (e.g. on Heroku)
if (process.env.NODE_ENV === 'production') {  // If the NODE_ENV is production (e.g. on Heroku)
  // Set static folder to build folder (e.g. /client/build) 
  app.use(express.static(path.join(__dirname, '../client/build')));
} else {
  // Serve up static assets if in development mode
  app.use(express.static(path.join(__dirname, '../client/public')));
}
// app get request to * client build index html file 
app.get('*', (_req, res) => { 
  // Serve up production assets (built client) from the /build directory (e.g. /build/index.html)
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Connect Apollo server to Express server instance 
const startApolloServer = async () => {
  // Connect Apollo server to Express server instance
  server.applyMiddleware({ app, path: '/graphql' });

  // server middleware to express
  server.applyMiddleware({
    app,
    path: '/graphql',
    cors: false,
    bodyParserConfig: false, // disable bodyParser
  });


  await db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`); //  Log to the console that the server is running on the specified port 
      console.log(`Server started on port ${PORT}`); // Log to the console that the server is running on the specified port
      console.table(`GraphQL server info: ${server.graphqlPath} ${server.subscriptionsPath}  ${server.playgroundPath} `); // Log a message to the console with GraphQL server info 
      console.log(`🚀 GraphQL Server ready at https://localhost:${PORT}${server.graphqlPath}`); // Log a message to the console with GraphQL server info 
      console.log(`Use GraphQL at https://localhost:${PORT}${server.graphqlPath}`); // Log a message to the console with GraphQL server info
    }); // Listen on the specified port
  });
};

startApolloServer(typeDefs, resolvers); // Call the async function to start the server (pass in the GraphQL schema) 
