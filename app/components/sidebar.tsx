"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      title: "محصولات",
      route: "/products",
      image: "/Icons/shopping-bag.svg",
      selectedImage: "/Icons/shopping-bag-selected.svg",
    },
    {
      title: "کاربران",
      route: "/users",
      image: "/Icons/users.svg",
      selectedImage: "/Icons/users-selected.svg",
    },
  ];

  return (
    <div className="bg-secondary  px-2 lg:px-0 py-[3.5rem] max-w-[32px] lg:max-w-full h-[120vh]  w-[50px]   lg:w-[18vw]  2xl:w-[15vw] ">
      <h1 className="hidden lg:block text-white text-center font-[800] border-border pb-6 border-b  text-[1.5rem]">
        ALIS
      </h1>

      <ul className="mt-[3rem]  border-border  lg:pb-6 border-b ">
        {routes.map((ele, idx) => {
          return (
            <li
              className={`flex gap-2  lg:pl-[2rem] mb-[2rem] cursor-pointer  lg:hover:bg-border
             rounded-[1rem] py-3 md:px-1 lg:px-8 ${
               pathname === ele.route
                 ? "font-[800] lg:font-[400] bg-white lg:bg-border"
                 : ""
             }`}
              onClick={() => {
                router.push(ele.route);
              }}
              key={idx}
            >
              <img
                src={ele.selectedImage}
                className={`${pathname === ele.route ? "" : "hidden"}`}
              />
              <img
                src={ele.image}
                className={`${pathname === ele.route ? "hidden" : ""}`}
              />

              <p
                className={`font-[500]  ${
                  pathname === ele.route
                    ? "hidden lg:block  text-primary font-[700]"
                    : "hidden lg:block text-white "
                }`}
              >
                {ele.title}{" "}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
