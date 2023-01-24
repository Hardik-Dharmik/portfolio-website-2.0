import React from "react";

function HeaderIcon({ Icon }) {
  return (
    <div className="hover:text-teal cursor-pointer">
      <Icon fontSize="medium" />
    </div>
  );
}

export default HeaderIcon;
