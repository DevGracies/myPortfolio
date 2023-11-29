import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import bootstrap from "../assets/images/bootstrap.jpg";
import node from "../assets/images/nodejs.png";
import express from "../assets/images/express.png";
import github from "../assets/images/github.png";
import mongodb from "../assets/images/mongodb.png";
import cplus from "../assets/images/c++.png";
import java from "../assets/images/java.png";
import python from "../assets/images/python.png";
import tailwind from "../assets/images/tailwind.png";
import postman from "../assets/images/postman.png";
const Stack = () => {
  return (
    <div className="section" id="stack">
      <div className="container mx-auto">
        <div>
          <div>
            <h1 className="font-bold text-3xl">FrontEnd</h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-5"
            >
              <div>
                <img src={html} alt="" className=" w-12 h-12 rounded" />
                <p>HTML</p>
              </div>
              <div>
                <img src={css} alt="" className=" w-12 h-12 rounded" />
                <p>CSS</p>
              </div>
              <div>
                <img src={javascript} alt="" className=" w-12 h-12 rounded" />
                <p>JAVASCRIPT</p>
              </div>
              <div>
                <img src={bootstrap} alt="" className=" w-12 h-12 rounded" />
                <p>BOOTSTRAP</p>
              </div>
              <div>
                <img src={tailwind} alt="" className=" w-12 h-12 rounded" />
                <p>TAILWIND</p>
              </div>
              <div>
                <img src={react} alt="" className=" w-12 h-12 rounded" />
                <p>REACT</p>
              </div>
            </motion.div>
          </div>
          <div>
            <h1 className="font-bold text-3xl">Backend</h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-5"
            >
              <div>
                <img src={node} alt="" className=" w-12 h-12 rounded" />
                <p>NODE</p>
              </div>
              <div>
                <img src={express} alt="" className=" w-12 h-12 rounded" />
                <p>EXPRESS</p>
              </div>
              <div>
                <img src={mongodb} alt="" className=" w-12 h-12 rounded" />
                <p>MONGODB</p>
              </div>
            </motion.div>
          </div>
          <div>
            <h1 className="font-bold text-3xl">Other Programming languages</h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-5"
            >
              <div>
                <img src={cplus} alt="" className=" w-12 h-12 rounded" />
                <p>C++</p>
              </div>
              <div>
                <img src={java} alt="" className=" w-12 h-12 rounded" />
                <p>JAVA</p>
              </div>
              <div>
                <img src={python} alt="" className=" w-12 h-12 rounded" />
                <p>PYTHON</p>
              </div>
            </motion.div>
          </div>
          <div>
            <h1 className="font-bold text-3xl">Other tools</h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-5"
            >
              <div>
                <img src={github} alt="" className=" w-12 h-12 rounded" />
                <p>GITHUB</p>
              </div>
              <div>
                <img src={postman} alt="" className=" w-12 h-12 rounded" />
                <p>POSTMAN</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
