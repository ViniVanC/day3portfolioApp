import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 
    before:rounded-full before:border-2 before:border-yellow before:left-[-50%] 
    before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <div
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-dark-gray"
        } w-3 h-3 rounded-full`}
        href={`#home`}
        onClick={() => setSelectedPage("home")}
      />
      <div
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-dark-gray"
        } w-3 h-3 rounded-full`}
        href={`#skills`}
        onClick={() => setSelectedPage("skills")}
      />
      <div
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-dark-gray"
        } w-3 h-3 rounded-full`}
        href={`#projects`}
        onClick={() => setSelectedPage("projects")}
      />
      <div
        className={`${
          selectedPage === "testimonials" ? selectedStyles : "bg-dark-gray"
        } w-3 h-3 rounded-full`}
        href={`#testimonials`}
        onClick={() => setSelectedPage("testimonials")}
      />
      <div
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-dark-gray"
        } w-3 h-3 rounded-full`}
        href={`#contact`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};
