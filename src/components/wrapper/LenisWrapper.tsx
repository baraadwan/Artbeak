import ReactLenis from "lenis/react";
import React from "react";

const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
      {children}
    </ReactLenis>
  );
};

export default LenisWrapper;
