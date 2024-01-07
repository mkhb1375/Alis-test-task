"use client";
import { useState, useEffect } from "react";
import { usePhoneNumberApi } from "@/app/api/phone-number-api";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Photo from "@/app/components/Photo";
import Button from "@/app/components/button";
export default function PhoneNumber() {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [enabled, setEnabled] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { data, refetch, isLoading, isSuccess, isError } =
    usePhoneNumberApi(phoneNumber);

  useEffect(() => {
    if (isError) {
      setHasError(true);
    }
  }, [isError]);

  useEffect(() => {
    if (phoneNumber?.length >= 10 && phoneNumber?.length < 12) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [phoneNumber]);

  const handleButtonClick = () => {
    if (enabled) {
      // refetch();
            Cookies.set("number", phoneNumber);

            router.push("/verification/otp");

    }
  };
  useEffect(() => {
    if (isSuccess && data) {
      const myData = data.data.data;
      // Cookies.set("secret", myData.secret);
      // Cookies.set("number", phoneNumber);

      // router.push("/verification/otp");
    }
  }, [isSuccess]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const cleanedPhoneNumber = e.target.value.replace(/\D/g, "");
    setPhoneNumber(cleanedPhoneNumber);
  }
  return (
    <div className="relative ">
      <Photo />

      <h1 className="text-center mt-[1.875rem] font-[800]">
        ورود-ثبت&nbsp;نام
      </h1>
      {!hasError && (
        <p className="text-center mt-[1.875rem] font-[400]">
          لطفا شماره تلفن همراه خود را وارد کنید.
        </p>
      )}
      {hasError && (
        <p className="text-center mt-[1.875rem] font-[400] text-[red]">
          ارسال درخواست نا موفق بود لطفا شماره را بررسی کنید
        </p>
      )}
      <form>
        <input
          className="ltr text-left mx-auto block border-b-4 border-blue-400
    outline-transparent mt-[1.875rem] focus-border-b-4 focus-border-blue-700 "
          placeholder="شماره همراه"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={phoneNumber}
          onChange={handleChange}
          name=""
          id=""
          autoFocus={true}
        />
        <Button
          isLoading={isLoading}
          enabled={enabled}
          callback={handleButtonClick}
        />
      </form>
    </div>
  );
}
