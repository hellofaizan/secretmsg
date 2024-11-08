export default async function WaitlistLayout({
  children,
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
