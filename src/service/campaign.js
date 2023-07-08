import HttpService from "./httpService";

const campaignService = new HttpService({ service: "/campaign" });

export const sendCampaignEmail = async (data,cb) => {
    const response = await campaignService.post("", data);

    if (response?.statusCode === 200) {
        cb?.(response);
        console.log(response)
        return response;
    } else {
        //toaster
    }
};