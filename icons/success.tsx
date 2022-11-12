const Success = () => {
  return (
    <svg viewBox="0 0 50 50" className="h-4 w-4 md:h-5 md:w-5">
      <circle style={{ fill: "#25AE88" }} cx="25" cy="25" r="25" />
      <polyline
        style={{
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: 6,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
        }}
        points="38,15 22,33 12,25"
      />
    </svg>
  );
};

export default Success;
