import {
    deleteProduct,
    updateProduct,
    addProduct,
  } from "./productRedux";
  
  
  
  export const deleteProduct = async (id, dispatch) => {
    try {
      dispatch(deleteProduct(id));
    } catch (err) {
      console.log(err)
    }
  };
  
  export const updateProduct = async (id, product, dispatch) => {
    try {
      dispatch(updateProduct({ id, product }));
    } catch (err) {
      console.log(err)
    }
  };
  export const addProduct = async (product, dispatch) => {
    try {
      const res = await userRequest.post(`/products`, product);
      dispatch(addProduct(res.data));
    } catch (err) {
      console.log(err)
    }
  };