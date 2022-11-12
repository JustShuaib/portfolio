const Error = () => {
  return (
    <svg viewBox="0 0 50 50" className="h-4 w-4 md:h-5 md:w-5">
      <circle style={{ fill: "#EF4444" }} cx="25" cy="25" r="25" />
      <polyline
        style={{
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: 5,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
        points="16,34 25,25 34,16"
      />
      <polyline
        style={{
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: 5,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
        points="16,16 25,25 34,34"
      />
    </svg>
  );
};

export default Error;
