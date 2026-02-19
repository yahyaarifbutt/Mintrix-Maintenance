export default function BackgroundGrid() {
  return (
    <>
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div
        className="fixed inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(#D1AB43 1px, transparent 1px), linear-gradient(90deg, #D1AB43 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />
    </>
  );
}
