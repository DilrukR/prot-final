import React from "react";
import "./Header.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <section className='app__header' id='home'>
      <div className='app__title'>
        <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }}>
          <h1>
            Hello! <br />I am Rishan Dilruk <br />
            <Typewriter
              options={{
                strings: ["Web Designer", "Web Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </motion.div>
        <div className='app__socials'>
          <a href=''>
            <FaFacebook />
          </a>
          <a href=''>
            <FaInstagram />
          </a>
          <a href='https://www.linkedin.com/in/rishan-dilruk-6019481a4/'>
            {" "}
            <FaLinkedin />
          </a>
          <a href='https://github.com/DilrukR'>
            <FaGithub />
          </a>
        </div>
      </div>

      <div className='app__image-hero'>
        <motion.div
          whileInView={{ scale: [0.8, 1] }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img src={images.hero} alt='' />
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
