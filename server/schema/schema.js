const { projects, clients } = require('../sampleData.js');


//Mongoose Models
const Product = require('../models/Product');
const Detail = require('../models/Detail');


const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLList
} = require ('graphql');

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: ()=>({
        id: { type : GraphQLID},
        category: { type : GraphQLString},
        name: { type : GraphQLString},
        brand: { type : GraphQLString},
        description: { type : GraphQLString},
        picture: { type : GraphQLString},
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        products:{
            type: new GraphQLList(ProductType),
            resolve(parent, args){
                return Product.find(); //Find all Products List
            }
        },
        product: {
            type:   ProductType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return Product.findById(args.id)
            },
        },
    },
});



module.exports = new GraphQLSchema({
    query: RootQuery,
});

