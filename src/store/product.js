const { defineStore } = Pinia;
import { getProduct } from "../service/product/index.js";

export const useProductStore = defineStore("product", {
  state: () => {
    return {
      product: [],
    };
  },

  getters: {
    getProduct(state) {
      return state.product;
    },
  },

  actions: {
    async fetchAllProduct() {
      try {
        const resProduct = await getProduct();
        this.product = resProduct;
        return resProduct;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
