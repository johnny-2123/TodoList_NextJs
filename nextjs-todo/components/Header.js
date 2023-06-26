import React from "react";

export default function Header() {
  return (
    <div className="sticky top-0 w-full bg-inherit left-0 flex items-center justify-between p-4 border-b boreder-solid border-white">
      <h1 className="text-3xl sm:text-6xl">TODO LIST</h1>
      <i className="fa-solid fa-user text-2xl sm:text-4xl duration-300 hover:opacity-40 cursor-pointer"></i>
    </div>
  );
}
