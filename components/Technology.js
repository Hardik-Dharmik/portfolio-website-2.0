import React from "react";

function Technology({ Icon, name }) {
  return (
    <div className="flex flex-col items-center text-gray-200 hover:text-teal cursor-pointer">
      <Icon className="" size="2.5rem" />
      <p className=" mt-2 text-xl font-mono">{name}</p>
    </div>
  );
}

export default Technology;
