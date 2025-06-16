"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

function URLState() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const color = searchParams.get("color");
  const size = searchParams.get("size");
  return (
    <div>
      <div
        className={` aspect-square ${
          color === "green"
            ? "bg-green-500"
            : color === "blue"
            ? "bg-blue-500"
            : "bg-red-500"
        }
         ${size === "sm" ? "h-30" : size === "lg" ? "h-64" : "h-48"}   
        `}
      ></div>
      <select
        onChange={(e) => {
          router.push(`/url?color=${color}&size=${e.target.value}`);
        }}
        name="color"
        id="color"
      >
        <option value="sm">sm</option>
        <option defaultChecked={true} value="md">
          md
        </option>
        <option value="lg">lgS</option>
      </select>
      <select
        onChange={(e) => {
          router.push(`/url?color=${e.target.value}&size=${size}`);
        }}
        name="color"
        id="color"
      >
        <option defaultChecked value="red">
          Red
        </option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
}

export default URLState;
