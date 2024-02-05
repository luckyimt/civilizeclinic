import { useRef } from "react";
import "../parallax.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <>
    <section id="home">
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "CIVILIZE CLINIC" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "../assets/images/planets.png" : "../assets/images/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x:xBg }} className="stars"></motion.div>
    </div>
    </section>
    </>
  );
};

export default Parallax;
