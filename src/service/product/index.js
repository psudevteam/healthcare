import axios from "../axios/index.js";

export const getProduct = async () => {
  return await axios.get("product/get.php/");
};
