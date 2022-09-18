import React from "react";
import "./about.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const about = () => {
  const abouts = [
    {
      title: "Web Designer",
      description: "I am good designer",
      imgUrl: images.about1,
    },
    {
      title: "Web Designer",
      description: "I am good designer",
      imgUrl: images.about2,
    },
    {
      title: "Web Designer",
      description: "I am good designer",
      imgUrl: images.about3,
    },
  ];
  return (
    <div className='app__about' id='about'>
      <div className='about__title'>
        <h1>Abouts</h1>
      </div>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default about;
