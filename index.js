const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const server = new ApolloServer({
	cors: true,
	typeDefs,
	resolvers,
});

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "../dist")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

server.applyMiddleware(app);

app.listen(PORT, () => console.log(`🚀  Server ready at 5000`));
