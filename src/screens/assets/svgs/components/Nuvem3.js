import * as React from "react";

function Nuvem3(props) {
  return (
    <svg viewBox="0 0 1920 2500">
      <path
        d="M410.79 584.05c-51.44 3.87-100.6-1.2-151.07-14.11-7.74-1.98-15.95-4.63-21.2-11.97-7.95-11.13-5.56-29.86 3.01-40.25s21.49-13.5 33.4-12.05c7.63.92 15.45 3.48 22.82.83 9.2-3.3 15.3-13.76 21.47-22.86 6.17-9.1 14.52-18.1 24.03-16.68 7.12 1.07 12.74 7.73 19.08 11.9 6.34 4.18 15.55 4.62 19.19-3.07 7.78-16.45-3.14-61.55 36.93-61.55 57.84 0 48.39 45.4 55.36 55.03 10.56 14.6 29.35 11.39 44.63 6.45 15.29-4.94 33.5-9.63 45.29 3.43 10.23 11.32 11.28 32.08 22.16 42.43 11.58 11.02 28.02 5.14 42.05.19 14.03-4.95 32.11-6.76 40.26 8.27 6.83 12.6 1.74 30.9-7.97 40.14-9.71 9.24-22.51 11.49-34.71 12.41-79.23 5.96-151.17-3.31-214.72 1.48z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoNuvem3 = React.memo(Nuvem3);
export default MemoNuvem3;