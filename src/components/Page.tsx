import React from "react";
import { useInView } from "react-intersection-observer";

interface Page {
  children: React.ReactNode;
}

const Page: React.FC<Page> = ({ children }) => {
  const containerStyle: React.CSSProperties = {
    minHeight: "100vh", // ブラウザの縦の高さ分の広さを確保
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%", // 幅を60%に設定
  };

  const item: React.CSSProperties = {
    width: "80%", // 幅を60%に設定
  };

  const { ref, inView } = useInView({
    rootMargin: "-50px",
    triggerOnce: false,
  });

  return (
    <div style={containerStyle} ref={ref}>
      {inView && (
        <div style={item}>
          <div className="animate__animated animate__fadeInUp">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Page;
