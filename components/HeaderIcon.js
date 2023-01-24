import React from "react";

function HeaderIcon({ Icon, href }) {
  return (
    <div className="hover:text-teal cursor-pointer">
      <a href={href} target="_blank">
        <Icon fontSize="medium" />
      </a>
    </div>
  );
}

export default HeaderIcon;
