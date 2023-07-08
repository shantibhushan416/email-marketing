import { getLocalStorageData, setLocalStorageData } from "../utility/Utility";
import HttpService from "./httpService";

const authService = new HttpService({ service: "/auth" });

export const signup = async (data) => {
    const response = await authService.post("/signup", data);

    if (response?.statusCode === 200) {
        /// redirect to signin
    } else {
        //toaster
    }
};

export const signin = async (data) => {
    const response = await authService.post("/signin", data);

    if (response?.statusCode === 200) {
        const { user, accessToken } = response;
        localStorage.setItem("accessToken", accessToken);
        ///
    } else {
        //toaster
    }
    console.log(response);
};