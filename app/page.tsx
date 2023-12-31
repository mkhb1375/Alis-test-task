"use client";
import PhoneNumber from "./verification/login/page";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <main className="">
      <PhoneNumber />
    </main>
  );
}
