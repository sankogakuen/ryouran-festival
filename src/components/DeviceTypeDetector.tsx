import React, { useState, useEffect } from "react";

const DeviceTypeDetector: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div>スマートフォン向けのコンポーネント</div>
      ) : (
        <div>PC向けのコンポーネント</div>
      )}
    </div>
  );
};

export default DeviceTypeDetector;
