import React from "react";

function EducationItem({
  year,
  score,
  name,
  institutionName,
  time,
  board,
  isCollege,
}) {
  return (
    <div className="border border-teal rounded-lg my-5 px-3 py-2 sm:w-2/5 mx-5 hover:shadow-md hover:shadow-emerald-700 cursor-pointer">
      <h1 className="text-2xl text-emerald-500 text-semibold">{year}</h1>

      <p className="font-mono text-gray-400">
        {time} {!isCollege && `(${name})`}
      </p>

      <p className="font-mono text-yellow-200 text-bold">{score}</p>

      {isCollege && <p className="text-gray-400">{name}</p>}

      <p className="text-gray-400">{institutionName}</p>

      {board && <p className="text-gray-400">{board}</p>}
    </div>
  );
}

export default EducationItem;
