import React from "react";
import { images } from "../../constants";
import "./quote.scss";
import { motion } from "framer-motion";

const quote = () => {
  return (
    <div className='app__quote'>
      <motion.h1 whileInView={{ opacity: [0, 1], x: [-100, 0] }}>
        "Good Design means Good Business <br />I can do it for you"
      </motion.h1>

      <div>
        <motion.img
          src={images.quote}
          alt=''
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default quote;
