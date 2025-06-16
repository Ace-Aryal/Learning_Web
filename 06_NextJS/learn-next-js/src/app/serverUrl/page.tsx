import { redirect } from "next/navigation";
import React from "react";

async function URLStateServer({
  searchParams,
}: {
  searchParams: Promise<{
    color: "red" | "blue" | "green";
    size: "sm" | "md" | "lg";
  }>;
}) {
  const { color, size } = await searchParams;
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
          redirect(`/url?color=${color}&size=${e.target.value}`);
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
          redirect(`/url?color=${e.target.value}&size=${size}`);
        }}
        name="color"
        id="color"
      >
        <option defaultChecked value="red">
          {/* {replace select with links and it will work} */}
          Red
        </option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
}

export default URLStateServer;
