const authAxios = () => axios.create({
    baseURL: apiUrl,
    data: {},
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',   
    },
  });
  
  export default authAxios;