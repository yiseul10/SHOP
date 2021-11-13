import axios from "axios";

const BASE_URL = "http://pvpvpvpvp.gonetis.com:8080/sample/products/";

export const publicRequest = axios.create({
  baseURL: BASE_URL
});
