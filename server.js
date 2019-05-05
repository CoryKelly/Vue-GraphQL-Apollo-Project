const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

// Import typeDefs and resolvers
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

//Import Enviroment variables and mongoose models
require("dotenv").config({ path: "variables.env" });
const User = require("./models/User");
const Post = require("./models/Post");

//Connect to Mongo DataBase
mongoose.set("useCreateIndex", true);
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("👍 -> DB Connected..YAY!"))
  .catch(err => console.log(`😢 -> Looks like there was an ${err}`));

//Create Apollo/GraphQL server using typeDefs, resolvers, and context objects
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post
  }
});

server.listen().then(({ url }) => {
  console.log(`👍 -> Server listening ${url}`);
});
