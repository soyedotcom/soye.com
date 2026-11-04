const Grid = () => {
  return (
    <div
      className="fixed inset-0 w-full min-h-screen bg-transparent pointer-events-none mix-blend-screen overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 1) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    ></div>
  );
};

export default Grid;
