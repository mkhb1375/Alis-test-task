"use client";
import { useQuery } from "react-query";
import axios from "axios";

interface Props {
  secret: string;
  otp: string;
}

const OtpApi = ({ secret, otp }: Props) => {
  const requestData = {
    secret: secret,
    otp: otp,
  };

  return axios.post("https://demo1.metanext.biz/api/v1/auth/otp", requestData);
};

export const useOtpApi = ({ secret, otp }: Props) => {
  return useQuery({
    queryKey: ["OtpApi", secret, otp],
    queryFn: () => OtpApi({ secret, otp }),
    retry: 1,
    enabled: false,
  });
};
