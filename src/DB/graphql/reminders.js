import { productosDao } from "../../Services/daos/daosPadre.js";


export const resolvers = {
  Query: {
    getAllProducts: () => {
      return productosDao.getAll();
    },
  },
  Mutation: {
    addProduct: (data) => {
      return productosDao.create(data);
    },
    deleteProduct: (id) => {
      return productosDao.delete(id);
    },
    updateProduct: ( id,data ) => {
      return productosDao.findByIdAndUpdate(id, data);
    },
  },
};