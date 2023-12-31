"use client";
import axios from "axios";
import { useQuery } from "react-query";

const postNumberApi = (mobile: string) => {
  const requestData = {
    type: "mobile",
    mobile_prefix: "+98",
    mobile: mobile,
  };

  return axios.post(
    "https://demo1.metanext.biz/api/v1/auth/request",
    requestData
  );
};
export const usePhoneNumberApi = (mobile: string) => {
  return useQuery({
    queryKey: ["PhoneNumberApi", mobile],
    queryFn: () => postNumberApi(mobile),
    enabled: false,
    cacheTime: 60000,
    retry: 1,
  });
};
