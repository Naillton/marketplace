import axios from "axios";

const APi = axios.create({
  baseURL: 'http://10.0.2.2:3000',
});

export default APi;