import React from "react";

export default function LandingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        className="absolute -z-20 h-[50%] w-full opacity-65 lg:h-full"
        style={{
          background: `url(/assets/bg.svg) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="px-4">{children}</div>
    </div>
  );
}
