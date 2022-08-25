import * as React from "react";

function OndaFrenteRoxo(props) {
  return (
    <svg viewBox="0 0 2246.03 800">
      <defs>
        <linearGradient
          id="OndaFrenteRoxoId"
          x1={1123.02}
          y1={1046.33}
          x2={1123.02}
          y2={219.14}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.33} stopColor="#fdfdfd" stopOpacity={0} />
          <stop offset={0.34} stopColor="#f1e8f2" stopOpacity={0.11} />
          <stop offset={0.37} stopColor="#d8b9db" stopOpacity={0.34} />
          <stop offset={0.4} stopColor="#c291c7" stopOpacity={0.55} />
          <stop offset={0.43} stopColor="#b070b7" stopOpacity={0.71} />
          <stop offset={0.47} stopColor="#a357aa" stopOpacity={0.84} />
          <stop offset={0.51} stopColor="#9945a1" stopOpacity={0.93} />
          <stop offset={0.56} stopColor="#933b9c" stopOpacity={0.98} />
          <stop offset={0.65} stopColor="#92389b" />
          <stop offset={1} stopColor="#3f319f" />
        </linearGradient>
      </defs>
      <path
        d="M295.82 70.12C151.28 115.42 58.67 112.76 0 94.93v702.48h2246.03v-590.7c-68.89-46.32-198.98-119.22-459.09 5.49s-408.03 157.69-566 37.73c-75.3-57.18-137.97-54.95-203.2-52.72-71.61 2.45-146.3 4.9-244.15-71.27C708.26 75.08 667.76 20.58 549.31 20.58c-60.02 0-140.05 13.99-253.49 49.54"
        fill="url(#OndaFrenteRoxoId)"
      />
    </svg>
  );
}

const MemoOndaFrenteRoxo = React.memo(OndaFrenteRoxo);
export default MemoOndaFrenteRoxo;
