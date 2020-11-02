import styles from "./Spinner.module.css";

const Spinner = ({ percentage = 0, radius = 200, thickness = 12 }) => {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - circumference / (100 / percentage);
  const padding = thickness / 2;

  return (
    <div
      className={`${styles.container} react-progress-spinner-container`}
      style={{
        fontSize: `${radius}px`,
      }}
      role="progressbar"
      aria-busy={percentage < 100}
      aria-live="assertive"
      aria-valuenow={percentage}
      data-testid="spinner"
    >
      <svg
        className={`${styles.spinner} react-progress-spinner-spinner`}
        height={(radius + padding) * 2}
        viewBox={`0 0 ${(radius + padding) * 2} ${(radius + padding) * 2}`}
        width={(radius + padding) * 2}
        aria-hidden="true"
      >
        <circle
          className={`${styles.track} react-progress-spinner-spinner`}
          r={radius + padding}
          cx={radius + padding}
          cy={radius + padding}
        />
        <circle
          className={`${styles.progress} react-progress-spinner-progress`}
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
          className={`${styles.inset} react-progress-spinner-inset`}
          r={radius - padding}
          cx={radius + padding}
          cy={radius + padding}
        />
      </svg>
      <p
        className={`${styles.value} react-progress-spinner-value`}
        aria-hidden="true"
      >
        <span data-testid="spinner-value">{percentage}</span>
        <span
          className={`${styles.percentage} react-progress-spinner-percentage`}
        >
          %
        </span>
      </p>
    </div>
  );
};

export default Spinner;
