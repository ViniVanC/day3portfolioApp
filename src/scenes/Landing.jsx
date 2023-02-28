import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SocialMediaIcons } from "../components/SocialMediaIcons";

export const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-fill gap-16 py-10"
    >
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 
              before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] 
              before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              src="assets/profile-image.png"
              className="hover:filter hover:saturate-200 transition duration-500 z10
                 w-full max-w-[400px] md:max-w-[600px]"
              alt="profile"
            />
          </div>
        ) : (
          <img
            src="assets/profile-image.png"
            className="hover:filter hover:saturate-200 transition duration-500 z10
             w-full max-w-[400px] md:max-w-[600px]"
            alt="profile"
          />
        )}
      </div>

      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playFair z-10 text-center md:text-start">
            Jane{" "}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute 
                before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Esper
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            placeat expedita repellendus. Doloribus ratione optio veniam ipsum
            facilis est maiores quasi aliquam repellat. Ducimus iure eum vitae
            dolore nulla laudantium.
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainBlue text-deep-blue rounded-sm py-3 px-7 
              font-semibold hover:bg-blue hover:text-while transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>

          <AnchorLink
            className="rounded-r-sm bg-gradient-rainBlue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500 
              w-full h-full flex items-center justify-center font-playFair px-10"
            >
              Let`s talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};
