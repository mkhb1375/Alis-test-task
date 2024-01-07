"use client";
import React, { useEffect, useState } from "react";
import { useOtpApi } from "@/app/api/otp-api";
import OtpInput from "react-otp-input";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Button from "@/app/components/button";
import ProgressBar from "@/app/components/ProgressBar";
import Photo from "@/app/components/Photo";

export default function Otp() {
  const [otp, setOtp] = useState("");

  const secret = Cookies.get("secret") || "";
  const phone = Cookies.get("number") || "";
  const { data, refetch, isSuccess, isError, isLoading } = useOtpApi({
    secret,
    otp,
  });
  const [timer, setTimer] = useState(60);
  const [enabled, setEnabled] = useState(false);
  const router = useRouter();

  function handleClick() {
    if (otp.length === 5) {
      // refetch();
      console.log(otp)
    }
  }

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
    if (timer < 1) {
      setEnabled(true);
    }
  }, [timer]);

  useEffect(() => {
    if (isSuccess && data) {
      Cookies.set("secret", data.data.data.token.access_token);

      router.push("/products");
    }
  }, [isSuccess]);

  function handleRetry() {
    if (enabled) {
      router.push("/verification/login");
    }
  }

  return (
    <div className=" ">
      <Photo />
      <h1 className="text-center mt-[1.875rem] font-[800]">
        ورود-ثبت&nbsp;نام
      </h1>
      <p className="text-center mt-[1.875rem] font-[400]">
        درخواست به شماره <span className="mx-[5px] font-[600]">{phone}</span>{" "}
        ارسال شد
      </p>
      {isError && (
        <p className="text-center mt-[1.25rem] font-[400] text-[red]">
          کد را مجدد بررسی کنید
        </p>
      )}
      <form>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={5}
          shouldAutoFocus={true}
          containerStyle="block mx-auto justify-between w-[20vw] flex-row-reverse "
          inputStyle="border-b-4 border-blue-400
    outline-transparent mt-[1.875rem] focus-border-b-4 focus-border-blue-700 mb-[1.25rem]"
          renderInput={(props) => <input {...props} dir="ltr" />}
        />
        <p className="text-center mt-[1.25rem] relative">
          کد را دریافت نکردید؟
          <span
            onClick={handleRetry}
            className={`${
              enabled ? "text-[blue] cursor-pointer" : "text-grayed"
            } `}
          >
            {" "}
            دریافت مجدد کد.
          </span>
        </p>
        <div
          className={`${
            timer === 0 ? "opacity-[0]" : ""
          } w-[22vw] mt-[1.25rem]  block mx-auto`}
        >
          <ProgressBar duration={60000} selectedIdx={0} idx={0} />
        </div>
        <Button
          isLoading={isLoading}
          enabled={otp.length === 5}
          callback={handleClick}
        />
      </form>
    </div>
  );
}
