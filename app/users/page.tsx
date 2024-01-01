"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/app/components/sidebar";
import { useGetApi } from "../api/getApi";
import Spinner from "@/app/components/spinner";
import Card from "@/app/components/card";

export default function Products() {
  const [fechedData, setFetchedData] = useState<any>(null);
  const { data, isSuccess, refetch, isLoading, isError } = useGetApi("users");

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data) {
      setFetchedData(data);
    }
  }, [isSuccess]);

  return (
    <div className="flex justify-between relative ">
      <Sidebar />
      {isLoading && (
        <div className="absolute top-[40vh] right-[55vw] ">
          <Spinner />{" "}
        </div>
      )}
      <div className=" w-[85vw] overflow-y-scroll h-[85vh] ">
        {fechedData && (
          <ul
            className="flex flex-wrap gap-4  p-4 justify-center "
            style={{ direction: "ltr" }}
          >
            {fechedData.data.map((item: any, index: number) => (
              <li key={index}>
                <Card
                  title={item.name}
                  description={item.email}
                  url={item.avatar}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
