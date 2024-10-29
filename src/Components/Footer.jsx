import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full height-[120px] flex justify-center items-center gap-8">
        <a
          href="https://hcb.hackclub.com/donations/start/boston-for-stem"
          target="_blank"
        >
          Donate
        </a>
        <a href="mailto:chin.cc4609@gmail.com" target="_blank">
          Contact
        </a>
        <a href="https://www.instagram.com/bostonforstem" target="_blank">
          Instagram
        </a>
      </div>
      <p className="text-center">© 2024 Boston for STEM</p>
    </>
  );
};

export default Footer;
