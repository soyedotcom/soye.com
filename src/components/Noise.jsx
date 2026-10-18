const Noise = ({ opacity = "opacity-[0.1]" }) => {
  const noise_layer =
    "data:image/svg+xml,%3C!-- svg: first layer --%3E%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='10' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E";
  return (
    <div
      className={`fixed inset-0 pointer-events-none mix-blend-screen overflow-hidden ${opacity}`}
      style={{ backgroundImage: `url("${noise_layer}")` }}
    />
  );
};

export default Noise;
