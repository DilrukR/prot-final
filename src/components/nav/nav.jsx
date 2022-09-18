import React, { useState } from "react";
import { motion } from "framer-motion";
import "./nav.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='app__nav'>
      <div className='app__nav-logo'></div>
      <ul>
        {["home", "about", "skills", "work", "contact"].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li className='app__flex p-text' key={`link-${item}`}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {" "}
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Nav;
