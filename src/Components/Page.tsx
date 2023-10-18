import * as React from "react";

interface props {
  children: React.ReactNode;
  sectionId: string;
}

const Page: React.FC<props> = ({ children, sectionId }) => {
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
  return (
    <div style={containerStyle}>
      <div style={item}>
        <section id={sectionId}>{children}</section>
      </div>
    </div>
  );
};

export default Page;
