//axios.js

import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACK_END_SERVER_URL + "/api",
});

export default instance;
