import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  image: {
    width: "80%", // 画像の幅を100%に設定 height: "auto", // 高さは自動調整
    opacity: 0,
    transition: "opacity 2s ease-in", // 画像が現れるスピードを調整
  },
  visible: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: 1,
  },
});

interface FadeInImageProps {
  src: string;
  alt: string;
}

const FadeInImage: React.FC<FadeInImageProps> = ({ src, alt }) => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  // スクロールしたら画像が出現するロジック
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("image-container");
      if (element && element.getBoundingClientRect().top < window.innerHeight) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // -------------------------------

  return (
    <div style={{ height: "100vh" }}>
      <div
        id="image-container"
        className={`${classes.image} ${visible ? classes.visible : ""}`}
      >
        <img src={src} alt={alt} style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default FadeInImage;
