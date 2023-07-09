import { toast } from 'react-toastify';

import HttpService from "./httpService";

const authService = new HttpService({ service: "/auth" });




export const signup = async (data) => {
    
    return await authService.post("/signup", data);

    if (response?.statusCode === 200) {
        /// redirect to signin
    } else {
        //toaster
    }
};

export  const signin = async (data) => {
    return await authService.post("/signin", data);

}