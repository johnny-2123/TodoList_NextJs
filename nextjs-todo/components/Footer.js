import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center items-center gap-3 py-3">
      {/* <a href="" target="_blank">
        <i className="fa-brands fa-instagram duration-300 hover:opacity-30 cursor-pointer"></i>
      </a> */}
      <a href="https://github.com/johnny-2123" target="_blank">
        <i className="fa-brands fa-linkedin duration-300 hover:opacity-30 cursor-pointer"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/johnny-avila-0512aa164/"
        target="_blank"
      >
        <i className="fa-brands fa-github duration-300 hover:opacity-30 cursor-pointer"></i>
      </a>
    </div>
  );
}
