const Grid = () => {
  return (
    <div
      className="absolute z-5 w-full min-h-screen bg-transparent overflow-hidden"
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
