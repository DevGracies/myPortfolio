import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Stack = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="section" id="stack" ref={ref}>
      <div className="container mx-auto">
        <div>
          <p>
            My name is Grace Adegunle, i'm a computer science student of
            Adekunle Ajasin University Akungba Akoko, Ondo State Nigeria. I'm a
            web developer that create responsive website with frontend to build
            top-quality code for diverse projects.
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Stack;
