import * as React from "react";

function OndaFrenteRoxo(props) {
  return (
    <svg data-name="ondaFrente" viewBox="0 0 2246.03 800">
      <defs>
        <linearGradient
          id="OndaFrenteRoxoId"
          x1={1123.02}
          y1={971.19}
          x2={1123.02}
          y2={144}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.33} stopColor="#fdfdfd" stopOpacity={0} />
          <stop offset={0.41} stopColor="#e7d5e9" stopOpacity={0.2} />
          <stop offset={0.55} stopColor="#c99ecd" stopOpacity={0.48} />
          <stop offset={0.67} stopColor="#b172b7" stopOpacity={0.71} />
          <stop offset={0.8} stopColor="#a052a7" stopOpacity={0.87} />
          <stop offset={0.91} stopColor="#963f9e" stopOpacity={0.96} />
          <stop offset={1} stopColor="#93399b" />
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
