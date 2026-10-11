const Grid = () => {
  return (
    <div
      className="w-full min-h-screen bg-[#161616]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.05) 2px, transparent 2px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 2px, transparent 2px)
        `,
        backgroundSize: "40px 40px",
      }}
    ></div>
  );
};

export default Grid;
