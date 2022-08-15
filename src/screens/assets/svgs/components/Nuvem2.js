import * as React from "react";

function Nuvem2(props) {
  return (
    <svg viewBox="0 0 1920 2500">
      <path
        d="M1306.45 436.23c-64.7 4.87-126.54-1.51-190.03-17.75-9.74-2.49-20.07-5.82-26.67-15.06-10-14-6.99-37.56 3.79-50.63 10.78-13.06 27.03-16.98 42.02-15.16 9.6 1.16 19.44 4.37 28.7 1.05 11.57-4.15 19.24-17.3 27-28.76 7.76-11.45 18.27-22.77 30.23-20.98 8.96 1.34 16.03 9.72 24 14.97 7.98 5.25 19.56 5.81 24.13-3.86 9.79-20.69-3.95-77.42 46.46-77.42 72.76 0 60.87 57.1 69.63 69.22 13.28 18.37 36.91 14.32 56.14 8.11 19.23-6.21 42.13-12.11 56.97 4.31 12.87 14.24 14.19 40.36 27.87 53.37 14.56 13.86 35.25 6.46 52.89.24 17.65-6.22 40.4-8.51 50.64 10.4 8.59 15.85 2.18 38.87-10.03 50.49-12.21 11.62-28.31 14.45-43.66 15.61-99.67 7.5-190.16-4.16-270.1 1.86z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoNuvem2 = React.memo(Nuvem2);
export default MemoNuvem2;
