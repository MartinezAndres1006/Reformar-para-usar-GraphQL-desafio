import { buildSchema } from "graphql";
const productsql =buildSchema( `
 type Query {
    getAllProducts: [Product]
}
type Mutation {
    addProduct(articulo: String,precio: Float,imagen:String ): Product
    deleteProduct(id: ID!): Product
    updateProduct(id: ID!, input: ProductInput): Product
}
type Product {
    _id: ID!
    articulo: String!
    precio: Float!
    imagen:String!
}
input ProductInput {
    articulo: String!
    precio: Float!
    imagen:String!
}




`);

export default productsql