import {gql} from '@apollo/client';

const GET_PRODUCTS = gql`
query getProducts {       
    products {
        id
        category
        name
        brand
        description
        picture
    }
}
` 


const GET_PRODUCT = gql`
    query getProduct($id: ID!){
        product(id:$id){
            id
            category
            name
            brand
            description
            picture
        }
    }
`


export { GET_PRODUCTS, GET_PRODUCT };