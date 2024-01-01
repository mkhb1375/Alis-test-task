"use client";
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { update } from "../textInputSlice";

export default function Modal() {
  const [modalStatus, setModalStatus] = useState(false);
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector((state) => state.inputReducer.value);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.ctrlKey && event.shiftKey && event.key === "F2") {
        setModalStatus(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.ctrlKey && event.shiftKey && event.key === "F3") {
        const elementId = "text-field";
        const element = document.getElementById(elementId);

        if (element) {
          element.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeModal = () => {
    setModalStatus(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(update(event.target.value));
  };

  return (
    <div>
      {modalStatus && (
        <div className="my-modal " style={{ direction: "ltr" }}>
          <div className="bg-white w-fit mx-auto rounded-[1rem] p-[5vh] mt-[15vh] w-fit relative">
            <button
              className="absolute top-[0.5rem] right-[0.5rem] p-1"
              onClick={closeModal}
            >
              <img className="w-[30px]" src="/Icons/Close_Circle.svg" alt="" />
            </button>

            <input
              className="form-control"
              type="text"
              id="text-field"
              onChange={handleInputChange}
            />
            <p className="p-2">{inputValue}</p>
          </div>
        </div>
      )}
    </div>
  );
}
