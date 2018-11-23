const express=require('express');
const graphqlHTTP=require('express-graphql');
const schema=require('./schema/schema');
const mongoose=require('mongoose');
const cors=require('cors');



const app=express();

//allow cross-origin requests
app.use(cors());

//connect to mlab database
//make sure to replace my db string & creds whit your own
mongoose.connect('mongodb://cards:test123@ds039115.mlab.com:39115/gql-gc');
mongoose.connection.once('open',()=>{
  console.log('connect to database')
});

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:true
}));

app.listen(4000,()=>{
  console.log('now listening for requests on port 4000');
});
