import styles from "./Spinner.module.css";

const Spinner = ({ percentage = 0, radius = 200, thickness = 20 }) => {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - circumference / (100 / percentage);
  const padding = thickness / 2;

  return (
    <div className={styles.container}>
      <svg
        className={styles.spinner}
        height={(radius + padding) * 2}
        viewBox={`0 0 ${(radius + padding) * 2} ${(radius + padding) * 2}`}
        width={(radius + padding) * 2}
      >
        <circle
          className={styles.track}
          r={radius + padding}
          cx={radius + padding}
          cy={radius + padding}
        />
        <circle
          className={styles.progress}
          r={radius}
          cx={radius + padding}
          cy={radius + padding}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            strokeWidth: thickness,
          }}
        />
        <circle
          className={styles.inset}
          r={radius - padding}
          cx={radius + padding}
          cy={radius + padding}
        />
      </svg>
      <p className={styles.value}>
        {percentage}
        <span className={styles.percentage}>%</span>
      </p>
    </div>
  );
};

export default Spinner;
