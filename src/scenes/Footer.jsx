import React from "react";
import { SocialMediaIcons } from "../components/SocialMediaIcons";

export const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />

        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playFair font-semibold text-2xl text-yellow">
            JANE ESPER
          </p>
          <p className="font-playFair text-md text-yellow">
            ©2023 ESPER. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
