import React, { ReactNode } from "react";
import { SparklesCore } from "./ui/sparkles";

interface SparklesPreviewProps {
  children: ReactNode;
}

const SparklesPreview: React.FC<SparklesPreviewProps> = ({ children }) => {
  return (
    <div className="min-h-[100vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* Sparkles Background */}
      <div className="w-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default SparklesPreview;
