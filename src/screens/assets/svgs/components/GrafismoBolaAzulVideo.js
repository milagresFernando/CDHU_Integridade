import * as React from "react";

function GrafismoBolaAzulVideo(props) {
  return (
    <svg data-name={2} viewBox="0 0 25 25">
      <circle cx={12.5} cy={12.5} r={12.25} fill="#00b1ed" />
    </svg>
  );
}

const MemoGrafismoBolaAzulVideo = React.memo(GrafismoBolaAzulVideo);
export default MemoGrafismoBolaAzulVideo;
