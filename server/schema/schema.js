// const { project, clients } = require('../sampleData')
const Client = require('../models/Client')

const { GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql')

// Schema
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
})

// Queries for getting the user information
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {

        // Query For getting all client information in DB
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                return Client.find();
            }
        },
        // Query For getting Single client information with ID
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Client.findById(args.id);
            },
        }
    }
});


// Mutation(adding data to DB)
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addClient: {
            type: ClientType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLNonNull(GraphQLString) },
                phone: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const client = new Client({
                    name: args.name,
                    email: args.email,
                    phone: args.phone
                });
                return client.save();
            }
        },

        // Delete a client from the database
        deleteClient: {
            type: ClientType,
            args: {
                id: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                return Client.findByIdAndRemove(args.id)
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})