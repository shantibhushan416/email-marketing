import axios from "axios";

const url = "http://13.233.36.42:8080"


export const authenticateSignup = async (data) => {
  console.log(data)
  const {name, email, password, role, mobile} = data;
  console.log(name)
  const body = {name, email, password, role, mobile}

    try {
      return await axios.post(`${url}/auth/signup`, body);
    } catch (error) {
      console.log("Error while calling signup api");
    }
  };
  
  export const authenticateLogIn = async (data) => {

    const {uname,password}  = data;
    const body = {uname,password}
    try {
      return  await axios.post(`${url}/auth/signin`, data);

    } catch (error) {
      console.log("Error while calling login api", error);
      return error.response;
    }
  };
  