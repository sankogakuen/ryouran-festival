import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  children: React.ReactNode;
}

const SlideInFromRightComponent: React.FC<Props> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.6,
    rootMargin: "0% 0% 100% 0%", // 要素の一番上がページの一番したに来たら要素がフェードインされはじめる
  });

  const variants = {
    hidden: { x: -100, opacity: 0 }, // 右側に移動して非表示
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1, // アニメーションの時間を調整 (秒単位)
        ease: "easeInOut", // イージングを調整
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromRightComponent;
