
//Mongoose Models
const Product = require('../models/Product');
const Detail = require('../models/Detail');


const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLList,
    GraphQLNonNull
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


//Mutations
const myMutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        //Add Product
        addProduct:{
            type: ProductType,
            args: {
                category: { type: GraphQLNonNull(GraphQLString)},
                name: { type: GraphQLNonNull(GraphQLString)},
                brand: { type: GraphQLNonNull(GraphQLString)},
                description: { type: GraphQLNonNull(GraphQLString)},
                picture: { type: GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                const product = new Product({
                    category: args.category,
                    name: args.name,
                    brand: args.brand,
                    description: args.description,
                    picture: args.picture
                });
                return product.save();
            }
        },
        //Delete product
        deleteProduct:{
            type: ProductType,
            args:{
                id : { type: GraphQLNonNull(GraphQLID)}
            },
            resolve(parent, args){
                return Product.findByIdAndRemove(args.id);
            }
        },
        //Update product
        updateProduct:{
            type: ProductType,
            args:{
                id: { type: GraphQLNonNull(GraphQLID)},
                category: {type : GraphQLNonNull(GraphQLString)},
                name: {type : GraphQLNonNull(GraphQLString)},
                brand: {type : GraphQLNonNull(GraphQLString)},
                description: {type : GraphQLNonNull(GraphQLString)},
                picture: {type : GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                return Product.findByIdAndUpdate(args.id,
                        {
                            $set:{
                                category: args.category,
                                name: args.name,
                                brand: args.brand,
                                description: args.description,
                                picture: args.picture
                            }
                        },
                        {
                            new: true //if ID/product is not present, it will save as new product
                        }
                    );
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: myMutation,
});

