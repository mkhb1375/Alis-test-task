"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";
import { useGetApi } from "../api/getApi";
import Spinner from "@/components/spinner";
import Card from "@/components/card";

export default function Products() {
  const [fechedData, setFetchedData] = useState<any>(null);
  const { data, isSuccess, refetch, isLoading, isError } = useGetApi(
    "products/?categoryId=3"
  );

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
      setFetchedData(data);
    }
  }, [isSuccess]);

  return (
    <div className="flex justify-between relative">
      <Sidebar />
      {isLoading && (
        <div className="absolute top-[40vh] right-[55vw]">
          <Spinner />{" "}
        </div>
      )}
      <div className="overflow-y-auto w-[85vw] ">
        {fechedData && (
          <ul
            className="flex flex-wrap gap-4  p-4 justify-center"
            style={{ direction: "ltr" }}
          >
            {fechedData.data.map((item: any, index: number) => (
              <li key={index}>
                <Card
                  title={item.title}
                  description={item.description}
                  url={item.images[0]}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
