import axios from "axios";
import apiUrl from "./apiUrl";

const authAxios = () => axios.create({
    baseURL: apiUrl,
    data: {},
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',   
    },
  });
  
  export default authAxios;