import React from "react";
import "./skills.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";

const skills = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const imgs = [
    images.git,
    images.wordpress,
    images.html,
    images.css,
    images.figma,
    images.python,
  ];

  const imges = [
    images.sass,
    images.javascript,
    images.three,
    images.react,
    images.typescript,
    images.cpp,
  ];
  return (
    <div className='app__skils' id='skills'>
      <h1>Skills</h1>

      <div className='app__container-icons'>
        <div className='app__container' style={{}}>
          <div>
            {imgs.map((img) => (
              <motion.div whileInView={{ x: [100, 0] }} className='item'>
                <img src={img} alt='icons' />
              </motion.div>
            ))}
          </div>
        </div>
        <div className='app__container' style={{}}>
          <div>
            {imges.map((img) => (
              <motion.div whileInView={{ x: [-100, 0] }} className='item'>
                <img src={img} alt='icons' />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
