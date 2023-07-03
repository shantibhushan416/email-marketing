import axios from "axios";



export const authenticateSignup = async (data) => {
    console.log(data);
    try {
      return await axios.post(`/auth/signup`, data);
    } catch (error) {
      console.log("Error while calling signup api");
    }
  };
  
  export const authenticateLogIn = async (data) => {
    try {
      return await axios.post(`/auth/signin`, data);
    } catch (error) {
      console.log("Error while calling login api", error);
      return error.response;
    }
  };
  